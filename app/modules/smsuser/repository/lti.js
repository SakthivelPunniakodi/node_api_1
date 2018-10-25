const models = require('../models/LTIKey')

exports.createConsumer = function (LTIKey, callback) {
    models.LTIKey.create(LTIKey).then(res => {
        callback(null, res);
    }).catch(function (err) {
        callback(err, null);
    });
};

exports.getConsumer = function (consumerKey, callback) {
    models.LTIKey.findOne({
        where: {
            ConsumerKey: consumerKey
        }
    }).then(consumer => {
        callback(null, consumer);
    }).catch(function (err) {
        callback(err, null);
    });
};

