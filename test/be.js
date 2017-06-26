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