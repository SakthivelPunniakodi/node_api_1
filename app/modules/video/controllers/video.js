const output = require("../../_models/output");
const videoRepo = require("../repository/video");

exports.getVideoDetail = async function (req, res, next) {
    var _output = new output();
    try {
        let videoId = req.query.videoId
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } };
        let result = await videoRepo.getVideoDetail(videoId);
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

exports.unallocatedVideos = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await videoRepo.unallocatedVideos();
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

exports.getVideoInfo = async function (req, res, next) {
    var _output = new output();
    try {
        let videoId = req.query.videoId
        if (videoId == undefined || videoId == 0) { throw { message: "videoId must be provided" } };
        let result = await videoRepo.getVideoInfo(videoId);
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

exports.updateVideoDetail = async function (req, res, next) {
    var _output = new output();
    try {
        let videoId = req.body.videoId
        if (videoId == undefined) { throw { message: "videoId must be provided" } };
        //let userId = req.body.userId
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let title = req.body.title
        if (title == undefined || title == "") { throw { message: "title must be provided" } };
        let clipInfo = req.body.clipInfo
        if (clipInfo == undefined || clipInfo == "") { throw { message: "clipInfo must be provided" } };
        let embeddingUrl = req.body.embeddingUrl
        if (embeddingUrl == undefined || embeddingUrl == "") { throw { message: "embeddingUrl must be provided" } };
        let thumbnailUrls = req.body.thumbnailUrls
        if (thumbnailUrls.length == 0) { throw { message: "thumbnailUrls must be provided" } };
        let data = req.body
        data.resourceCount = data.resourceDetail.length
        data.tagCount = data.tagDetail.length
        data.topicCount = data.topicDetail.length
        data.subtopicCount = data.subTopicDetail.length
        data.thumbnailUrlCount = data.thumbnailUrls.length
        let result = await videoRepo.updateVideoDetail(JSON.stringify(data));
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

