if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
    var interface = require('../src/interface');
}

describe('_printArgs', function () {
    it('string, should be return a string', function () {
        console.log(interface._printArgs(['hello', 'world']));
    });
    it('array and arguments, should be return a string', function () {
        console.log(interface._printArgs(['hello', 'world', ['1', 'ciao']]));
    });
    it('object, should be return a string', function () {
        console.log(interface._printArgs([{a: 1}, {b: 2}]));
    });
    it('empty, should be return a string', function () {
        console.log(interface._printArgs());
    });
});

describe('err', function () {
    it('be.err().equal, should be return error', function (done) {
        var msg = 'this a message error';
        try {
            be.err(msg).not.equal('hello', 'hello');
            done('error');
        }catch (e) {
            assert.equal(e.message, msg);
            done();
            console.log(e);
        }
    });
    it('be.err.equal, should be ok', function () {
        be.err.equal('hello', 'hello');
    });

    it('be.err.not.equal, should be ok', function () {
        be.err.not.equal('hello', 'helloo');
    });

    it('be.err.all.boolean, should be return error', function (done) {
        try {
            be.err.all.boolean([true, false, true, 2, ['hello', 'world']]);
            done('error')
        } catch (e) {
            assert.notEqual(e.message, 'this a message error');
            console.log(e);
            done()
        }
    });

    it('be.err().all.boolean, should be return error', function (done) {
        try {
            be.err().all.boolean([true, false, true, 2]);
            done('error')
        } catch (e) {
            console.log(e);
            done()
        }
    });

    it('be.err().all.boolean, as arguments, should be return error', function (done) {
        try {
            be.err().all.boolean(true, false, true, 2, [1, 2, 3]);
            done('error')
        } catch (e) {
            console.log(e);
            done()
        }
    });

    it('be.err("my error message").all.boolean, should be return error', function (done) {
        try {
            be.err("my error message").all.boolean([true, false, true, 2]);
            done('error')
        } catch (e) {
            console.log(e.message);
            console.log(e);
            done()
        }
    });

    it('be.err.any.boolean, should be return ok', function (done) {
        try {
            be.err.any.boolean([true, false, true, 2]);
            done()
        } catch (e) {
            console.log(e);
            done(e)
        }
    });

    it('be.err(done).any.boolean, should be return ok', function (done) {
        be.err(done).any.boolean([true, false, true, 2]);
    });

    it('be.err(done).all.boolean, should be return error', function (done) {
        try {
        be.err(done).all.boolean([true, false, true, 2]);
        } catch (e) {
            console.log(e);
            done()
        }
    });

    it('be.err("my error message", done).all.boolean, should be return error', function (done) {
        try {
        be.err("my error message", done).all.boolean([true, false, true, 2]);
        } catch (e) {
            console.log(e);
            done()
        }
    });
});

describe('err with koa', function () {
    this.timeout(10000);
    it('should be error', function (done) {
        const request = require('request');
        const koa = require('koa');
        const app = new koa();

        app.on('error', error=>{
            console.log(error.message);
            done();
        });

        app.use(ctx=>{
            be.err('must be hello').equal('hello', 'hello world');
        });

        app.listen(3000);
        request('http://localhost:3000');
        //
    });
});