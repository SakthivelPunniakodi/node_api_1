"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const smsuserController = require("../controllers/smsuser");

/**
 * @api {get} /getAllSmsUsers
 * @apiName getAllSmsUsers
 * @apiGroup SmsUser
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{
 *                  "UserId": "4",
                    "UserName": "janvi",
                    "FirstName": "Janvi",
                    "MiddleName": "K",
                    "LastName": "Khan",
                    "EmailId": "janvi@gmail.com",
                    "Password": "$2a$10$6Gaa6mVN50pGgHE0bZ5fbe7zIZlJcBbfQYMkdm9JxD4oRj8cG5S2y",
                    "RoleId": "3",
                    "SecurityQuestionId": 4,
                    "SubscribedLibraryId": "2",
                    "SecurityAnswer": "Red",
                    "CreatedOn": "2018-02-26T00:00:00.000Z"
 *              }],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllSmsUsers', smsuserController.getAllSmsUsers);

/**
 * @api {get} /getAllCourseForUser
 * @apiName getAllCourseForUser
 * @apiGroup SmsUser
 *
 * @apiParam {Number} userId userId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{
            "UserId": "19",
            "bookId": "2",
            "BookCode": "norman_mbcp1",
            "CourseName": "Billstein - MyMathLab for QA of VDW",
            "ProductTitle": null,
            "ISBN": "9783161484100",
            "Author": null,
            "CreatedOn": "2018-05-17T00:00:00.000Z",
            "CreatedBy": "1"
        }],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllCourseForUser', smsuserController.getAllCourseForUsers);

/**
 * @api {post} /lti
 * @apiName lti
 * @apiGroup SmsUser
 *
 * @apiParam {String} oauth_consumer_key oauth_consumer_key must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 301 
 *     redirect to course home page
 *
 * @apiSuccess {Object} output.
 */
router.post('/lti', smsuserController.lti);

/**
 * @api {post} /ltiGenerateToken
 * @apiName ltiGenerateToken
 * @apiGroup SmsUser
 *
 * @apiParam {String} custom_person_name custom_person_name must be provided.
 * @apiParam {Number} custom_person_id custom_person_id must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":'',
 *       "message": "success",
 *       "token":"sdjflksdjfkdsj.dfsadolfsd.sadf"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/ltiGenerateToken', smsuserController.ltiGenerateToken);

//router.get('/getLTIKeyValue', smsuserController.get_lti_key_value);

/**
 * @api {post} /adminAuthenticate
 * @apiName adminAuthenticate
 * @apiGroup SmsUser
 *
 * @apiParam {String} username username must be provided.
 * @apiParam {String} password password must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":{},
 *       "token":"sdjflksdjfkdsj.dfsadolfsd.sadf"
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/adminAuthenticate', smsuserController.authenticate);

router.get('/getCourses', smsuserController.getCourses);

router.get('/getCourseInformation', smsuserController.getCourseCollections);



module.exports = router;