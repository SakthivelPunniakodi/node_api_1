var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.getAllTags = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllTags]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addeditTag = async (userId, name, tagId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('UserID', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('Name', sqlType.NVarChar, name);
        parameters.push(para);
        para = new param('TagId', sqlType.BigInt, tagId);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditTag]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0][0].status == 0) { reject(value.recordsets[0][0].message) }
                var results = value.recordsets[0][0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
};


exports.deleteTagInfo = async (tagId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TagID', sqlType.BigInt, tagId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetTagInfo]", parameters, db_library.query_type.SP).then((value) => {
                var status = value.recordsets[0][0].status;
                if (status == 1) {
                    resolve('No Tag added under any video');
                }
                else {
                    reject({ message: 'This tag mapped under videos(' + value.recordsets[0][0].VideoTagCount + '). Did You want to delete?' });
                }
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteTag = async (tagId, UserID) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TagID', sqlType.BigInt, tagId);
        parameters.push(para);
        para = new param('UserID', sqlType.BigInt, UserID);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteTag]", parameters, db_library.query_type.SP).then((value) => {
                resolve('Deleted Successfully.');
            }).catch(err => {
                reject(err)
            });
    });
};

exports.getAllTagsForTopic = async (topicId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('topicId', sqlType.BigInt, topicId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetTagsForTopic]", parameters, db_library.query_type.SP).then((value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    });
};
