"use strict";
const express = require("express");
const router = express.Router();


const importVideosController = require("../controllers/importVideo");

router.post('/importVideos', importVideosController.importVideos);

module.exports = router;