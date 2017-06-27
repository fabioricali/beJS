/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('postalCodeES', function () {
    it('should be return true', function () {
        var result = be.postalCodeES('03160');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.postalCodeES('1N28R');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('postalCodeUK', function () {
    it('should be return true', function () {
        var result = be.postalCodeUK('BN519EJ');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.postalCodeUK('1N238YR');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('postalCodeUS', function () {
    it('should be return true', function () {
        var result = be.postalCodeUS('36784');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.postalCodeUS('1N238YR');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('postalCodeIT', function () {
    it('should be return true', function () {
        var result = be.postalCodeIT('98028');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.postalCodeIT('1N238YR');
        console.log(result);
        assert.equal(result, false);
    });
});
