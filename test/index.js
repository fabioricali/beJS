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

    it('float, be return false', function () {
        var result = vJS.isInt(4.5);
        console.log(result);
        assert.equal(result, false);
    });

    it('NaN, be return false', function () {
        var result = vJS.isInt(NaN);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isFloat', function () {
    it('float, should be return true', function () {
        var result = vJS.isFloat(2.2);
        console.log(result);
        assert.equal(result, true);
    });

    it('integer, should be return false', function () {
        var result = vJS.isFloat(2);
        console.log(result);
        assert.equal(result, false);
    });

    it('NaN, be return false', function () {
        var result = vJS.isFloat(NaN);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isNaN', function () {
    it('NaN, should be return true', function () {
        var result = vJS.isNaN(NaN);
        console.log(result);
        assert.equal(result, true);
    });

    it('integer, should be return false', function () {
        var result = vJS.isNaN(4);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isMD5', function () {
    it('md5 hash string, should be return true', function () {
        var result = vJS.isMD5('00236a2ae558018ed13b5222ef1bd977');
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = vJS.isMD5('foo');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isSHA1', function () {
    it('sha1 hash string, should be return true', function () {
        var result = vJS.isSHA1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d');
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = vJS.isMD5('foo');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isJSON', function () {
    it('JSON string, should be return true', function () {
        var result = vJS.isJSON('{"a": 1, "b": 2}');
        console.log(result);
        assert.equal(result, true);
    });

    it('not valid JSON string, should be return false', function () {
        var result = vJS.isJSON('"a": 1, "b": 2');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isDate', function () {
    it('date object, should be return true', function () {
        var result = vJS.isDate(new Date());
        console.log(result);
        assert.equal(result, true);
    });

    it('not valid date, should be return false', function () {
        var result = vJS.isDate('2017-06-11');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isEven', function () {
    it('2, should be return true', function () {
        var result = vJS.isEven(2);
        console.log(result);
        assert.equal(result, true);
    });

    it('3, should be return false', function () {
        var result = vJS.isEven(3);
        console.log(result);
        assert.equal(result, false);
    });

    it('5.3, should be return false', function () {
        var result = vJS.isEven(5.3);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isOdd', function () {
    it('3, should be return true', function () {
        var result = vJS.isOdd(3);
        console.log(result);
        assert.equal(result, true);
    });

    it('2, should be return false', function () {
        var result = vJS.isOdd(2);
        console.log(result);
        assert.equal(result, false);
    });

    it('5.3, should be return true', function () {
        var result = vJS.isOdd(5.3);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('isHex', function () {
    it('ffcc00, should be return true', function () {
        var result = vJS.isHex('ffcc00');
        console.log(result);
        assert.equal(result, true);
    });

    it('fff, should be return true', function () {
        var result = vJS.isHex('fff');
        console.log(result);
        assert.equal(result, true);
    });

    it('FFF, should be return true', function () {
        var result = vJS.isHex('fff');
        console.log(result);
        assert.equal(result, true);
    });

    it('0xf0f0f0, should be return true', function () {
        var result = vJS.isHex('0xf0f0f0');
        console.log(result);
        assert.equal(result, true);
    });

    it('#cccccc, should be return true', function () {
        var result = vJS.isHex('#cccccc');
        console.log(result);
        assert.equal(result, false);
    });

    it('nnnnnn, should be return false', function () {
        var result = vJS.isHex('nnnnnn');
        console.log(result);
        assert.equal(result, false);
    });

});

describe('isHexColor', function () {
    it('ffcc00, should be return true', function () {
        var result = vJS.isHexColor('ffcc00');
        console.log(result);
        assert.equal(result, true);
    });

    it('#fff, should be return true', function () {
        var result = vJS.isHexColor('#fff');
        console.log(result);
        assert.equal(result, true);
    });

    it('#ccccccaa, should be return true', function () {
        var result = vJS.isHexColor('#ccccccaa');
        console.log(result);
        assert.equal(result, false);
    });

    it('nnnnnn, should be return false', function () {
        var result = vJS.isHexColor('nnnnnn');
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined, should be return false', function () {
        var result = vJS.isHexColor();
        console.log(result);
        assert.equal(result, false);
    });

    it('null, should be return false', function () {
        var result = vJS.isHexColor(null);
        console.log(result);
        assert.equal(result, false);
    });

});

describe('isFunction', function () {
    it('function, should be return true', function () {
        var result = vJS.isFunction(function () {
            return 1 + 1;
        });
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = vJS.isFunction('function(){}');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isPositive', function () {
    it('positive number, should be return true', function () {
        var result = vJS.isPositive(1);
        console.log(result);
        assert.equal(result, true);
    });

    it('negative number, should be return false', function () {
        var result = vJS.isPositive(-2);
        console.log(result);
        assert.equal(result, false);
    });

    it('0 number, should be return false', function () {
        var result = vJS.isPositive(0);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined number, should be return false', function () {
        var result = vJS.isPositive();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isNegative', function () {
    it('negative number, should be return true', function () {
        var result = vJS.isNegative(-1);
        console.log(result);
        assert.equal(result, true);
    });

    it('positive number, should be return false', function () {
        var result = vJS.isNegative(2);
        console.log(result);
        assert.equal(result, false);
    });

    it('0 number, should be return false', function () {
        var result = vJS.isNegative(0);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined number, should be return false', function () {
        var result = vJS.isNegative();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isAlphanumeric', function () {
    it('alphanumeric, should be return true', function () {
        var result = vJS.isAlphanumeric('abcd28202hju');
        console.log(result);
        assert.equal(result, true);
    });
    it('number as string, should be return true', function () {
        var result = vJS.isAlphanumeric('222');
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return true', function () {
        var result = vJS.isAlphanumeric(222);
        console.log(result);
        assert.equal(result, false);
    });
    it('boolean, should be return true', function () {
        var result = vJS.isAlphanumeric(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isIPv4', function () {
    it('should be return true', function () {
        var result = vJS.isIPv4('127.0.0.1');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = vJS.isIPv4('127.0.0.1.0');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('isIPv6', function () {
    it('should be return true', function () {
        var result = vJS.isIPv6('FF01:0:0:0:0:0:0:1');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = vJS.isIPv6('127.0.0.1');
        console.log(result);
        assert.equal(result, false);
    });
});