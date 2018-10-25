"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const welcomeController = require("../controllers/welcome");


/**
 * @api {get} /
 * @apiName WelcomeAPI
 * @apiGroup Welcome
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Welcome to Pearson API.",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.get('/', welcomeController.welcome);

module.exports = router;