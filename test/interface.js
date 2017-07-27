if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('err', function () {
    it('be.err.equal, should be return error', function () {
        console.log(be.err);
        be.err.equal('hello', 'helloo');
    });
    it('be.err.all.boolean, should be return error', function () {
        be.err.all.boolean(true, false, true, 2);
    })
});