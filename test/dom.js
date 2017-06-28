/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var jsdom = require('jsdom');
    var assert = require('assert');
    var be = require('../index');

    var dom = new jsdom.JSDOM('<body><p>hello world</p></body>');
    var document = dom.window.document;
}

describe('domElement', function () {
    it('should be return true', function () {
        console.log(document.getElementsByTagName('body')[0]);
        var result = be.domElement(document.body);
        console.log(result);
        assert.equal(result, true);
    });
    it('string, should be return false', function () {
        var result = be.domElement('foo');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('domElementTag', function () {
    it('should be return true', function () {
        var result = be.domElementTag(document.body, 'body');
        console.log(result);
        assert.equal(result, true);
    });
    it('string, should be return false', function () {
        var result = be.domElementTag(document.body, 'ul');
        console.log(result);
        assert.equal(result, false);
    });
});