const lti = require('ims-lti');
const smsuserRepo = require("../repository/smsuser");
const output = require("../../_models/output");
const jwtLib = require("../../../../public/jwtlib");
const appconfig = require('../../../../config/appConfig');


exports.getAllSmsUsers = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await smsuserRepo.getAllSmsUsers();
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

exports.getAllCourseForUsers = async function (req, res, next) {
    var _output = new output();
    try {
        let userId = req.query.userId;
        if (userId == undefined) { throw { message: "userId must be provided" } };
        let result = await smsuserRepo.getAllCourseForUsers(userId);
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

exports.getCourses = async function (req, res, next) {
    var _output = new output();
    try {

        let result = await smsuserRepo.getCourses();
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

exports.getCourseCollections = async function (req, res, next) {
    var _output = new output();
    try {
        let bookId = req.query.bookId;
        if (bookId == undefined) { throw { message: "bookId must be provided" } };
        let result = await smsuserRepo.getCourseCollections(bookId);
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

exports.getLtiKeyValue = async function (req, res, next) {
    var _output = new output();
    try {
        let ConsumerKey = req.query.consumerKey;
        if (userId == undefined) { throw { message: "consumerKey must be provided" } };
        let result = await smsuserRepo.getLtiKeyValue(ConsumerKey);
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

exports.authenticate = async function (req, res, next) {
    var _output = new output();
    try {
        let username = req.body.username;
        if (username == undefined) { throw { message: "username must be provided" } };
        let password = req.body.password;
        if (password == undefined) { throw { message: "password must be provided" } };
        let result = await smsuserRepo.authenticate(username, password);
        var payload = {
            name: result.UserName,
            username: result.FirstName,
            userId: result.custom_person_id
        }
        req.session.roles = result.RoleId
        _output.data = result;
        _output.token = jwtLib.generateToken(payload);
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
}

exports.ltiGenerateToken = async function (req, res, next) {
    var _output = new output();
    try {
        let custom_person_name = req.body.custom_person_name;
        if (custom_person_name == undefined) { throw { message: "custom_person_name must be provided" } };
        let custom_person_id = req.body.custom_person_id;
        if (custom_person_id == undefined) { throw { message: "custom_person_id must be provided" } };
        if (req.session.custom_person_name != custom_person_name || req.session.custom_person_id != custom_person_id) {
            { throw { message: "custom_person_id must be provided" } };
        }
        var payload = {
            name: custom_person_id,
            username: custom_person_name,
            userId: custom_person_id
        }
        _output.data = "";
        _output.token = jwtLib.generateToken(payload);
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
}

exports.lti = async function (req, res, next) {
    try {
        let consumerKey = req.body.oauth_consumer_key;
        if (consumerKey == undefined) { throw { message: "consumerKey must be provided" } };
        smsuserRepo.getConsumer(consumerKey).then(consumer => {
            const consumerSecret = (consumer || {}).consumerSecret;
            const provider = new lti.Provider(consumerKey, consumerSecret);
            provider.valid_request(req, (err, isValid) => {
                if (isValid) {
                    req.session.regenerate(err => {
                        if (err) next(err);
                        req.session.contextId = provider.context_id;
                        req.session.custom_BookCode = req.body.custom_BookCode;
                        //req.session.custom_course_id = req.body.custom_course_id;
                        req.session.custom_person_id = req.body.custom_person_id;
                        req.session.roles = req.body.roles;
                        req.session.custom_person_name = req.body.custom_person_name;
                        res.redirect(301, appconfig.PSVC_WEBSITE + '/login?custom_person_id=' + req.body.custom_person_id + '&roles=' + req.body.roles + '&custom_person_name=' + req.body.custom_person_name + '&custom_BookCode=' + req.body.custom_BookCode);
                    });
                }
                else {
                    next(err);
                }
            });
        }).catch(err => next(err));
    } catch (error) {
        next(error);
    }
}

exports.getapp = async function (req, res, next) {
    try {
        if (req.session.custom_person_id) {
            _output.data = { custom_person_id: req.session.custom_person_id, custom_course_id: req.session.custom_course_id };
            _output.isSuccess = true;
            _output.message = "success";
        }
        else {
            _output.data = {};
            _output.isSuccess = false;
            _output.message = "Session Expire. Please login via LTI to use this application.";
            res.status(401);
        }
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
}