/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('propertyOf', function () {
    it('should be return true', function () {
        var result = be.propertyOf('a', {a: 1, b: 2});
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.propertyOf('a', {b: 2, c: 3});
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined should be return false', function () {
        var result = be.propertyOf();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('propertyCount', function () {
    it('should be return true', function () {
        var result = be.propertyCount({a: 1, b: 2}, 2);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.propertyCount({a: 1, b: 2}, 5);
        console.log(result);
        assert.equal(result, false);
    });
});