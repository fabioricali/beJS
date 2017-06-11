/**
 * Created by Fabio on 11/06/2017.
 */
var assert = require('assert');
var vJS = require('../index');

describe('isBoolean', function () {
    it('boolean value, should be return true', function () {
        var result = vJS.isBoolean(false);
        console.log(result);
        assert.equal(result, true);
    });

    it('string value, should be return false', function () {
        var result = vJS.isBoolean('true');
        console.log(result);
        assert.equal(result, false);
    });

    it('number value, should be return false', function () {
        var result = vJS.isBoolean(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isBoolean();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isNumber', function () {
    it('number value, should be return true', function () {
        var result = vJS.isNumber(1);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value as string, should be return false', function () {
        var result = vJS.isNumber('1');
        console.log(result);
        assert.equal(result, false);
    });

    it('float value, should be return true', function () {
        var result = vJS.isNumber(2.2);
        console.log(result);
        assert.equal(result, true);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isNumber();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isString', function () {
    it('string value, should be return true', function () {
        var result = vJS.isString('hello');
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = vJS.isString(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isString();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isUndefined', function () {
    it('should be return true', function () {
        var result = vJS.isUndefined();
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = vJS.isUndefined(1);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isNull', function () {
    it('should be return true', function () {
        var result = vJS.isNull(null);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = vJS.isNull(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = vJS.isNull();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isUrl', function () {
    it('string url value, should be return true', function () {
        var result = vJS.isUrl('http://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('string url value, should be return false', function () {
        var result = vJS.isUrl('http://.it');
        console.log(result);
        assert.equal(result, false);
    });

    it('string url value without protocol, should be return false', function () {
        var result = vJS.isUrl('www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isHttpUrl', function () {
    it('should be return true', function () {
        var result = vJS.isHttpUrl('http://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = vJS.isHttpUrl('https://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isHttpsUrl', function () {
    it('should be return true', function () {
        var result = vJS.isHttpsUrl('https://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = vJS.isHttpsUrl('http://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isFtpUrl', function () {
    it('should be return true', function () {
        var result = vJS.isFtpUrl('ftp://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = vJS.isFtpUrl('ftps://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isFtpsUrl', function () {
    it('should be return true', function () {
        var result = vJS.isFtpsUrl('ftps://www.google.it');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = vJS.isFtpsUrl('ftp://www.google.it');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isEmail', function () {
    it('should be return true', function () {
        var result = vJS.isEmail('fabio@rica.li');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = vJS.isEmail('fabio@rica');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isObject', function () {
    it('object, should be return true', function () {
        var result = vJS.isObject({a: 1, b: 2});
        console.log(result);
        assert.equal(result, true);
    });

    it('array, should be return true', function () {
        var result = vJS.isObject([1, 2, 3]);
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = vJS.isObject('fabio@rica');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isInt', function () {
    it('integer, should be return true', function () {
        var result = vJS.isInt(40);
        console.log(result);
        assert.equal(result, true);
    });

    it('float be return false', function () {
        var result = vJS.isInt(4.5);
        console.log(result);
        assert.equal(result, false);
    });
});