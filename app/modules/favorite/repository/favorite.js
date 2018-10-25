var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.saveVideoAsFavorite = async (userId, videoId, bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('videoId', sqlType.BigInt, videoId);
        parameters.push(para);
        para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddVideoAsFavorite]", parameters, db_library.query_type.SP).then((value) => {
                resolve('Added as favorite');
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getFavoriteVideos = async (userId, bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetFavoriteVideo]", parameters, db_library.query_type.SP).then((value) => {
                resolve({ video: value.recordsets[0], tags: value.recordsets[1], resources: value.recordsets[2], thumbnailUrls: value.recordsets[3] });
            }).catch(err => {
                reject(err)
            });
    });
}

exports.removeFavoriteVideos = async (userId, bookId, favoriteId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        para = new param('favoriteId', sqlType.BigInt, favoriteId);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteFavoriteVideo]", parameters, db_library.query_type.SP).then((value) => {
                resolve('Removed from favorite');
            }).catch(err => {
                reject(err)
            });
    });
}