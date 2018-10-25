var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.getAllCollection = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllCollections]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getCourseCollections = async (bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetCourseCollections]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addCollection = async (userId, name) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('name', sqlType.NVarChar, name);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddCollection]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0][0].status == 0) { reject('Already this collection available (' + name + ').') }
                var results = { collectionId: value.recordsets[1][0].collectionId };
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getCollectionWithTopic = async (collectionId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('collectionId', sqlType.BigInt, collectionId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetCollectionWithTopics]", parameters, db_library.query_type.SP).then((value) => {
                var results = {}
                if (value.recordsets[0].length == 0) { reject({ message: "No such collection available." }) }
                results.collectionInformation = {
                    "collectionId": value.recordsets[0][0].collectionId,
                    "collectionName": value.recordsets[0][0].collectionName
                };
                results.topicList = value.recordsets[1]
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addCollectionToCourse = async (json) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('JsonData', sqlType.NVarChar, json);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditListOfCollectionsToCourse]", parameters, db_library.query_type.SP).then((value) => {
                var results = "Updated Successfully";
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addTopicsToCollection = async (json) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('JsonData', sqlType.NVarChar, json);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditTopicsToCollectionDetails]", parameters, db_library.query_type.SP).then((value) => {
                var results = "Updated Successfully";
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.editCollection = async (userId, name, collectionId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('name', sqlType.NVarChar, name);
        parameters.push(para);
        para = new param('collectionId', sqlType.BigInt, collectionId);
        parameters.push(para);
        db_library
            .execute("[dbo].[EditCollection]", parameters, db_library.query_type.SP).then((value) => {
                var results = { collectionId: value.recordsets[0][0].collectionId };
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteCollection = async (collectionId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('UserId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('collectionId', sqlType.BigInt, collectionId);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteCollection]", parameters, db_library.query_type.SP).then((value) => {
                var results = { collectionId: value.recordsets[0][0].collectionId };
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getCollectionInfo = async (collectionId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('CollectionId', sqlType.BigInt, collectionId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetCollectionInfo]", parameters, db_library.query_type.SP).then((value) => {
                var status = value.recordsets[0][0].status;
                if (status == 1) {
                    resolve('Collection not added under any Course and Topic');
                }
                else {
                    reject({ message: 'This Collection mapped under Courses(' + value.recordsets[0][0].CollectionCourse + ') and Topics(' + value.recordsets[0][0].CollectionTopics + '). Did You want to delete?' });
                }
            }).catch(err => {
                reject(err)
            });
    });
}