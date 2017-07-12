/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('commonjsEnv', function () {
    if(typeof window === 'undefined')
        it('should be return true', function () {
            var result = be.commonjsEnv();
            console.log(result);
            assert.equal(result, true);
        })
});

describe('isBrowser', function () {
    if(typeof window === 'undefined')
        it('should be return false', function () {
            var result = be.browserEnv();
            console.log(result);
            assert.equal(result, false);
        })
});

describe('ios', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 ' +
            '(KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1';
        var result = be.ios(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) ' +
            'Chrome/47.0.2526.83 Mobile Safari/537.36';
        var result = be.ios(userAgent);
        console.log(result);
        assert.equal(result, false);
    });

    it('should be return error', function (done) {
        try {
            be.ios();
            if(navigator)
                done();
        } catch (e) {
            if(e.message === 'test allowed only in browser environment')
                done();
        }
    });
});

describe('android', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 ' +
            '(KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1';
        var result = be.android(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) ' +
            'Chrome/47.0.2526.83 Mobile Safari/537.36';
        var result = be.android(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return error', function (done) {
        try {
            be.android();
            if(navigator)
                done();
        } catch (e) {
            done();
        }
    });
});

describe('chrome', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';
        var result = be.chrome(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('safari, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4';
        var result = be.chrome(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('opera, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36 OPR/46.0.2597.32';
        var result = be.chrome(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});