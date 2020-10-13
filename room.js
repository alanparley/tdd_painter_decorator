const Room = function (area, notpainted = true, paintable = true) {
    this.area = area;
    this.notpainted = notpainted;
    this.paintable = paintable;
}

module.exports = Room;