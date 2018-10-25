var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');
const bcrypt = require("bcrypt");
const user = require('./user');

var Encrypt = async (myPlaintextPassword) => {
    return await new Promise((resolve, reject) => {
        try {
            bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
                if (err) { reject({ message: err }) }
                let encryptPass = hash;
                resolve(encryptPass);
            });
        } catch (error) {
            reject(error);
        }
    });
}

exports.getAdminUsers = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllAdminUsers]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addEditAdminUsers = async (data) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, data.userId);
        parameters.push(para);
        para = new param('userName', sqlType.NVarChar, data.userName);
        parameters.push(para);
        para = new param('firstName', sqlType.NVarChar, data.firstName);
        parameters.push(para);
        para = new param('middleName', sqlType.NVarChar, data.middleName);
        parameters.push(para);
        para = new param('lastName', sqlType.NVarChar, data.lastName);
        parameters.push(para);
        para = new param('emailId', sqlType.NVarChar, data.emailId);
        parameters.push(para);
        let password = await Encrypt(data.password)
        para = new param('password', sqlType.NVarChar, password);
        parameters.push(para);
        para = new param('updaterId', sqlType.BigInt, data.updaterId);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditAdminUsers]", parameters, db_library.query_type.SP).then(async (value) => {
                if (value.recordsets[0][0].status == 0) {
                    reject(value.recordsets[0][0].message);
                }
                if (data.userId == 0) {
                    const UserDetails = value.recordsets[1][0];
                    const appConfig = require("../../../../config/appConfig")
                    var mailTemplate = await getMailTemplate(appConfig.MailTemplate.AdminUserCreation);
                    const mailOption = require('../../_mailer/mailOptions')
                    let _mailOption = new mailOption();
                    _mailOption.to = UserDetails.EmailId;
                    _mailOption.subject = mailTemplate.TemplateSubject
                    _mailOption.html = mailTemplate.TemplateContent.replace(";email;", UserDetails.EmailId).replace(";password;", _newPass)
                        .replace(";name;", UserDetails.FirstName).replace(";link;", appConfig.PSVC_WEBSITE)
                    var _mailer = require('../../_mailer/mailer');
                    _mailer.sendMail(_mailOption);
                }
                resolve(value.recordsets[0][0].message);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteAdminUsers = async (userId, updaterId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('updaterId', sqlType.BigInt, updaterId);
        parameters.push(para); db_library
            .execute("[dbo].[DeleteAdminUser]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0][0].status == 0) {
                    reject(value.recordsets[0][0].message);
                }
                resolve(value.recordsets[0][0].message);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.updateAdminPassword = async (userName, oldPassword, newPassword) => {
    return await new Promise(async (resolve, reject) => {
        let Checkauthenticate = await user.authenticate(userName, oldPassword).catch(value => {
            reject(value);
        });
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, Checkauthenticate.userId);
        parameters.push(para);
        let _newPass = newPassword;
        newPassword = await Encrypt(newPassword)
        para = new param('newPassword', sqlType.NVarChar, newPassword);
        parameters.push(para); db_library
            .execute("[dbo].[ChangeAdminPassword]", parameters, db_library.query_type.SP).then(async (value) => {
                if (value.recordsets[0][0].status == 0) {
                    reject(value.recordsets[0][0].message);
                }
                const UserDetails = value.recordsets[1][0];
                const appConfig = require("../../../../config/appConfig")
                var mailTemplate = await getMailTemplate(appConfig.MailTemplate.ChangePassword);
                const mailOption = require('../../_mailer/mailOptions')
                let _mailOption = new mailOption();
                _mailOption.to = UserDetails.EmailId;
                _mailOption.subject = mailTemplate.TemplateSubject
                _mailOption.html = mailTemplate.TemplateContent.replace(";email;", UserDetails.EmailId).replace(";password;", _newPass)
                    .replace(";name;", UserDetails.FirstName).replace(";link;", appConfig.PSVC_WEBSITE)
                var _mailer = require('../../_mailer/mailer');
                _mailer.sendMail(_mailOption);
                resolve(value.recordsets[0][0].message);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.authenticate = async (username, password) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        //password = await Encrypt(password);
        let para = new param('username', sqlType.NVarChar, username);
        parameters.push(para);
        db_library
            .execute("[dbo].[Getuserdetails]", parameters, db_library.query_type.SP).then((value) => {
                let resultsCheck = value.recordsets[0][0];
                if (resultsCheck.status == 0) { reject({ message: resultsCheck.message }) }
                let encryptPass = value.recordsets[1][0].Password
                bcrypt.compare(password, encryptPass, function (err, isEqual) {
                    if (isEqual) {
                        var results = {
                            userId: value.recordsets[1][0].UserId,
                            userName: value.recordsets[1][0].UserName,
                            firstName: value.recordsets[1][0].FirstName,
                            middleName: value.recordsets[1][0].MiddleName,
                            lastName: value.recordsets[1][0].LastName,
                            emailId: value.recordsets[1][0].EmailId,
                            roleId: value.recordsets[1][0].RoleId,
                        };
                        resolve(results);
                    } else {
                        reject({ message: 'Invalid UserName or Password.' })
                    }
                });
            }).catch(err => {
                reject(err)
            });
    });
}


exports.checkOldPasswords = async (userName, password) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userName', sqlType.NVarChar, userName);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetAllPasswords]", parameters, db_library.query_type.SP).then((value) => {
                let output = value.recordsets[0];
                const bcrypt = require("bcrypt");
                output.array.forEach(element => {
                    bcrypt.compare(element.password, password, function (err, isEqual) {
                        if (isEqual) {
                            reject({ message: 'Already you tried this password. Please provide new password.' })
                        }
                    });
                    resolve(true);
                }).catch(err => {
                    reject(err)
                });
            });
    })
}

