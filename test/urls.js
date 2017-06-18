/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('url', function () {
    it('string url value, should be return true', function () {
        var result = be.url('http://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('string url value, should be return false', function () {
        var result = be.url('http://.it');
        console.log(result);
        assert.equal(result, false);
    });

    it('string url value without protocol, should be return false', function () {
        var result = be.url('www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('httpUrl', function () {
    it('should be return true', function () {
        var result = be.httpUrl('http://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = be.httpUrl('https://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('httpsUrl', function () {
    it('should be return true', function () {
        var result = be.httpsUrl('https://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = be.httpsUrl('http://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ftpUrl', function () {
    it('should be return true', function () {
        var result = be.ftpUrl('ftp://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = be.ftpUrl('ftps://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ftpsUrl', function () {
    it('should be return true', function () {
        var result = be.ftpsUrl('ftps://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = be.ftpsUrl('ftp://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('urlEncoded', function () {
    it('should be return true', function(){
        var result = be.urlEncoded('http%3A%2F%2Fwww.domain.net%2F%3Fv%3D1%26z%3D2');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function(){
        var result = be.urlEncoded('http://www.domain.net/?v=1&z=2');
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined, should be return false', function(){
        var result = be.urlEncoded();
        console.log(result);
        assert.equal(result, false);
    });
    it('null, should be return false', function(){
        var result = be.urlEncoded(null);
        console.log(result);
        assert.equal(result, false);
    });
    it('2, should be return true', function(){
        var result = be.urlEncoded('http://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8');
        console.log(result);
        assert.equal(result, true);
    });
});