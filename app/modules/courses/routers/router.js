"use strict";
const express = require("express");
const router = express.Router();


const coursesController = require("../controllers/courses");

/**
 * @api {get} /getAllCourses
 * @apiName getAllCourses
 * @apiGroup Courses
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{"bookId":1,"courseName":"name","productTitle":"title","isbn":"","author":"","bookCode":"code"}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllCourses', coursesController.getAllCourses);

/**
 * @api {get} /getAllCourseVideos
 * @apiName getAllCourseVideos
 * @apiGroup Courses
 *
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{"bookId":1,"collectionId":1,"collectionName":"name","subTopicId":1,"topicId":1,"vidoeId":1,"clipInfo":"info","duration":"","embeddingUrl":"","title":"","thumbnailUrl":""}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllCourseVideos', coursesController.getAllCourseVideo);

module.exports = router;