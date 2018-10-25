function thumbnailUrl() {
    this.id = ''
    this.size = ''
    this.thumbnailUrl = ''
    this.isActive = 1
}

thumbnailUrl.prototype.size = function (size) {
    this.size = size;
};
thumbnailUrl.prototype.thumbnailUrl = function (thumbnailUrl) {
    this.thumbnailUrl = thumbnailUrl;
};
thumbnailUrl.prototype.id = function (id) {
    this.id = id;
};
thumbnailUrl.prototype.isActive = function (isActive) {
    this.isActive = isActive;
};