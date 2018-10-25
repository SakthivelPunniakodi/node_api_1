const elastic = require('../../../../config/elasticSearchConfig');

let pingHost = async () => {
    return await new Promise((resolve, reject) => {
        elastic.client.ping({
            requestTimeout: 30000
        }, (err, resp) => {
            if (err) {
                reject(err);
            } else {
                resolve(resp);
            }
        });
    });
};

let addDocument = async (id, payload) => {
    return await new Promise((resolve, reject) => {
        elastic.client.index({
            index: elastic.config.index,
            type: elastic.config.type,
            id: id,
            body: payload
        }, (err, resp) => {
            if (err) {
                reject(err);
            } else {
                resolve(resp);
            }
        });
    });
};

let updateDocument = async (id, payload) => {
    return await new Promise((resolve, reject) => {
        elastic.client.update({
            index: elastic.config.index,
            type: elastic.config.type,
            id: id,
            body: payload
        }, (err, resp) => {
            if (err) {
                reject(err);
            } else {
                resolve(resp);
            }
        });
    });
};

let search = async (query) => {
    return await new Promise((resolve, reject) => {
        elastic.client.search({
            index: elastic.config.index,
            type: elastic.config.type,
            body: query
        }, (err, resp) => {
            if (err) {
                reject(err);
            } else {
                resolve(resp);
            }
        });
    })
};

module.exports = {
    pingHost,
    addDocument,
    updateDocument,
    search
};