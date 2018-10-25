var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

const elastic = require('../../elasticSearch/repository/elastic');

exports.updateVideoDetail = async (JsonData) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('JsonData', sqlType.NVarChar, JsonData);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditVideoDetails]", parameters, db_library.query_type.SP).then((value) => {
                let { userId, title, clipInfo, embeddingUrl, thumbnailUrls, duration, tagDetail } = JSON.parse(JsonData);

                let activeTags = [];
                for (let tag of tagDetail) {
                    if (tag.isActive === 1) {
                        activeTags.push(tag);
                    }
                }
                let videoDetails = { userId, videoId: value.recordsets[0][0].videoId, title, clipInfo, embeddingUrl, thumbnailUrls, duration, tagDetail: activeTags };

                elastic.addDocument(videoDetails.videoId, videoDetails).then((elasticRes) => {
                    resolve(videoDetails.videoId);
                }).catch(err => {
                    reject(err)
                });
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getVideoInfo = async (videoId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('videoId', sqlType.BigInt, videoId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetVideoInfo]", parameters, db_library.query_type.SP).then((value) => {
                resolve(value.recordsets[0][0]);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getVideoDetail = async (videoId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('VideoId', sqlType.BigInt, videoId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetVideoDetail]", parameters, db_library.query_type.SP).then((value) => {
                var video = require('../models/video')
                var _video = new video()
                if (value.recordsets[0].length == 0) { reject({ message: "No information available for this videoId." }) }
                _video.clipInfo = value.recordsets[0][0].clipInfo
                _video.title = value.recordsets[0][0].title
                _video.videoId = value.recordsets[0][0].videoId
                _video.duration = value.recordsets[0][0].duration
                _video.embeddingUrl = value.recordsets[0][0].EmbeddingUrl
                _video.tagDetail = value.recordsets[1]
                _video.topicDetail = value.recordsets[2]
                _video.subTopicDetail = value.recordsets[3]
                _video.resourceDetail = value.recordsets[4]
                _video.thumbnailUrls = value.recordsets[5]
                resolve(_video);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.unallocatedVideos = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetUnallocatedVideos]", parameters, db_library.query_type.SP).then((value) => {
                resolve({ videos: value.recordsets[0], tags: value.recordsets[1], thumbnailUrls: value.recordsets[2] });
            }).catch(err => {
                reject(err)
            });
    });
}
