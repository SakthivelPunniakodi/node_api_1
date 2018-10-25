"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const bookcodeController = require("../controller/bookcode");

/**
 * @api {post} /addBookcode
 * @apiName addBookCode
 * @apiGroup BookCode
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "Inserted successfully.",
 *       "message": "success"
 *     }
 * 
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} bookCode bookCode must be provided.
 * @apiParam {String} title title must be provided.
 *
 * @apiSuccess {Object} output.
 */
router.post('/addBookcode', bookcodeController.addBookcode);

/**
 * @api {post} /deleteBookcode
 * @apiName deleteBookcode
 * @apiGroup BookCode
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "Deleted successfully.",
 *       "message": "success"
 *     }
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} bookCode bookCode must be provided.
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteBookcode', bookcodeController.deleteBookcode);

/**
 * @api {post} /updateBookcode
 * @apiName updateBookcode
 * @apiGroup BookCode
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": "Updated successfully.",
 *       "message": "success"
 *     }
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} bookCode bookCode must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 * @apiParam {String} title title must be provided.
 *
 * @apiSuccess {Object} output.
 */
router.post('/updateBookcode', bookcodeController.updateBookcode);

/**
 * @api {post} /updateBookcode
 * @apiName updateBookcode
 * @apiGroup BookCode
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data": [{ "bookId": "1","bookCode": "bookcode", "title": "title"}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/getAllBookcode', bookcodeController.getAllBookcode);


module.exports = router;