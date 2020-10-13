const assert = require('assert')
const Room = require('../room.js')

describe('Room', function () {
    let room;
    beforeEach(function () {
        room = new Room(100, true, true)
    });
    it('should have an area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 100);
    });
    it('should start not painted', function () {
        const actual = room.notpainted;
        assert.strictEqual(actual, true);
    })

});