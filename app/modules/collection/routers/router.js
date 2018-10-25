"use strict";
const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collection");

/**
 * @api {get} /getAllCollection
 * @apiName getAllCollection
 * @apiGroup Collection
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": [{ "collectionId": "1","name": "name"}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllCollection', collectionController.getAllCollection);

/**
 * @api {post} /addCollection
 * @apiName addCollection
 * @apiGroup Collection
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} name Collection name must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "Inserted successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/addCollection', collectionController.addCollection);

/**
 * @api {post} /editCollection
 * @apiName editCollection
 * @apiGroup Collection
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} collectionId collectionId must be provided.
 * @apiParam {String} name Collection name must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "updated successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/editCollection', collectionController.editCollection);

/**
 * @api {post} /deleteCollection
 * @apiName deleteCollection
 * @apiGroup Collection
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} collectionId collectionId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "Deleted successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteCollection', collectionController.deleteCollection);

/**
 * @api {post} /deleteCollectionInfo
 * @apiName deleteCollectionInfo
 * @apiGroup Collection
 *
 * @apiParam {Number} collectionId collectionId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": false,
 *       "data": "",
 *       "message": "This Collection mapped under Courses(1) and Topics(0). Did You want to delete?"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteCollectionInfo', collectionController.getCollectionInfo);

/**
 * @api {post} /addCollectionToCourse
 * @apiName addCollectionToCourse
 * @apiGroup Collection
 *
 * @apiParam {Number} courceId courceId must be provided.
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Object} collectionIds collectionIds must be provided. Array of collectionId [{1},{2}].
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "Updated successfully",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/addCollectionToCourse', collectionController.addCollectionToCourse);

/**
 * @api {get} /getCourseCollections
 * @apiName getCourseCollections
 * @apiGroup Collection
 *
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": [{"collectionId":1,"bookId":1,"collectionName":"sample"}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getCourseCollections', collectionController.getCourseCollections);

/**
 * @api {post} /getCollectionWithTopic
 * @apiName getCollectionWithTopic
 * @apiGroup Collection
 *
 * @apiParam {Number} collectionId collectionId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": {
 *                  "collectionInformation":{"collectionId":1,"collectionName":"name"},
 *                  "topicList":[{"topicId":1,"topicName":"topic"}]
 *               },
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/getCollectionWithTopic', collectionController.getCollectionWithTopic);

/**
 * @api {post} /addTopicsToCollections
 * @apiName addTopicsToCollections
 * @apiGroup Collection
 *
 * @apiParam {Number} collectionId collectionId must be provided.
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Object} topicIds topicIds must be provided. Array of topicId [{1},{2}].
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "Updated successfully",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/addTopicsToCollections', collectionController.addTopicsToCollection);

module.exports = router;
