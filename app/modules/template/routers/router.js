"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const templateController = require("../controller/template");

/**
 * @api {post} /createTemplate
 * @apiName createTemplate
 * @apiGroup Template
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {String} templateContent templateContent must be provided.
 * @apiParam {String} templateName templateName must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Created successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/createTemplate', templateController.createTemplate);

/**
 * @api {get} /getAllTemplate
 * @apiName getAllTemplate
 * @apiGroup Template
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{
            "templateId": "9",
            "templateName": "Unknown number",
            "templateContent": "some content"
        }],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getAllTemplate', templateController.getAllTemplate);

/**
 * @api {get} /getTemplateDetails
 * @apiName getTemplateDetails
 * @apiGroup Template
 *
 * @apiParam {Number} templateId templateId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{
            "templateId": "9",
            "templateName": "Unknown number",
            "templateContent": "some content"
        }],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/getTemplateDetails', templateController.getTemplateDetails);

/**
 * @api {post} /updateTemplate
 * @apiName updateTemplate
 * @apiGroup Template
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} templateId templateId must be provided.
 * @apiParam {String} templateContent templateContent must be provided.
 * @apiParam {String} templateName templateName must be provided.
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
router.post('/updateTemplate', templateController.updateTemplate)

/**
 * @api {get} /deleteTemplate
 * @apiName deleteTemplate
 * @apiGroup Template
 *
 * @apiParam {Number} templateId templateId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Deleted successfully.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/deleteTemplate', templateController.deleteTemplate)

module.exports = router;