const Decorator = function () {
    this.paintstock = []
};



Decorator.prototype.addPaint = function (paintcan) {
    this.paintstock.push(paintcan);
}
Decorator.prototype.numberofcans = function () {
    return this.paintstock.length;
}
module.exports = Decorator;