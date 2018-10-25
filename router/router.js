"use strict";
const express = require("express");
const router = express.Router();
const appConfig = require("../config/appConfig");


//import the sub routers
const welcomeRouter = require("../app/modules/welcome/routers/router");
const topicRouter = require("../app/modules/topic/routers/router");
const smsUserRouter = require("../app/modules/smsuser/routers/router");
const collectionRouter = require("../app/modules/collection/routers/router");
const coursesRouter = require("../app/modules/courses/routers/router");
const tagRouter = require("../app/modules/tag/routers/router");
const videoRouter = require("../app/modules/video/routers/router");
const playlistRouter = require("../app/modules/playlist/routers/router");
const favoriteRouter = require("../app/modules/favorite/routers/router");
const userRouter = require("../app/modules/user/routers/router");
const bookcodeRouter = require("../app/modules/bookcode/routers/router");
const templateRouter = require("../app/modules/template/routers/router");
const courseHomeRouter = require("../app/modules/courseHome/routers/router");
const excelExportRouter = require("../app/modules/excelExport/router/router");
const importVideoRouter = require("../app/modules/importExcel/router/router");
const elasticRouter = require("../app/modules/elasticSearch/router/router");


router.use(appConfig.PREFIX, welcomeRouter);
router.use(appConfig.PREFIX, topicRouter);
router.use(appConfig.PREFIX, smsUserRouter);
router.use(appConfig.PREFIX, collectionRouter);
router.use(appConfig.PREFIX, coursesRouter);
router.use(appConfig.PREFIX, tagRouter);
router.use(appConfig.PREFIX, videoRouter);
router.use(appConfig.PREFIX, playlistRouter);
router.use(appConfig.PREFIX, favoriteRouter);
router.use(appConfig.PREFIX, userRouter);
router.use(appConfig.PREFIX, bookcodeRouter);
router.use(appConfig.PREFIX, templateRouter);
router.use(appConfig.PREFIX, courseHomeRouter);
router.use(appConfig.PREFIX, excelExportRouter);
router.use(appConfig.PREFIX, importVideoRouter);
router.use(appConfig.PREFIX, elasticRouter);

module.exports = router;