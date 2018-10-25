"use strict";
function topicDetail() {
    this.id = ''
    this.topicId = ''
    this.name = ''
    this.isActive = ''
}

topicDetail.prototype.isActive = function (isActive) {
    this.isActive = isActive;
};
topicDetail.prototype.id = function (id) {
    this.id = id;
};
topicDetail.prototype.topicId = function (topicId) {
    this.topicId = topicId;
};
topicDetail.prototype.Name = function (name) {
    this.name = name;
};

module.exports = topicDetail;