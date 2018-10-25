
var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.GetAllTopicsAndSubTopics = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllTopicsAndSubTopics]", parameters, db_library.query_type.SP).then((value) => {
                var results = { topics: value.recordsets[0], subTopics: value.recordsets[1] }
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getTopic = async (bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetTopics]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteTopic = async (TopicID) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TopicID', sqlType.BigInt, TopicID);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteTopic]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0][0].result == 1) {
                    resolve(true);
                }
                else {
                    reject({ message: value.recordsets[0][0].status })
                }
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteCollectionTopic = async (TopicID, bookId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TopicID', sqlType.BigInt, TopicID);
        parameters.push(para);
        para = new param('bookId', sqlType.BigInt, bookId);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteCollectionTopic]", parameters, db_library.query_type.SP).then((value) => {
                resolve(true);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getTopics = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllTopics]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getSubTopic = async (TopicID) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TopicID', sqlType.BigInt, TopicID);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetSubTopics]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addEditSubTopic = async (TopicID, SubTopicID, Name, UserID) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TopicID', sqlType.BigInt, TopicID);
        parameters.push(para);
        para = new param('SubTopicID', sqlType.BigInt, SubTopicID);
        parameters.push(para);
        para = new param('Name', sqlType.NVarChar, Name);
        parameters.push(para);
        para = new param('UserID', sqlType.BigInt, UserID);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditSubTopic]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0][0].status;
                if (results == 1) {
                    resolve(value.recordsets[1][0]);
                }
                else {
                    reject({ message: 'Duplicate SubTopic under this Topic' })
                }
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addEditTopic = async (TopicID, Name, UserID) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TopicID', sqlType.BigInt, TopicID);
        parameters.push(para);
        para = new param('Name', sqlType.NVarChar, Name);
        parameters.push(para);
        para = new param('UserID', sqlType.BigInt, UserID);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditTopic]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[1][0].status;
                if (results == 1) {
                    resolve(value.recordsets[0][0]);
                }
                else {
                    reject({ message: 'Already same Topic available. Please choose new.' })
                }
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteSubTopicInfo = async (subTopicId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('subTopicId', sqlType.BigInt, subTopicId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetSubTopicInfo]", parameters, db_library.query_type.SP).then((value) => {
                var status = value.recordsets[0][0].status;
                if (status == 0) {
                    resolve('No Videos added under this sub Topic');
                }
                else {
                    reject({ message: value.recordsets[0][0].videoCount + ' Videos mapped under this sub Topic. Did You want to delete?' });
                }
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteSubTopic = async (subTopicId, UserID) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('subTopicId', sqlType.BigInt, subTopicId);
        parameters.push(para);
        para = new param('UserID', sqlType.BigInt, UserID);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteSubTopic]", parameters, db_library.query_type.SP).then((value) => {
                resolve('Deleted Successfully.');
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getVideoUnderTopic = async (TopicId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('TopicId', sqlType.BigInt, TopicId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetVideoUnderTopic]", parameters, db_library.query_type.SP).then((value) => {
                resolve({ video: value.recordsets[0], tags: value.recordsets[1], resources: value.recordsets[2], thumbnailUrls: value.recordsets[3] });
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteVideoFromTopic = async (topicId, videoId, userId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('topicId', sqlType.BigInt, topicId);
        parameters.push(para);
        para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('videoId', sqlType.BigInt, videoId);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteVideoUnderTopic]", parameters, db_library.query_type.SP).then((value) => {
                resolve('Deleted Successfully.');
            }).catch(err => {
                reject(err)
            });
    });
}