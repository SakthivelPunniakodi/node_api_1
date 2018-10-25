"use strict";
function video() {
    this.userId = ''
    this.clipInfo = ''
    this.videoId = ''
    this.duration = ''
    this.embeddingUrl = ''
    this.title = ''
    this.thumbnailUrls = []
    this.tagDetail = []
    this.topicDetail = []
    this.subTopicDetail = []
    this.resourceDetail = []
}

video.prototype.videoId = function (videoId) {
    this.videoId = videoId;
};
video.prototype.thumbnailUrls = function (thumbnailUrls) {
    this.thumbnailUrls = thumbnailUrls;
};
video.prototype.title = function (title) {
    this.title = title;
};
video.prototype.clipInfo = function (clipInfo) {
    this.clipInfo = clipInfo;
};
video.prototype.embeddingUrl = function (embeddingUrl) {
    this.embeddingUrl = embeddingUrl;
};
video.prototype.duration = function (duration) {
    this.duration = duration;
};
video.prototype.userId = function (userId) {
    this.userId = userId;
};
video.prototype.tagDetail = function (tagDetail) {
    this.tagDetail = tagDetail;
};
video.prototype.topicDetail = function (topicDetail) {
    this.topicDetail = topicDetail;
};
video.prototype.subTopicDetail = function (subTopicDetail) {
    this.subTopicDetail = subTopicDetail;
};
video.prototype.resourceDetail = function (resourceDetail) {
    this.resourceDetail = resourceDetail;
};
module.exports = video;