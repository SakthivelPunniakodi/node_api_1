"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const elasticController = require("../controllers/elastic");

router.get('/pingHost', elasticController.pingHost);
router.post('/search', elasticController.search);

module.exports = router;

