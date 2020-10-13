const Paint = function (litres) {
    this.litres = litres;
    this.empty = false;
};

Paint.prototype.emptycan = function () {
    this.empty = true;
};

module.exports = Paint;