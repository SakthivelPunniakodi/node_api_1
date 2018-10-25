"use strict";
const express = require("express");
const router = express.Router();

const favoriteController = require("../controller/favorite");

/**
 * @api {post} /saveVideoAsFavorite
 * @apiName saveVideoAsFavorite
 * @apiGroup Favorite
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} videoId videoId must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":"Added as favorite",
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/saveVideoAsFavorite', favoriteController.saveVideoAsFavorite);

/**
 * @api {post} /deleteFavoriteVideo
 * @apiName deleteFavoriteVideo
 * @apiGroup Favorite
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} favoriteId favoriteId must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":'Removed from favorite',
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteFavoriteVideo', favoriteController.removeFavoriteVideos);

/**
 * @api {post} /getFavoriteVideos
 * @apiName getFavoriteVideos
 * @apiGroup Favorite
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":{ video: [
 *                        {"favoriteId":1,
 *                         "bookId":1,
 *                         "videoId":1,
 *                         "clipInfo":"info",
 *                         "embeddingUrl":"someurl.com",
 *                         "title":"title",
 *                         "duration":"10:10",
 *                         "ThumbnailURL":""}
 *                       ], 
 *                tags: [
 *                       {"vidoeId":1,
 *                        "tagId":1,
 *                        "tagName":"name"}
 *                      ], 
 *                resources: [
 *                            {"resourceUrl":"",
 *                             "videoId":1,
 *                             "resourceName":"name.pdf"}
 *                           ] 
 *               },
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/getFavoriteVideos', favoriteController.getFavoriteVideos);

module.exports = router;
