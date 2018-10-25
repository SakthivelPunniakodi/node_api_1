const playlistRepo = require("../repository/playlist");
const output = require("../../_models/output");

exports.createPlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let playlistId = req.body.playlistId;
        if (playlistId == undefined || playlistId != 0) { throw { message: "playlistId must be 0" } };
        let name = req.body.name;
        if (name == undefined || name == '') { throw { message: "name must be provided" } };
        let result = await playlistRepo.addEditPlaylist(playlistId, name, bookId, userId);
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

exports.updatePlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let playlistId = req.body.playlistId;
        if (playlistId == undefined || playlistId == 0) { throw { message: "playlistId must be provided" } };
        let name = req.body.name;
        if (name == undefined || name == '') { throw { message: "name must be provided" } };
        let result = await playlistRepo.addEditPlaylist(playlistId, name, bookId, userId);
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

exports.deletePlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let playlistId = req.body.playlistId;
        if (playlistId == undefined || playlistId == 0) { throw { message: "playlistId must be provided" } };
        let result = await playlistRepo.deletePlaylist(playlistId, userId);
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

exports.addVideoToPlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let playlistId = req.body.playlistId;
        if (playlistId == undefined || playlistId == 0) { throw { message: "playlistId must be provided" } };
        let videoId = req.body.videoId
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } };
        let result = await playlistRepo.addVideoToPlaylist(playlistId, videoId, userId);
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

exports.removeVideoFromPlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let playlistId = req.body.playlistId;
        if (playlistId == undefined || playlistId == 0) { throw { message: "playlistId must be provided" } };
        let videoId = req.body.videoId
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } };
        let result = await playlistRepo.removeVideoFromPlaylist(playlistId, videoId, userId);
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

exports.getVideoForPlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let playlistId = req.body.playlistId;
        if (playlistId == undefined || playlistId == 0) { throw { message: "playlistId must be provided" } };
        let result = await playlistRepo.getVideoForPlaylist(playlistId, userId);
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

exports.reOrderVideoInPlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        let videoId = req.body.videoId;
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } };
        let playlistId = req.body.playlistId;
        if (playlistId == undefined || playlistId == 0) { throw { message: "playlistId must be provided" } };
        let orderId = req.body.orderId
        if (orderId == undefined || orderId == 0) { throw { message: "orderId must be provided" } };
        let result = await playlistRepo.reOrderVideoInPlaylist(playlistId, videoId, orderId);
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

exports.getPlaylist = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let result = await playlistRepo.getPlaylist(bookId, userId);
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