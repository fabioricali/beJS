/**
 * Created by Davide on 26/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('creditCard', function () {
    it('should be return true', function () {
        var result = be.creditCard('4242424242424242');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.creditCard('1212422241424242');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('amex', function () {
    it('should be return true', function () {
        var result = be.amex('378282246310005');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.amex('6011111111111117');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('dinersClub', function () {
    it('should be return true', function () {
        var result = be.dinersClub('30569309025904');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.dinersClub('6011111111111117');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('discover', function () {
    it('should be return true', function () {
        var result = be.discover('6011111111111117');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.discover('30569309025904');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('mastercard', function () {
    it('should be return true', function () {
        var result = be.mastercard('5555555555554444');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.mastercard('30569309025904');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('visa', function () {
    it('should be return true', function () {
        var result = be.visa('4012888888881881');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.visa('30569309025904');
        console.log(result);
        assert.equal(result, false);
    });
});
