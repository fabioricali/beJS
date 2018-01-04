/**
 * Created by Fabio on 26/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('getVersion', function () {
    it('should be return a string', function () {
        var result = be.getVersion();
        console.log(result);
        assert.equal(typeof result === 'string', true);
    });
});

describe('setAssert', function () {
    it('should be return a true', function () {
        be.setAssert('myAssert', function () {
            return true;
        });
        var result = be.myAssert();
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return a string', function () {
        be.setAssert('myAssert', function (param) {
            return param;
        });
        var result = be.myAssert('hello');
        console.log(result);
        assert.equal(typeof result === 'string', true);
    });
    it('should be return a true using a "be method"', function () {
        be.setAssert('myAssert', function (param) {
            return be.string(param);
        });
        var result = be.myAssert('hello');
        console.log(result);
        assert.equal(result, true);
    });
});