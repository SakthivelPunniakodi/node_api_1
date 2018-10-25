var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.getAllCourses = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetSMSCourses]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getAllCourseVideo = async (bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetAllCourseVidoes]", parameters, db_library.query_type.SP).then((value) => {
                var results = { videos: value.recordsets[0], tags: value.recordsets[1] };
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

