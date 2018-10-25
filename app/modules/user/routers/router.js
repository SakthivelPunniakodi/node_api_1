"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const userController = require("../controller/user");

/**
 * @api {post} /getAdminUsers
 * @apiName getAdminUsers
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": [
            {
            "userId": 1,
            "userName": "mail@mail.com",
            "firstName": "name",
            "middleName": "name",
            "lastName": "name",
            "emailId": "mail@mail.com"
            }
        ],
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/getAdminUsers', userController.getAdminUsers);

/**
 * @api {post} /addAdminUsers
 * @apiName addAdminUsers
 * @apiGroup User
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} userName userName must be provided.
 * @apiParam {String} password password must be provided.
 * @apiParam {String} firstName firstName must be provided.
 * @apiParam {String} middleName middleName must be provided.
 * @apiParam {String} lastName lastName must be provided.
 * @apiParam {String} emailId emailId must be provided.
 * @apiParam {Number} updaterId updaterId must be provided.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Inserted successfully.",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/addAdminUsers', userController.addAdminUser);

/**
 * @api {post} /editAdminUsers
 * @apiName editAdminUsers
 * @apiGroup User
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} userName userName must be provided.
 * @apiParam {String} password password must be provided.
 * @apiParam {String} firstName firstName must be provided.
 * @apiParam {String} middleName middleName must be provided.
 * @apiParam {String} lastName lastName must be provided.
 * @apiParam {String} emailId emailId must be provided.
 * @apiParam {Number} updaterId updaterId must be provided.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Updated successfully",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/editAdminUsers', userController.editAdminUser);

/**
 * @api {post} /deleteAdminUsers
 * @apiName deleteAdminUsers
 * @apiGroup User
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} updaterId updaterId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "isSuccess": true,
        "data": "Deleted successfully",
        "message": "success"
        }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteAdminUsers', userController.deleteAdminUsers);

/**
 * @api {post} /updateAdminPassword
 * @apiName updateAdminPassword
 * @apiGroup User
 *
 * @apiParam {String} userName userName must be provided.
 * @apiParam {String} oldPassword oldPassword must be provided.
 * @apiParam {String} newPassword newPassword must be provided.
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
router.post('/updateAdminPassword', userController.updateAdminPassword);

/**
 * @api {post} /forgotPassword
 * @apiName forgotPassword
 * @apiGroup User
 *
 * @apiParam {String} userName userName must be provided.
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
router.post('/forgotPassword', userController.forgetPassword)

module.exports = router;
