"use strict";
const express = require("express");
const router = express.Router();


const courseHomeController = require("../controller/courseHome");

/**
 * @api {post} /updateCourseHome
 * @apiName updateCourseHome
 * @apiGroup CourseHome
 *
 * @apiParam {Number} bookId bookId must be provided.
 * @apiParam {String} customContent customContent must be provided.
 * @apiParam {Number} templateId templateId must be provided.
 * @apiParam {Number} userId userId must be provided.
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
router.post('/updateCourseHome', courseHomeController.updateCourseHome);

/**
 * @api {get} /getCourseDetail
 * @apiName getCourseDetail
 * @apiGroup CourseHome
 *
 * @apiParam {Number} bookId bookId must be provided.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": [{"bookCode":"code","bookId":1,"customContent":"some text","templateId":1}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getCourseDetail', courseHomeController.getCourseDetail);

/**
 * @api {get} /getCourseHome
 * @apiName getCourseHome
 * @apiGroup CourseHome
 *
 * @apiParam {String} bookCode bookCode must be provided.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": [{"bookCode":1,"bookId":1,"customContent":"some text","templateId":1}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getCourseHome', courseHomeController.getCourseHome);

module.exports = router;