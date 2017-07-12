/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('objectToString', function () {
    it('should be return [object String]', function () {
        var result = be._helpers.objectToString('hello');
        console.log(result);
        assert.equal(result, '[object String]');
    });
});

describe('getEditDistance', function () {
    it('should be return 0', function () {
        var result = be._helpers.getEditDistance('hello', 'hello');
        console.log(result);
        assert.equal(result, 0);
    });
    it('should be return 1', function () {
        var result = be._helpers.getEditDistance('hello', 'Hello');
        console.log(result);
        assert.equal(result, 1);
    });
});

describe('compareVersions', function () {
    it('should be return 1', function () {
        var result = be._helpers.compareVersions('4.53.58', '3.78.99');
        console.log(result);
        assert.equal(result, 1);
    });
    it('should be return -1', function () {
        var result = be._helpers.compareVersions('2.53.58', '3.78.99');
        console.log(result);
        assert.equal(result, -1);
    });
    it('string be return 0', function () {
        var result = be._helpers.compareVersions('hello', 'hello');
        console.log(result);
        assert.equal(result, 0);
    });
});

describe('comparators', function () {
    it('== should be return true', function () {
        var result = be._helpers.comparators['==']('4.5', '4.5');
        console.log(result);
        assert.equal(result, true);
    });
    it('< should be return true', function () {
        var result = be._helpers.comparators['<']('4.4', '4.5');
        console.log(result);
        assert.equal(result, true);
    });
    it('< should be return false', function () {
        var result = be._helpers.comparators['<']('4.6', '4.5');
        console.log(result);
        assert.equal(result, false);
    });
    it('<= should be return true', function () {
        var result = be._helpers.comparators['<=']('4.3', '4.5');
        console.log(result);
        assert.equal(result, true);
    });
    it('<= should be return true (2)', function () {
        var result = be._helpers.comparators['<=']('4.5', '4.5');
        console.log(result);
        assert.equal(result, true);
    });
    it('> should be return true', function () {
        var result = be._helpers.comparators['>']('4.8', '4.5');
        console.log(result);
        assert.equal(result, true);
    });
    it('> should be return false', function () {
        var result = be._helpers.comparators['>']('4.4', '4.5');
        console.log(result);
        assert.equal(result, false);
    });
    it('>= should be return true', function () {
        var result = be._helpers.comparators['>=']('4.8', '4.5');
        console.log(result);
        assert.equal(result, true);
    });
    it('>= should be return true (2)', function () {
        var result = be._helpers.comparators['>=']('4.5', '4.5');
        console.log(result);
        assert.equal(result, true);
    });
});