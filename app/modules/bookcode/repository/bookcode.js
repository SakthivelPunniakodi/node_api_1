'use strict'
var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.getAllBookcode = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllBookCode]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteBookcode = async (userId, bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteBookCode]", parameters, db_library.query_type.SP).then((value) => {
                var results = 'Deleted Successfully.';
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addEditBookcode = async (userId, bookId, bookCode, title, isActive) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        para = new param('bookCode', sqlType.NVarChar, bookCode);
        parameters.push(para);
        para = new param('title', sqlType.NVarChar, title);
        parameters.push(para);
        para = new param('isActive', sqlType.Bit, isActive);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditBookCode]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0][0].status == 0) { reject({ message: value.recordsets[0][0].message }) }
                var results = value.recordsets[0][0].message;
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}