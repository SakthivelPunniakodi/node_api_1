"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const topicController = require("../controllers/topic");


/**
 * @api {get} /getAllTopicAndSubTopic
 * @apiName getAllTopicAndSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": {
        "topics": [
            {
                "topicId": "2",
                "name": "Etilogical Theories of Substance sAbuse"
            },
            {
                "topicId": "13",
                "name": "Career Counseling"
            },
            {
                "topicId": "27",
                "name": "Counseling Theories"
            },
            {
                "topicId": "45",
                "name": "Introduction to Counseling"
            }
        ],
        "subTopics": [
            {
                "subTopicId": "3",
                "topicId": "2",
                "name": "Introduction to Substance Abuse Counseling"
            },
            {
                "subTopicId": "4",
                "topicId": "2",
                "name": "The Major Substsances of Abuse and the Body"
            },
            {
                "subTopicId": "5",
                "topicId": "2",
                "name": "Etilogical Theories of Substance Abuse"
            },
            {
                "subTopicId": "6",
                "topicId": "2",
                "name": "Assessment and Diagnosis"
            },
            {
                "subTopicId": "7",
                "topicId": "2",
                "name": "Treatment Setting and Treatment Planning"
            }
        ]
    },
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllTopicAndSubTopic', topicController.GetAllTopicsAndSubTopics);

/**
 * @api {get} /selectAllTopic
 * @apiName selectAllTopic
 * @apiGroup Topic
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": [
                    {
                    "topicId": "2",
                    "name": "Etilogical Theories of Substance sAbuse"
                    },
                    {
                    "topicId": "13",
                    "name": "Career Counseling"
                    }
                ],
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/selectAllTopic', topicController.getAllTopic);

/**
 * @api {get} /selectTopic
 * @apiName selectTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": [
                    {
                     "topicId": "13",
                     "name": "Career Counseling",
                     "course_id": "1"
                    },
                    {
                     "topicId": "27",
                     "name": "Counseling Theories",
                     "course_id": "1"
                    }
                ],
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/selectTopic', topicController.getTopic);

/**
 * @api {get} /deleteTopic
 * @apiName deleteTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Deleted successfully.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/deleteTopic', topicController.deleteTopic);

/**
 * @api {get} /deleteCollectionTopic
 * @apiName deleteCollectionTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": true,
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/deleteCollectionTopic', topicController.deleteCollectionTopic);

/**
 * @api {post} /updateTopic
 * @apiName updateTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 * @apiParam {String} name name must be provided.
 * @apiParam {Number} userId userId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Updated successfully.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/updateTopic', topicController.editTopic);

/**
 * @api {post} /createTopic
 * @apiName createTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} name name must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Created successfully.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/createTopic', topicController.addTopic);

/**
 * @api {post} /getAllTopicAndSubTopic
 * @apiName getAllTopicAndSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": {"topics": [
            {
                "topicId": "2",
                "name": "Etilogical Theories of Substance sAbuse"
            },
            {
                "topicId": "13",
                "name": "Career Counseling"
            },
            {
                "topicId": "27",
                "name": "Counseling Theories"
            },
            {
                "topicId": "45",
                "name": "Introduction to Counseling"
            }
        ],
        "subTopics": [
            {
                "subTopicId": "3",
                "topicId": "2",
                "name": "Introduction to Substance Abuse Counseling"
            },
            {
                "subTopicId": "4",
                "topicId": "2",
                "name": "The Major Substsances of Abuse and the Body"
            },
        ]
        },
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/getAllTopicAndSubTopic', topicController.GetAllTopicsAndSubTopics)

/**
 * @api {get} /selectSubTopic
 * @apiName selectSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": [
                    {
                     "subTopicId": "89",
                     "name": "sample sub topic",
                     "topicId": "1"
                    }
                ],
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/selectSubTopic', topicController.getSubTopic);

/**
 * @api {post} /updateSubTopic
 * @apiName updateSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} name name must be provided.
 * @apiParam {Number} subTopicId subTopicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": 1,
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/updateSubTopic', topicController.editSubTopic);

/**
 * @api {post} /createSubTopic
 * @apiName createSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} name name must be provided.
 * @apiParam {Number} subTopicId subTopicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": 1,
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/createSubTopic', topicController.addSubTopic);

/**
 * @api {post} /deleteSubTopicInfo
 * @apiName deleteSubTopicInfo
 * @apiGroup Topic
 *
 * @apiParam {Number} subTopicId subTopicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "No videos under this subTopic.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteSubTopicInfo', topicController.deleteSubTopicInfo);

/**
 * @api {post} /deleteSubTopic
 * @apiName deleteSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} subTopicId subTopicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Deleted successfully.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteSubTopic', topicController.deleteSubTopic);


/**
 * @api {get} /selectVideoForTopic
 * @apiName selectVideoForTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 * @apiParam {Number} userId userId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": {
        "video": [
            {
                "videoId": "2",
                "topicId": "120",
                "title": "Maths problem solving",
                "clipInfo": "Desc 01",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0147_iPad",
                "thumbnailUrl": null,
                "duration": "10:10",
                "favoriteId": null
            },
            {
                "videoId": "3",
                "topicId": "120",
                "title": "Lorem Ipsum",
                "clipInfo": "Desc 02",
                "embeddingUrl": "https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0101_iPad_1158736451792_mp4_video_960x720_1800000_primary_audio_eng_4_1920x360_1158734403966.jpg",
                "thumbnailUrl": null,
                "duration": "11:10",
                "favoriteId": null
            },
            {
                "videoId": "4",
                "topicId": "121",
                "title": "Title 01",
                "clipInfo": "Desc 01",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/imap-0184_iPad",
                "thumbnailUrl": null,
                "duration": "10:10",
                "favoriteId": null
            },
            {
                "videoId": "5",
                "topicId": "121",
                "title": "Title02",
                "clipInfo": "Desc 01",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad",
                "thumbnailUrl": "http://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0100_iPad_1158736451837_mp4_video_960x720_2432000_primary_audio_eng_5_1920x240_1158737987541.jpg",
                "duration": "10:10",
                "favoriteId": null
            },
            {
                "videoId": "17",
                "topicId": "76",
                "title": "v t 01",
                "clipInfo": "c i",
                "embeddingUrl": "https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp",
                "thumbnailUrl": null,
                "duration": "0",
                "favoriteId": null
            },
            {
                "videoId": "23",
                "topicId": "76",
                "title": "v t",
                "clipInfo": "c i",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad",
                "thumbnailUrl": "https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/699/imap-0117_iPad_1158736963767_mp4_video_960x720_2432000_primary_audio_eng_5_84x64_1158736964002.jpg",
                "duration": "00:00:55",
                "favoriteId": null
            }
        ],
        "tags": [
            {
                "vidoeId": "17",
                "tagId": "10",
                "tagName": "Numeric 01"
            },
            {
                "vidoeId": "17",
                "tagId": "16",
                "tagName": "Part unknown"
            },
            {
                "vidoeId": "17",
                "tagId": "25",
                "tagName": "equal groups"
            },
            {
                "vidoeId": "23",
                "tagId": "19",
                "tagName": "distributive property"
            }
        ],
        "resources": [
            {
                "resourceUrl": "https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad",
                "videoId": "23",
                "resourceName": "d"
            },
            {
                "resourceUrl": "https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp",
                "videoId": "17",
                "resourceName": "r 1"
            },
            {
                "resourceUrl": "https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp",
                "videoId": "17",
                "resourceName": "r 2"
            }
        ]
    },
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/selectVideoForTopic', topicController.getVideoUnderTopic);

/**
 * @api {get} /selectVideoForSubTopic
 * @apiName selectVideoForSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} subTopicId subTopicId must be provided.
 * @apiParam {Number} userId userId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": {
        "video": [
            {
                "videoId": "2",
                "topicId": "120",
                "title": "Maths problem solving",
                "clipInfo": "Desc 01",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0147_iPad",
                "thumbnailUrl": null,
                "duration": "10:10",
                "favoriteId": null
            },
            {
                "videoId": "3",
                "topicId": "120",
                "title": "Lorem Ipsum",
                "clipInfo": "Desc 02",
                "embeddingUrl": "https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0101_iPad_1158736451792_mp4_video_960x720_1800000_primary_audio_eng_4_1920x360_1158734403966.jpg",
                "thumbnailUrl": null,
                "duration": "11:10",
                "favoriteId": null
            },
            {
                "videoId": "4",
                "topicId": "121",
                "title": "Title 01",
                "clipInfo": "Desc 01",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/imap-0184_iPad",
                "thumbnailUrl": null,
                "duration": "10:10",
                "favoriteId": null
            },
            {
                "videoId": "5",
                "topicId": "121",
                "title": "Title02",
                "clipInfo": "Desc 01",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad",
                "thumbnailUrl": "http://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0100_iPad_1158736451837_mp4_video_960x720_2432000_primary_audio_eng_5_1920x240_1158737987541.jpg",
                "duration": "10:10",
                "favoriteId": null
            },
            {
                "videoId": "17",
                "topicId": "76",
                "title": "v t 01",
                "clipInfo": "c i",
                "embeddingUrl": "https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp",
                "thumbnailUrl": null,
                "duration": "0",
                "favoriteId": null
            },
            {
                "videoId": "23",
                "topicId": "76",
                "title": "v t",
                "clipInfo": "c i",
                "embeddingUrl": "https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad",
                "thumbnailUrl": "https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/699/imap-0117_iPad_1158736963767_mp4_video_960x720_2432000_primary_audio_eng_5_84x64_1158736964002.jpg",
                "duration": "00:00:55",
                "favoriteId": null
            }
        ],
        "tags": [
            {
                "vidoeId": "17",
                "tagId": "10",
                "tagName": "Numeric 01"
            },
            {
                "vidoeId": "17",
                "tagId": "16",
                "tagName": "Part unknown"
            },
            {
                "vidoeId": "17",
                "tagId": "25",
                "tagName": "equal groups"
            },
            {
                "vidoeId": "23",
                "tagId": "19",
                "tagName": "distributive property"
            }
        ],
        "resources": [
            {
                "resourceUrl": "https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad",
                "videoId": "23",
                "resourceName": "d"
            },
            {
                "resourceUrl": "https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp",
                "videoId": "17",
                "resourceName": "r 1"
            },
            {
                "resourceUrl": "https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp",
                "videoId": "17",
                "resourceName": "r 2"
            }
        ]
    },
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/selectVideoForSubTopic', topicController.getVideoUnderSubtopic);

/**
 * @api {get} /deleteVideoFromTopic
 * @apiName deleteVideoFromTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} topicId topicId must be provided.
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} videoId videoId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Deleted Successfully.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/deleteVideoFromTopic', topicController.deleteVideoFromTopic);

/**
 * @api {get} /deleteVideoFromSubTopic
 * @apiName deleteVideoFromSubTopic
 * @apiGroup Topic
 *
 * @apiParam {Number} subTopicId subTopicId must be provided.
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} videoId videoId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Deleted successfully.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.get('/deleteVideoFromSubTopic', topicController.deleteVideoFromSubtopic);

//router.post('/addTopicToCollection',topicController.addTopicToCollection);

module.exports = router;