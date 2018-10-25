const output = require("../../_models/output");

exports.importVideos = async function (req, res, next) {
    var _output = new output();
    try {
        var videoRepo = require('../../video/repository/video')
        let data = req.body
        if (data == undefined || !Array.isArray(data)) { throw { message: 'Array of Videos must be provided.' } }

        data.forEach(async element => {
            try {
                element.resourceCount = element.resourceDetail.length
                element.tagCount = element.tagDetail.length
                element.topicCount = element.topicDetail.length
                element.subtopicCount = element.subTopicDetail.length
                element.thumbnailUrlCount = element.thumbnailUrls.length
                element.videoId = await videoRepo.updateVideoDetail(JSON.stringify(element));
                element.isSuccess = true
                element.message = "Successfully done."
            } catch (err) {
                element.isSuccess = false
                element.message = err.message
            }
        });
        _output.data = data;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

