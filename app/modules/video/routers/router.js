"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const videoController = require("../controllers/video");

/**
 * @api {get} /getVideoDetails
 * @apiName getVideoDetails
 * @apiGroup Video
 *
 * @apiParam {Number} videoId videoId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":{
 *      "userId": "",
        "clipInfo": "Desc 01",
        "videoId": "",
        "duration": "",
        "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad",
        "title": "Title02",
        "thumbnailUrls": [
            {
                "Id": "6",
                "ThumbnailURL": "http://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0100_iPad_1158736451837_mp4_video_960x720_2432000_primary_audio_eng_5_1920x240_1158737987541.jpg",
                "VideoId": "5"
            }
        ],
        "tagDetail": [],
        "topicDetail": [],
        "subTopicDetail": [
            {
                "id": "4",
                "subTopicId": "121",
                "Name": "sb4",
                "topicId": "76"
            },
            {
                "id": "5",
                "subTopicId": "5",
                "Name": "Etilogical Theories of Substance Abuse",
                "topicId": "2"
            }
        ],
        "resourceDetail": []
 *              },
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getVideoDetails', videoController.getVideoDetail);

/**
 * @api {get} /getVideoInfo
 * @apiName getVideoInfo
 * @apiGroup Video
 *
 * @apiParam {Number} videoId videoId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": {
            "videoId": "5",
            "title": "Title02",
            "clipInfo": "Desc 01",
            "EmbeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad",
            "duration": "10:10"
            },
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getVideoInfo', videoController.getVideoInfo);

/**
 * @api {post} /updateVideoDetails
 * @apiName updateVideoDetails
 * @apiGroup Video
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} clipInfo clipInfo must be provided.
 * @apiParam {Number} videoId videoId must be provided.
 * @apiParam {String} duration duration must be provided.
 * @apiParam {String} embeddingUrl embeddingUrl must be provided.
 * @apiParam {String} title title must be provided.
 * @apiParam {Object} thumbnailUrls thumbnailUrls must be provided[{"id":1,"size":"60","thumbnailUrl":"url.com","isActive":1}].
 * @apiParam {Object} tagDetail tagDetail must be provided. Array of tags[{"id":1,"tagId":1,"name":"","isActive":1}].
 * @apiParam {Object} topicDetail topicDetail must be provided. Array of topics[{"id":1,"topicId":1,"name":"name","isActive":1}].
 * @apiParam {Object} subTopicDetail subTopicDetail must be provided. Array of subTopics[{"id":1,"topicId":1,"subTopicId":2,"name":"name","isActive":1}].
 * @apiParam {Object} resourceDetail resourceDetail must be provided. Array of resources[{"resourceId":1,"name":"name.pdf","resourceUrl":"url.com","isActive":1}].
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":1,
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/updateVideoDetails', videoController.updateVideoDetail);

/**
 * @api {get} /unallocatedVideos
 * @apiName unallocatedVideos
 * @apiGroup Video
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": [
            {
            "clipInfo": "clip info",
            "duration": "0",
            "title": "v t 1",
            "videoId": "15",
            "embeddingUrl": "https://github.com/Pearson-Higher-Ed"
            }
        ],
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/unallocatedVideos', videoController.unallocatedVideos);

module.exports = router;

