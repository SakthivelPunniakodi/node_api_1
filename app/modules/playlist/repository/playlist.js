'use strict'
var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.addEditPlaylist = async (playlistId, name, bookId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('playlistId', sqlType.BigInt, playlistId);
        parameters.push(para);
        para = new param('name', sqlType.NVarChar, name);
        parameters.push(para);
        para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditPlayList]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0][0].status == 0) { throw { message: value.recordsets[0][1] } }
                var results = value.recordsets[0][0].playlistId;
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deletePlaylist = async (playlistId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('playlistId', sqlType.BigInt, playlistId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeletePlayList]", parameters, db_library.query_type.SP).then((value) => {
                var results = "Deleted the playlist";
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addVideoToPlaylist = async (playlistId, videoId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('playlistId', sqlType.BigInt, playlistId);
        parameters.push(para);
        para = new param('videoId', sqlType.BigInt, videoId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddVideoToPlaylist]", parameters, db_library.query_type.SP).then((value) => {
                var results = 'Added successfully';
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.removeVideoFromPlaylist = async (playlistId, videoId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('playlistId', sqlType.BigInt, playlistId);
        parameters.push(para);
        para = new param('videoId', sqlType.BigInt, videoId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[RemoveVideoFromPlaylist]", parameters, db_library.query_type.SP).then((value) => {
                var results = 'Removed successfully';
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getVideoForPlaylist = async (playlistId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('playlistId', sqlType.BigInt, playlistId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetVideoForPlaylist]", parameters, db_library.query_type.SP).then((value) => {
                var results = { video: value.recordsets[0], tags: value.recordsets[1], resources: value.recordsets[2], thumbnailUrls: value.recordsets[3] };
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.reOrderVideoInPlaylist = async (playlistId, videoId, orderId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('playlistId', sqlType.BigInt, playlistId);
        parameters.push(para);
        para = new param('videoId', sqlType.BigInt, videoId);
        parameters.push(para);
        para = new param('orderId', sqlType.BigInt, orderId);
        parameters.push(para);
        db_library
            .execute("[dbo].[ReOrderVideoInPlaylist]", parameters, db_library.query_type.SP).then((value) => {
                var results = true;
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getPlaylist = async (bookId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetPlaylistForCourse]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}