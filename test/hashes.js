/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('md5', function () {
    it('md5 hash string, should be return true', function () {
        var result = be.md5('00236a2ae558018ed13b5222ef1bd977');
        console.log(result);
        assert.equal(result, true);
    });
    it('md5 hash string uppercase, should be return true', function () {
        var result = be.md5('00236a2ae558018ed13b5222ef1bd977'.toLocaleUpperCase());
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = be.md5('foo');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('sha1', function () {
    it('sha1 hash string, should be return true', function () {
        var result = be.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d');
        console.log(result);
        assert.equal(result, true);
    });
    it('sha1 hash string uppercase, should be return true', function () {
        var result = be.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d'.toUpperCase());
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = be.sha1('foo');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('sha256', function () {
    it('sha256 hash string, should be return true', function () {
        var result = be.sha256('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069');
        console.log(result);
        assert.equal(result, true);
    });
    it('sha256 hash string uppercase, should be return true', function () {
        var result = be.sha256('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069'.toUpperCase());
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = be.sha256('foo');
        console.log(result);
        assert.equal(result, false);
    });
});