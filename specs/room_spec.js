const assert = require('assert')
const Room = require('../room.js')

describe('Room', function () {
    let room;
    beforeEach(function () {
        room = new Room(100, false, true)
    });
    it('should have an area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 100);
    });
});