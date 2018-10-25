"use strict";
const express = require("express");
const router = express.Router();


const courseConfigController = require("../controller/courseConfigration");

router.get('/exportCourseSetting', courseConfigController.exportCourseSetting);

module.exports = router;
