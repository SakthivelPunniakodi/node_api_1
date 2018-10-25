"use strict";
function videoDetail() {
    this.clipInfo = ''
    this.videoID = ''
    this.duration = ''
    this.EmbeddingUrl = ''
    this.title = ''
}

videoDetail.prototype.videoID = function (videoID) {
    this.videoID = videoID;
};
videoDetail.prototype.title = function (title) {
    this.title = title;
};
videoDetail.prototype.clipInfo = function (clipInfo) {
    this.clipInfo = clipInfo;
};
videoDetail.prototype.EmbeddingUrl = function (EmbeddingUrl) {
    this.EmbeddingUrl = EmbeddingUrl;
};
videoDetail.prototype.duration = function (duration) {
    this.duration = duration;
};
module.exports = videoDetail;