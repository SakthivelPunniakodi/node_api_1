"use strict";
function resourceDetail() {
    this.resourceId = ''
    this.name = ''
    this.resourceUrl = ''
    this.isActive = 1
}

resourceDetail.prototype.isActive = function (isActive) {
    this.isActive = isActive;
};
resourceDetail.prototype.resourceUrl = function (resourceUrl) {
    this.resourceUrl = resourceUrl;
};
resourceDetail.prototype.name = function (name) {
    this.name = name;
};
resourceDetail.prototype.resourceId = function (resourceId) {
    this.resourceId = resourceId;
};

module.exports = resourceDetail;