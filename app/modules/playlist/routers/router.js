"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const playlistController = require("../controllers/playlist");

/**
 * @api {post} /createPlaylist
 * @apiName createPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} playlistId playlistId must be provided.
 * @apiParam {String} name name must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":1,
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/createPlaylist', playlistController.createPlaylist);

/**
 * @api {post} /updatePlaylist
 * @apiName updatePlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} playlistId playlistId must be provided.
 * @apiParam {String} name name must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":1,
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/updatePlaylist', playlistController.updatePlaylist);

/**
 * @api {post} /deletePlaylist
 * @apiName deletePlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} playlistId playlistId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":'Deleted successfully',
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deletePlaylist', playlistController.deletePlaylist);

/**
 * @api {post} /getPlaylist
 * @apiName getPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} bookId bookId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":[{"playlistId":1,"name":"name"}],
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/getPlaylist', playlistController.getPlaylist);

/**
 * @api {post} /addVideoToPlaylist
 * @apiName addVideoToPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} playlistId playlistId must be provided.
 * @apiParam {Number} videoId videoId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":'Added successfully.',
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/addVideoToPlaylist', playlistController.addVideoToPlaylist);

/**
 * @api {post} /deleteVideoFromPlaylist
 * @apiName deleteVideoFromPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} playlistId playlistId must be provided.
 * @apiParam {Number} videoId videoId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":'Removed successfully',
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/deleteVideoFromPlaylist', playlistController.removeVideoFromPlaylist);

/**
 * @api {post} /getVideoForPlaylist
 * @apiName getVideoForPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} userId userId must be provided.
 * @apiParam {Number} playlistId playlistId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":{ video:[{
 *                  "videoId":1,            
 *                  "playListId":1,
 *                  "clipInfo":"",
 *                  "title":"",
 *                  "embeddingUrl":""}],
 *                tags:[{
 *                      "vidoeId":1,
 *                      "tagId":1,
 *                      "tagName":""}],
 *                resources:[{
 *                          "resourceUrl":"",
 *                          "videoId":1,
 *                          "resourceName":""}]
 *              },
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/getVideoForPlaylist', playlistController.getVideoForPlaylist);

/**
 * @api {post} /reOrderVideoInPlaylist
 * @apiName reOrderVideoInPlaylist
 * @apiGroup Playlist
 *
 * @apiParam {Number} videoId videoId must be provided.
 * @apiParam {Number} orderId orderId must be provided.
 * @apiParam {Number} playlistId playlistId must be provided.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isSuccess": true,
 *       "data":true,
 *       "message": "success"
 *     }
 *
 * @apiSuccess {Object} output.
 */
router.post('/reOrderVideoInPlaylist', playlistController.reOrderVideoInPlaylist);


module.exports = router;