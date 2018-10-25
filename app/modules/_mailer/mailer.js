'use strict'
const _nodemailer = (account, mailOptions) => {
    return new Promise((resolve, reject) => {
        const nodemailer = require('nodemailer');

        nodemailer.createTestAccount(() => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.office365.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user,//
                    pass: account.password// 
                },
                tls: {
                    ciphers: 'SSLv3'
                }
            });


            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(info);
                }
            });
        })
    })
}
exports.sendMail = async (_mailOptions) => {
    //return new Promise((reject, response) => {
    var account = {};
    account.user = "iengine.cloudtest@integra.co.in";
    account.password = "Password1";
    await _nodemailer(account, _mailOptions).catch(err => {
        console.log(err)
    });
    //});
}
