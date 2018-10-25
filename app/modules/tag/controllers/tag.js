const output = require("../../_models/output");
const tagRepo = require("../repository/tag");


exports.getAllTags = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await tagRepo.getAllTags();
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

exports.updateTag = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        let tagid = req.body.tagId
        let name = req.body.name
        if (userId == undefined) { throw { message: "userId must be provided" } };
        if (tagid == undefined || tagid == 0) { throw { message: "tagId must be provided" } };
        if (name == undefined || name == '') { throw { message: "name must be provided" } };
        let result = await tagRepo.addeditTag(userId, name, tagid);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error;
    }
    res.send(_output);
};
exports.insertTag = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        let tagid = req.body.tagId
        let name = req.body.name
        if (userId == undefined) { throw { message: "userId must be provided" } };
        if (tagid == undefined || tagid != 0) { throw { message: "tagId must be 0" } };
        if (name == undefined || name == '') { throw { message: "name must be provided" } };
        let result = await tagRepo.addeditTag(userId, name, tagid);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error;
    }
    res.send(_output);
};


exports.deleteTagInfo = async function (req, res, next) {
    var _output = new output();
    try {
        let tagid = req.query.tagId;
        if (tagid == undefined || tagid == 0) { throw { message: "tagId must be provided" } }
        let result = await tagRepo.deleteTagInfo(tagid);
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

exports.deleteTag = async function (req, res, next) {
    var _output = new output();
    try {
        let tagid = req.body.tagId;
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (tagid == undefined || tagid == 0) { throw { message: "tagId must be provided" } }
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        let result = await tagRepo.deleteTag(tagid, userId);
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

exports.getAllTagsForTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let topicId = req.query.topicId;
        if (topicId == undefined || topicId == 0) { throw { message: "topicId must be provided" } }
        let result = await tagRepo.getAllTagsForTopic(topicId);
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
