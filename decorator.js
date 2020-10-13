const Decorator = function () {
    this.paintstock = []
};

Decorator.prototype.numberofcans = function () {
    return this.paintstock.length;
}

Decorator.prototype.addPaint = function (paintcan) {
    this.paintstock.push(paintcan);
}

module.exports = Decorator;