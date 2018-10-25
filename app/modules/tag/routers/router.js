"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const tagController = require("../controllers/tag");


//adding the router path with specific methods
/**
 * @api {get} /getAllTags
 * @apiName getAllTags
 * @apiGroup Tag
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[ {
            "tagId": "4",
            "name": "Counting"
        }],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllTags', tagController.getAllTags);

/**
 * @api {post} /updateTag
 * @apiName updateTag
 * @apiGroup Tag
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} tagId tagId must be provided.
 * @apiParam {String} name name must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Updated successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/updateTag', tagController.updateTag);

/**
 * @api {post} /insertTag
 * @apiName insertTag
 * @apiGroup Tag
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} tagId tagId must be provided.
 * @apiParam {String} name name must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Inserted successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/insertTag', tagController.insertTag);

/**
 * @api {get} /deleteTagInfo
 * @apiName deleteTagInfo
 * @apiGroup Tag
 *
 * @apiParam {Number} tagId tagId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Tag not mapped in any video.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/deleteTagInfo', tagController.deleteTagInfo);

/**
 * @api {post} /deleteTag
 * @apiName deleteTag
 * @apiGroup SmsUser
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} tagId tagId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Deleted Successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteTag', tagController.deleteTag);

/**
 * @api {get} /getAllTagsForTopic
 * @apiName getAllTagsForTopic
 * @apiGroup Tag
 *
 * @apiParam {Number} topicId topicId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{
            "tagId": "9",
            "name": "Unknown number",
            "videoId": "6",
            "topicId": "5"
        }],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllTagsForTopic', tagController.getAllTagsForTopic);

module.exports = router;