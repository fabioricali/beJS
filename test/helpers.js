/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('getEditDistance', function () {
    it('should be return 0', function () {
        var result = be._helper.getEditDistance('hello', 'hello');
        console.log(result);
        assert.equal(result, 0);
    });
    it('should be return 1', function () {
        var result = be._helper.getEditDistance('hello', 'Hello');
        console.log(result);
        assert.equal(result, 1);
    });
});