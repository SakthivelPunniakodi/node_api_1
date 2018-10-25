'use strict'
var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');
const bcrypt = require("bcrypt");


exports.getAllSmsUsers = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllSMSUsers]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getAllCourseForUsers = async (userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetAllCourseForUser]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getCourses = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library.execute("[Temp_GetCourses]", parameters, db_library.query_type.SP).then((value) => {
            resolve(value.recordsets[0]);
        }).catch(err => {
            reject(err);
        })
    });
};

exports.getCourseCollections = async (bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library.execute("[Temp_GetCourseCollectionList]", parameters, db_library.query_type.SP).then((value) => {
            let response = {
                courseInformation: value.recordsets[0],
                cousreCollections: value.recordsets[1]
            }
            resolve(response);
        }).catch(err => {
            reject(err);
        })
    });
};

exports.getLtiKeyValue = async (ConsumerKey) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('ConsumerKey', sqlType.BigInt, ConsumerKey);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetLTIKeyValue]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.authenticate = async (username, password) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
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
                            custom_person_id: value.recordsets[1][0].UserId,
                            user_name: value.recordsets[1][0].UserName,
                            custom_person_name: value.recordsets[1][0].FirstName,
                            first_name: value.recordsets[1][0].FirstName,
                            middle_name: value.recordsets[1][0].MiddleName,
                            last_name: value.recordsets[1][0].LastName,
                            email_id: value.recordsets[1][0].EmailId,
                            role_id: value.recordsets[1][0].RoleId,
                            roles: value.recordsets[1][0].RoleName,
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

exports.getConsumer = (consumerKey) => {
    return new Promise((resolve, reject) => {
        try {
            let parameters = [];
            let para = new param('consumerKey', sqlType.NVarChar, consumerKey);
            parameters.push(para);
            db_library
                .execute("[dbo].[GetLTIKeyDetails]", parameters, db_library.query_type.SP).then((value) => {
                    var results = value.recordsets[0][0];
                    resolve(results);
                }).catch(err => {
                    reject(err)
                });
        } catch (error) {
            reject(error);
        }
    });
}