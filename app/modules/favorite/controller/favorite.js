const output = require("../../_models/output");
const favoriteRepo = require("../repository/favorite");


exports.saveVideoAsFavorite = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let videoId = req.body.videoId;
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let result = await favoriteRepo.saveVideoAsFavorite(userId, videoId, bookId);
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

exports.getFavoriteVideos = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let result = await favoriteRepo.getFavoriteVideos(userId, bookId);
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

exports.removeFavoriteVideos = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let favoriteId = req.body.favoriteId;
        if (favoriteId == undefined || favoriteId == 0) { throw { message: "favoriteId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let result = await favoriteRepo.removeFavoriteVideos(userId, bookId, favoriteId);
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
