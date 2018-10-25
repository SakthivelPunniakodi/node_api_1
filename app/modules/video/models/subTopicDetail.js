"use strict";
function subTopicDetail() {
    this.id = ''
    this.topicId = ''
    this.subTopicId = ''
    this.name = ''
    this.isActive = ''
}

subTopicDetail.prototype.isActive = function (isActive) {
    this.isActive = isActive;
};
subTopicDetail.prototype.id = function (id) {
    this.id = id;
};
subTopicDetail.prototype.topicId = function (topicId) {
    this.topicId = topicId;
};
subTopicDetail.prototype.subTopicId = function (subTopicId) {
    this.subTopicId = subTopicId;
};
subTopicDetail.prototype.Name = function (name) {
    this.name = name;
};

module.exports = subTopicDetail;