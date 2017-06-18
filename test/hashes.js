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

    it('string, should be return false', function () {
        var result = be.md5('foo');
        console.log(result);
        assert.equal(result, false);
    });
});