var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.getCourseHome = async (bookCode) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookCode', sqlType.NVarChar, bookCode);
        parameters.push(para);
        db_library
            .execute("[dbo].[getCourseHome]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0].length == 0) { reject({ message: "No information available." }) }
                var results = value.recordsets[0][0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addEditCourseHome = async (bookId, customContent, templateId, userId, isActive) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        para = new param('customContent', sqlType.NVarChar, customContent);
        parameters.push(para);
        para = new param('templateId', sqlType.BigInt, templateId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('isActive', sqlType.Bit, isActive);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditCourseHome]", parameters, db_library.query_type.SP).then((value) => {
                var results = 'Updated Successfully.';
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getCourseDetail = async (bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetCourseDetail]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0][0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}