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
    it('should be return false', function () {
        var result = be.inArray('HELLO', ['ciao', 'bye', 'hello', 5, false, true]);
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined should be return false', function () {
        var result = be.inArray();
        console.log(result);
        assert.equal(result, false);
    });
});