//import repository
const topicRepo = require("../repository/topic");
const output = require("../../_models/output");

exports.GetAllTopicsAndSubTopics = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await topicRepo.GetAllTopicsAndSubTopics();
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


exports.getAllTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await topicRepo.getTopics();
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
//methords to call in router
exports.getTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let bookId = req.query.bookId;
        if (bookId == undefined) { throw { message: "bookId must be provided" } }
        let result = await topicRepo.getTopic(bookId);
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
exports.deleteTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = req.query.topicId;
        if (TopicID == undefined) { throw { message: "topicId must be provided" } }
        let result = await topicRepo.deleteTopic(TopicID);
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
exports.deleteCollectionTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = req.query.topicId;
        if (TopicID == undefined) { throw { message: "topicId must be provided" } }
        let bookId = req.query.bookId;
        if (bookId == undefined) { throw { message: "bookId must be provided" } }
        let result = await topicRepo.deleteCollectionTopic(TopicID, bookId);
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

exports.editTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = req.body.topicId;
        let bookId = req.body.bookId;
        let Name = req.body.name;
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        if (TopicID == undefined || TopicID == 0) { throw { message: "topicId must be provided" } }
        if (Name == undefined || Name == 0) { throw { message: "name must be provided" } }
        let result = await topicRepo.addEditTopic(TopicID, Name, userId);
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

exports.addTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = 0;
        let Name = req.body.name;
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        if (Name == undefined || Name == 0) { throw { message: "name must be provided" } }
        let result = await topicRepo.addEditTopic(TopicID, Name, userId);
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
exports.addTopicToCollection = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = req.query.topicId;
        if (TopicID == undefined) { throw { message: "topic_id must be provided" } }
        let result = await topicRepo.getSubTopic(TopicID);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
}

exports.getSubTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = req.query.topicId;
        if (TopicID == undefined) { throw { message: "topicId must be provided" } }
        let result = await topicRepo.getSubTopic(TopicID);
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
exports.editSubTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = req.body.topicId;
        //let userID = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userID = Payload.userId
        let Name = req.body.name;
        let SubTopicID = req.body.subTopicId;
        if (TopicID == undefined || TopicID == 0) { throw { message: "topicId must be provided" } }
        if (userID == undefined || userID == 0) { throw { message: "userId must be provided" } }
        if (SubTopicID == undefined || SubTopicID == 0) { throw { message: "subTopicId must be provided" } }
        if (Name == undefined || Name == 0) { throw { message: "name must be provided" } }
        let result = await topicRepo.addEditSubTopic(TopicID, SubTopicID, Name, userID);
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

exports.addSubTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let TopicID = req.body.topicId;
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        let Name = req.body.name;
        let SubTopicID = req.body.subTopicId;
        if (TopicID == undefined || TopicID == 0) { throw { message: "topicId must be provided" } }
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        if (SubTopicID == undefined || SubTopicID != 0) { throw { message: "subTopicId must be 0" } }
        if (Name == undefined || Name == 0) { throw { message: "name must be provided" } }
        let result = await topicRepo.addEditSubTopic(TopicID, SubTopicID, Name, userId);
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

exports.deleteSubTopicInfo = async function (req, res, next) {
    var _output = new output();
    try {
        let SubTopicID = req.body.subTopicId;
        if (SubTopicID == undefined || SubTopicID == 0) { throw { message: "subTopicId must be provided" } }
        let result = await topicRepo.deleteSubTopicInfo(SubTopicID);
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

exports.deleteSubTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let SubTopicID = req.body.subTopicId;
        if (SubTopicID == undefined || SubTopicID == 0) { throw { message: "subTopicId must be provided" } }
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        let result = await topicRepo.deleteSubTopic(SubTopicID, userId);
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

exports.getVideoUnderTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let topicId = req.query.topicId;
        if (topicId == undefined || topicId == 0) { throw { message: "topicId must be provided" } }
        let userId = req.query.userId;
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        let result = await topicRepo.getVideoUnderTopic(topicId, userId);
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

exports.getVideoUnderSubtopic = async function (req, res, next) {
    var _output = new output();
    try {
        let subTopicId = req.query.subTopicId;
        if (subTopicId == undefined || subTopicId == 0) { throw { message: "subTopicId must be provided" } }
        let userId = req.query.userId;
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        let result = await topicRepo.getVideoUnderTopic(subTopicId, userId);
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

exports.deleteVideoFromTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let topicId = req.query.topicId;
        if (topicId == undefined || topicId == 0) { throw { message: "topicId must be provided" } }
        let userId = req.query.userId;
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        let videoId = req.query.videoId;
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } }
        let result = await topicRepo.deleteVideoFromTopic(topicId, videoId, userId);
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

exports.deleteVideoFromSubtopic = async function (req, res, next) {
    var _output = new output();
    try {
        let subTopicId = req.query.subTopicId;
        if (subTopicId == undefined || subTopicId == 0) { throw { message: "subTopicId must be provided" } }
        let userId = req.query.userId;
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } }
        let videoId = req.query.videoId;
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } }
        let result = await topicRepo.deleteVideoFromTopic(subTopicId, videoId, userId);
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