const userRepo = require("../repository/user");
const output = require("../../_models/output");

exports.getAdminUsers = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await userRepo.getAdminUsers();
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

exports.addAdminUser = async function (req, res, next) {
    var _output = new output();
    try {
        let data = req.body;
        data.userId = 0;
        data.userName = req.body.emailId;
        let appconfig = require('../../../../config/appConfig');
        if (appconfig.isDefault) {
            data.password = appconfig.defaultPassword;
        }
        else {
            data.password = Math.random().toString(36).slice(-8);
        }
        let firstName = req.body.firstName;
        if (firstName == undefined || firstName == '') { throw { message: "firstName must be provided." } }
        let middleName = req.body.middleName;
        if (middleName == undefined) { throw { message: "middleName must be provided." } }
        let lastName = req.body.lastName;
        if (lastName == undefined) { throw { message: "lastName must be provided." } }
        let emailId = req.body.emailId;
        if (emailId == undefined || emailId == '') { throw { message: "emailId must be provided." } }
        let updaterId = req.body.updaterId;
        if (updaterId == undefined || updaterId == 0) { throw { message: "updaterId must be provided." } }
        let result = await userRepo.addEditAdminUsers(data);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

exports.editAdminUser = async function (req, res, next) {
    var _output = new output();
    try {
        let data = req.body;
        data.userName = req.body.emailId;
        data.password = ''
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided." } }
        let firstName = req.body.firstName;
        if (firstName == undefined || firstName == '') { throw { message: "firstName must be provided." } }
        let middleName = req.body.middleName;
        if (middleName == undefined) { throw { message: "middleName must be provided." } }
        let lastName = req.body.lastName;
        if (lastName == undefined) { throw { message: "lastName must be provided." } }
        let emailId = req.body.emailId;
        if (emailId == undefined || emailId == '') { throw { message: "emailId must be provided." } }
        let updaterId = req.body.updaterId;
        if (updaterId == undefined || updaterId == 0) { throw { message: "updaterId must be provided." } }
        let result = await userRepo.addEditAdminUsers(data);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};


exports.deleteAdminUsers = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided." } }
        let updaterId = req.body.updaterId;
        if (updaterId == undefined || updaterId == 0) { throw { message: "updaterId must be provided." } }
        let result = await userRepo.deleteAdminUsers(userId, updaterId);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

exports.updateAdminPassword = async function (req, res, next) {
    var _output = new output();
    try {
        let userName = req.body.userName;
        if (userName == undefined || userName == '') { throw { message: "userName must be provided." } }
        let oldPassword = req.body.oldPassword;
        if (oldPassword == undefined || oldPassword == '') { throw { message: "oldPassword must be provided." } }
        let newPassword = req.body.newPassword;
        if (newPassword == undefined || newPassword == '') { throw { message: "newPassword must be provided." } }
        userRepo.checkPasswordCondition(password).then(res => {
            userRepo.checkOldPasswords(userName, newPassword).then(async (val) => {
                let result = await userRepo.updateAdminPassword(userName, oldPassword, newPassword);
                _output.data = result;
                _output.isSuccess = true;
                _output.message = "success";
            }).catch(err => { throw err; })
        })
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

exports.forgetPassword = async function (req, res, next) {
    var _output = new output();
    try {
        let userName = req.body.userName;
        if (userName == undefined || userName == 0) { throw { message: "userName must be provided." } }
        let password = Math.random().toString(36).slice(-8);
        let result = await userRepo.forgetPassword(userName, password);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};