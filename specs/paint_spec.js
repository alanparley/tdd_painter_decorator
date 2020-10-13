const { strictEqual } = require('assert');
const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function () {
    let paint;
    beforeEach(function () {
        paint = new Paint(10)
    })
    it("should have some litres of paint", function () {
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });
    it("should check if empty", function () {
        const actual = paint.empty;
        assert.strictEqual(actual, false);
    });
    it("can be emptied", function () {
        paint.emptycan();
        const actual = paint.empty;
        assert.strictEqual(actual, true);
    });
})