exports.forgetPassword = async (userName, password) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userName', sqlType.NVarChar, userName);
        parameters.push(para);
        let encpassword = await Encrypt(password)
        para = new param('newPassword', sqlType.NVarChar, encpassword);
        parameters.push(para);
        db_library
            .execute("[dbo].[ChangePassword]", parameters, db_library.query_type.SP).then(async (value) => {
                var UserDetails = value.recordsets[1][0];
                const mailOption = require('../../_mailer/mailOptions')
                const appConfig = require("../../../../config/appConfig")
                var mailTemplate = await getMailTemplate(appConfig.MailTemplate.ForgotPassword);
                let _mailOption = new mailOption();
                _mailOption.to = UserDetails.EmailId;
                _mailOption.subject = mailTemplate.TemplateSubject
                _mailOption.html = mailTemplate.TemplateContent.replace(";email;", UserDetails.EmailId).replace(";password;", password)
                    .replace(";name;", UserDetails.FirstName).replace(";link;", appConfig.PSVC_WEBSITE)
                var _mailer = require('../../_mailer/mailer');
                _mailer.sendMail(_mailOption);
                resolve(true);
            }).catch(err => {
                reject(err)
            });
    })
}

getMailTemplate = async (id) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('Id', sqlType.BigInt, id);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetMailTemplate]", parameters, db_library.query_type.SP).then((value) => {
                resolve(value.recordsets[0][0]);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.checkPasswordCondition = async (password) => {
    return await new Promise((resolve, reject) => {
        var Check1 = password.match(/^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?\d)(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?\d)(?=.*?[^a-zA-Z0-9])).{8,100}$/g);
        var Check2 = password.match(/.*[(£€¤¥)].*/g);
        if (Check1 == null || Check2 != null) {
            reject({ message: 'Password should contain atleast one uppercase, one number and one symbols [except (£, €, ¤, ¥)]' })
        }
        resolve(true);
    });
}