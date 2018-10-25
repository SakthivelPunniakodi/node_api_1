const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    hosts: ['http://localhost:9200/']
});

const config = {
    "index": "psvc",
    "type": "VideoDetails"
}

module.exports = {
    client: client,
    config: config
}


