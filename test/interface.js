if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('err', function () {
    it('be.err.equal, should be ok', function () {
        be.err.equal('hello', 'hello');
    });

    it('be.err.not.equal, should be ok', function () {
        be.err.not.equal('hello', 'helloo');
    });

    it('be.err.all.boolean, should be return error', function (done) {
        try {
            be.err.all.boolean([true, false, true, 2]);
            done('error')
        } catch (e) {
            console.log(e);
            done()
        }
    });

    it('be.err.any.boolean, should be return error', function (done) {
        try {
            be.err.any.boolean([true, false, true, 2]);
            done()
        } catch (e) {
            console.log(e);
            done(e)
        }
    });

});