/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('inArray', function () {
    it('should be return true', function () {
        var result = be.inArray('hello', ['ciao', 'bye', 'hello', 5, false, true]);
        console.log(result);
        assert.equal(result, true);
    });
    it('interface "not", should be return false', function () {
        var result = be.not.inArray('hello', ['ciao', 'bye', 'hello', 5, false, true]);
        console.log(result);
        assert.equal(result, false);
    });
    it('interface "not" from Arrays, should be return false', function () {
        var result = be.Arrays.not.inArray('hello', ['ciao', 'bye', 'hello', 5, false, true]);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return false', function () {
        var result = be.inArray('HELLO', ['ciao', 'bye', 'hello', 5, false, true]);
        console.log(result);
        assert.equal(result, false);
    });
    it('interface "not", should be return true', function () {
        var result = be.not.inArray('HELLO', ['ciao', 'bye', 'hello', 5, false, true]);
        console.log(result);
        assert.equal(result, true);
    });
    it('undefined should be return false', function () {
        var result = be.inArray();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('arrayOfStrings', function () {
    it('should be return true', function () {
        var result = be.arrayOfStrings(['ciao', 'bye', 'hello']);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.arrayOfStrings(['ciao', 'bye', 2]);
        console.log(result);
        assert.equal(result, false);
    });
    it('interface all, different types, should be return false', function () {
        var result = be.all.arrayOfStrings([
            ['ciao', 'bye'],
            [2]
        ]);
        console.log(result);
        assert.equal(result, false);
    });
    it('[], should be return false', function () {
        var result = be.arrayOfStrings([]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('arrayOfObjects', function () {
    it('should be return true', function () {
        var result = be.arrayOfObjects([{a:1},{b:2}]);
        console.log(result);
        assert.equal(result, true);
    });
    it('interface all, should be return true', function () {
        var result = be.all.arrayOfObjects([{a:1},{b:2}],[{a:1},{b:2}]);
        console.log(result);
        assert.equal(result, true);
    });
    it('interface all, different types, should be return false', function () {
        var result = be.all.arrayOfObjects([
            [{a:1},{b:2}],
            false
        ]);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return false', function () {
        var result = be.arrayOfObjects(['ciao', 'bye', 2]);
        console.log(result);
        assert.equal(result, false);
    });
    it('[], should be return false', function () {
        var result = be.arrayOfObjects([]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('arrayOfBooleans', function () {
    it('should be return true', function () {
        var result = be.arrayOfBooleans([true, false]);
        console.log(result);
        assert.equal(result, true);
    });
    it('interface all, should be return true', function () {
        var result = be.all.arrayOfBooleans([true, true],[false, false]);
        console.log(result);
        assert.equal(result, true);
    });
    it('interface all, different types, should be return false', function () {
        var result = be.all.arrayOfBooleans([
            [{a:1},{b:2}],
            false
        ]);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return false', function () {
        var result = be.arrayOfBooleans([true, true, 2]);
        console.log(result);
        assert.equal(result, false);
    });
    it('[], should be return false', function () {
        var result = be.arrayOfBooleans([]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('arrayOfNumbers', function () {
    it('should be return true', function () {
        var result = be.arrayOfNumbers([1, 2]);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.arrayOfNumbers([true, true, 2]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('arrayOfDates', function () {
    it('should be return true', function () {
        var result = be.arrayOfDates([new Date(), new Date('2017-07-06')]);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.arrayOfDates([true, true, new Date()]);
        console.log(result);
        assert.equal(result, false);
    });
});