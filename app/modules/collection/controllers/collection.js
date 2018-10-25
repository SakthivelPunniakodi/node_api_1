const output = require("../../_models/output");
const collectionRepo = require("../repository/collecton");
const jwtDecode = require("../../_helpers/jwtDecode");

exports.getAllCollection = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await collectionRepo.getAllCollection();
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
        let bookId = req.query.bookId
        if (bookId == undefined || bookId == 0) { throw { message: 'bookId must be provided' } }
        let result = await collectionRepo.getCourseCollections(bookId);
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

exports.editCollection = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let name = req.body.name;
        if (name == undefined || name == '') { throw { message: "name must be provided" } };
        let collectionId = req.body.collectionId;
        if (collectionId == undefined || collectionId == 0) { throw { message: "collectionId must be provided" } };
        let result = await collectionRepo.editCollection(userId, name, collectionId);
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

exports.addCollection = async function (req, res, next) {
    var _output = new output();
    try {

        //let userId = req.body.userId;
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let name = req.body.name;
        if (name == undefined) { throw { message: "name must be provided" } };
        let result = await collectionRepo.addCollection(userId, name);
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

exports.getCollectionWithTopic = async function (req, res, next) {
    var _output = new output();
    try {
        let collectionId = req.body.collectionId;
        if (collectionId == undefined || collectionId == 0) { throw { message: "collectionId must be provided" } };
        let result = await collectionRepo.getCollectionWithTopic(collectionId);
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

exports.addCollectionToCourse = async function (req, res, next) {
    var _output = new output();
    try {
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        //let userId = req.body.userId;
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let collectionIds = req.body.collectionIds;
        let data = req.body
        data.collectionIdLength = collectionIds.length;
        if (collectionIds == undefined || collectionIds.length == 0) { throw { message: "collectionIds must be provided" } };
        let result = await collectionRepo.addCollectionToCourse(JSON.stringify(data));
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

exports.addTopicsToCollection = async function (req, res, next) {
    var _output = new output();
    try {
        let collectionId = req.body.collectionId;
        if (collectionId == undefined || collectionId == 0) { throw { message: "collectionId must be provided" } };
        //let userId = req.body.userId;
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let topicIds = req.body.topicIds;
        let data = req.body
        data.topicCount = topicIds.length;
        if (topicIds == undefined || topicIds.length == 0) { throw { message: "topicIds must be provided" } };
        let result = await collectionRepo.addTopicsToCollection(JSON.stringify(data));
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

exports.deleteCollection = async function (req, res, next) {
    var _output = new output();
    try {
        let collectionId = req.body.collectionId;
        //let userId = req.body.userId;
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (collectionId == undefined || collectionId == 0) { throw { message: "collectionId must be provided" } };
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let result = await collectionRepo.deleteCollection(collectionId, userId);
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

exports.getCollectionInfo = async function (req, res, next) {
    var _output = new output();
    try {
        let collectionId = req.body.collectionId;
        if (collectionId == undefined || collectionId == 0) { throw { message: "collectionId must be provided" } };
        let result = await collectionRepo.getCollectionInfo(collectionId);
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