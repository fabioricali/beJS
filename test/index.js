/**
 * Created by Fabio on 11/06/2017.
 */
var assert = require('assert');
var vJS = require('../index');

describe('isBoolean', function () {
    it('boolean value, should be return true', function () {
        var result = vJS.isBoolean(false);
        console.log(result);
        assert.equal(result, true);
    });

    it('string value, should be return false', function () {
        var result = vJS.isBoolean('true');
        console.log(result);
        assert.equal(result, false);
    });

    it('number value, should be return false', function () {
        var result = vJS.isBoolean(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isBoolean();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isNumber', function () {
    it('number value, should be return true', function () {
        var result = vJS.isNumber(1);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value as string, should be return false', function () {
        var result = vJS.isNumber('1');
        console.log(result);
        assert.equal(result, false);
    });

    it('float value, should be return true', function () {
        var result = vJS.isNumber(2.2);
        console.log(result);
        assert.equal(result, true);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isNumber();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isString', function () {
    it('string value, should be return true', function () {
        var result = vJS.isString('hello');
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = vJS.isString(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isString();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isUndefined', function () {
    it('should be return true', function () {
        var result = vJS.isUndefined();
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = vJS.isUndefined(1);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isNull', function () {
    it('should be return true', function () {
        var result = vJS.isNull(null);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = vJS.isNull(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isNull();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isUrl', function () {
    it('string url value, shoudl be return true', function () {
        var result = vJS.isUrl('http://www.google.it');
        console.log(result);
        assert.equal(result, true);
    })
});