"use strict";
function tagDetail() {
    this.id = ''
    this.tagId = ''
    this.name = ''
    this.isActive = true
}

tagDetail.prototype.isActive = function (isActive) {
    this.isActive = isActive;
};
tagDetail.prototype.id = function (id) {
    this.id = id;
};
tagDetail.prototype.tagId = function (tagId) {
    this.tagId = tagId;
};
tagDetail.prototype.name = function (name) {
    this.name = name;
};

module.exports = tagDetail;