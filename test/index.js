/**
 * Created by Fabio on 11/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

it('count class methods', function () {
    var result = Object.keys(be).length;
    console.log('total methods', result);
    assert.equal(result > 0, true);
});

describe('boolean', function () {
    it('boolean value, should be return true', function () {
        var result = be.boolean(false);
        console.log(result);
        assert.equal(result, true);
    });

    it('string value, should be return false', function () {
        var result = be.boolean('true');
        console.log(result);
        assert.equal(result, false);
    });

    it('number value, should be return false', function () {
        var result = be.boolean(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = be.boolean();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('number', function () {
    it('number value, should be return true', function () {
        var result = be.number(1);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value as string, should be return false', function () {
        var result = be.number('1');
        console.log(result);
        assert.equal(result, false);
    });

    it('float value, should be return true', function () {
        var result = be.number(2.2);
        console.log(result);
        assert.equal(result, true);
    });

    it('undefined value, should be return false', function () {
        var result = be.number();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('string', function () {
    it('string value, should be return true', function () {
        var result = be.string('hello');
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = be.string(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = be.string();
        console.log(result);
        assert.equal(result, false);
    });

    it('each strings should be return true', function () {
        var result = be.each.string('string1', 'string2', 'string3');
        console.log(result);
        assert.equal(result, true);
    });

    it('each strings as array should be return true', function () {
        var result = be.each.string(['string1', 'string2', 'string3']);
        console.log(result);
        assert.equal(result, true);
    });

    it('two strings and one number should be return false', function () {
        var result = be.each.string('string1', 'string2', 3);
        console.log(result);
        assert.equal(result, false);
    });

    it('some string should be return true', function () {
        var result = be.some.string('string1', 2, 3);
        console.log(result);
        assert.equal(result, true);
    });

    it('each numbers should be return false', function () {
        var result = be.some.string(1, 2, 3);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('undefined', function () {
    it('should be return true', function () {
        var result = be.undefined();
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = be.undefined(1);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('null', function () {
    it('should be return true', function () {
        var result = be.null(null);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = be.null(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = be.null();
        console.log(result);
        assert.equal(result, false);
    });
});

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

describe('email', function () {
    it('should be return true', function () {
        var result = be.email('fabio@rica.li');
        console.log(result);
        assert.equal(result, true);
    });

    it('should be return false', function () {
        var result = be.email('fabio@rica');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('object', function () {
    it('object, should be return true', function () {
        var result = be.object({a: 1, b: 2, c: [1, 2, 3]});
        console.log(result);
        assert.equal(result, true);
    });

    it('array, should be return false', function () {
        var result = be.object([1, 2, 3]);
        console.log(result);
        assert.equal(result, false);
    });

    it('should be return false', function () {
        var result = be.object('fabio@rica');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('int', function () {
    it('integer, should be return true', function () {
        var result = be.int(40);
        console.log(result);
        assert.equal(result, true);
    });

    it('float, be return false', function () {
        var result = be.int(4.5);
        console.log(result);
        assert.equal(result, false);
    });

    it('NaN, be return false', function () {
        var result = be.int(NaN);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('float', function () {
    it('float, should be return true', function () {
        var result = be.float(2.2);
        console.log(result);
        assert.equal(result, true);
    });

    it('integer, should be return false', function () {
        var result = be.float(2);
        console.log(result);
        assert.equal(result, false);
    });

    it('NaN, be return false', function () {
        var result = be.float(NaN);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('nan', function () {
    it('NaN, should be return true', function () {
        var result = be.nan(NaN);
        console.log(result);
        assert.equal(result, true);
    });

    it('integer, should be return false', function () {
        var result = be.nan(4);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('md5', function () {
    it('md5 hash string, should be return true', function () {
        var result = be.md5('00236a2ae558018ed13b5222ef1bd977');
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = be.md5('foo');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('sha1', function () {
    it('sha1 hash string, should be return true', function () {
        var result = be.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d');
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = be.md5('foo');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('json', function () {
    it('JSON string, should be return true', function () {
        var result = be.json('{"a": 1, "b": 2}');
        console.log(result);
        assert.equal(result, true);
    });

    it('not valid JSON string, should be return false', function () {
        var result = be.json('"a": 1, "b": 2');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('date', function () {
    it('date object, should be return true', function () {
        var result = be.date(new Date());
        console.log(result);
        assert.equal(result, true);
    });

    it('not valid date, should be return false', function () {
        var result = be.date('2017-06-11');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('even', function () {
    it('2, should be return true', function () {
        var result = be.even(2);
        console.log(result);
        assert.equal(result, true);
    });

    it('3, should be return false', function () {
        var result = be.even(3);
        console.log(result);
        assert.equal(result, false);
    });

    it('5.3, should be return false', function () {
        var result = be.even(5.3);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('odd', function () {
    it('3, should be return true', function () {
        var result = be.odd(3);
        console.log(result);
        assert.equal(result, true);
    });

    it('2, should be return false', function () {
        var result = be.odd(2);
        console.log(result);
        assert.equal(result, false);
    });

    it('5.3, should be return true', function () {
        var result = be.odd(5.3);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('hex', function () {
    it('ffcc00, should be return true', function () {
        var result = be.hex('ffcc00');
        console.log(result);
        assert.equal(result, true);
    });

    it('fff, should be return true', function () {
        var result = be.hex('fff');
        console.log(result);
        assert.equal(result, true);
    });

    it('FFF, should be return true', function () {
        var result = be.hex('fff');
        console.log(result);
        assert.equal(result, true);
    });

    it('0xf0f0f0, should be return true', function () {
        var result = be.hex('0xf0f0f0');
        console.log(result);
        assert.equal(result, true);
    });

    it('#cccccc, should be return true', function () {
        var result = be.hex('#cccccc');
        console.log(result);
        assert.equal(result, false);
    });

    it('nnnnnn, should be return false', function () {
        var result = be.hex('nnnnnn');
        console.log(result);
        assert.equal(result, false);
    });

});

describe('hexColor', function () {
    it('ffcc00, should be return true', function () {
        var result = be.hexColor('ffcc00');
        console.log(result);
        assert.equal(result, true);
    });

    it('#fff, should be return true', function () {
        var result = be.hexColor('#fff');
        console.log(result);
        assert.equal(result, true);
    });

    it('#ccccccaa, should be return true', function () {
        var result = be.hexColor('#ccccccaa');
        console.log(result);
        assert.equal(result, false);
    });

    it('nnnnnn, should be return false', function () {
        var result = be.hexColor('nnnnnn');
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined, should be return false', function () {
        var result = be.hexColor();
        console.log(result);
        assert.equal(result, false);
    });

    it('null, should be return false', function () {
        var result = be.hexColor(null);
        console.log(result);
        assert.equal(result, false);
    });

});

describe('function', function () {
    it('function, should be return true', function () {
        var result = be.function(function () {
            return 1 + 1;
        });
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = be.function('function(){}');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('positive', function () {
    it('positive number, should be return true', function () {
        var result = be.positive(1);
        console.log(result);
        assert.equal(result, true);
    });

    it('negative number, should be return false', function () {
        var result = be.positive(-2);
        console.log(result);
        assert.equal(result, false);
    });

    it('0 number, should be return false', function () {
        var result = be.positive(0);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined number, should be return false', function () {
        var result = be.positive();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('negative', function () {
    it('negative number, should be return true', function () {
        var result = be.negative(-1);
        console.log(result);
        assert.equal(result, true);
    });

    it('positive number, should be return false', function () {
        var result = be.negative(2);
        console.log(result);
        assert.equal(result, false);
    });

    it('0 number, should be return false', function () {
        var result = be.negative(0);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined number, should be return false', function () {
        var result = be.negative();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('alphanumeric', function () {
    it('alphanumeric, should be return true', function () {
        var result = be.alphanumeric('abcd28202hju');
        console.log(result);
        assert.equal(result, true);
    });
    it('number as string, should be return true', function () {
        var result = be.alphanumeric('222');
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return true', function () {
        var result = be.alphanumeric(222);
        console.log(result);
        assert.equal(result, false);
    });
    it('boolean, should be return true', function () {
        var result = be.alphanumeric(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ip', function () {
    it('should be return true', function () {
        var result = be.ip('127.0.0.1');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.ip('127.0.0.1.0');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ipv4', function () {
    it('should be return true', function () {
        var result = be.ipv4('127.0.0.1');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.ipv4('127.0.0.1.0');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ipv6', function () {
    it('should be return true', function () {
        var result = be.ipv6('FF01:0:0:0:0:0:0:1');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.ipv6('127.0.0.1');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('base64', function () {
    it('should be return true', function () {
        var result = be.base64('aGVsbG8=');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.base64('127.0.0.1');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('empty', function () {
    it('should be return true', function () {
        var result = be.empty('');
        console.log(result);
        assert.equal(result, true);
    });
    it('undefined value, should be return true', function () {
        var result = be.empty();
        console.log(result);
        assert.equal(result, true);
    });
    it('space string, should be return false', function () {
        var result = be.empty(' ');
        console.log(result);
        assert.equal(result, false);
    });
    it('number, should be return false', function () {
        var result = be.empty(3);
        console.log(result);
        assert.equal(result, false);
    });
    it('negative number, should be return false', function () {
        var result = be.empty(-3);
        console.log(result);
        assert.equal(result, false);
    });
    it('zero number, should be return false', function () {
        var result = be.empty(0);
        console.log(result);
        assert.equal(result, false);
    });
    it('object, should be return true', function () {
        var result = be.empty({});
        console.log(result);
        assert.equal(result, true);
    });
    it('null, should be return true', function () {
        var result = be.empty(null);
        console.log(result);
        assert.equal(result, true);
    });
    it('function, should be return false', function () {
        var result = be.empty(function () {});
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return false', function () {
        var result = be.empty('test');
        console.log(result);
        assert.equal(result, false);
    });
    it('empty array, should be return true', function () {
        var result = be.empty([]);
        console.log(result);
        assert.equal(result, true);
    });
    it('array with item, should be return false', function () {
        var result = be.empty([3]);
        console.log(result);
        assert.equal(result, false);
    });
    it('NaN, should be return true', function () {
        var result = be.empty(NaN);
        console.log(result);
        assert.equal(result, true);
    });
    it('boolean true, should be return false', function () {
        var result = be.empty(true);
        console.log(result);
        assert.equal(result, false);
    });
    it('boolean false, should be return false', function () {
        var result = be.empty(false);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('dateString', function () {
    it('yyyy-mm-dd, should be return true', function () {
        var result = be.dateString('2017-06-11');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH:MM:SS, should be return true', function () {
        var result = be.dateString('2017-06-11 20:45:50');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH:MM, should be return true', function () {
        var result = be.dateString('2017-06-11 20:45');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH, should be return false', function () {
        var result = be.dateString('2017-06-11 20');
        console.log(result);
        assert.equal(result, false);
    });
    it('yyyy-mm-ddTHH:MM:SS, should be return true', function () {
        var result = be.dateString('2017-06-11T20:50:50');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH:MM:SS wrong minutes, should be return false', function () {
        var result = be.dateString('2017-06-11 20:70:50');
        console.log(result);
        assert.equal(result, false);
    });
    it('yyyy/mm/dd, should be return true', function () {
        var result = be.dateString('2017/06/11');
        console.log(result);
        assert.equal(result, true);
    });
    it('dd/mm/yyyy, should be return true', function () {
        var result = be.dateString('11/06/2017');
        console.log(result);
        assert.equal(result, true);
    });
    it('wrong format, should be return false', function () {
        var result = be.dateString('2017-06-112');
        console.log(result);
        assert.equal(result, false);
    });
    it('wrong format dd-yyyy-mm, should be return false', function () {
        var result = be.dateString('11-2017-06');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('semVer', function () {
    it('1.0.0, should be return true', function () {
        var result = be.semVer('1.0.0');
        console.log(result);
        assert.equal(result, true);
    });
    it('2.0.0-rc.2, should be return true', function () {
        var result = be.semVer('2.0.0-rc.2');
        console.log(result);
        assert.equal(result, true);
    });
    it('1.0.0-alpha, should be return true', function () {
        var result = be.semVer('1.0.0-alpha');
        console.log(result);
        assert.equal(result, true);
    });
    it('1.0.0-ALPHA, should be return true', function () {
        var result = be.semVer('1.0.0-ALPHA');
        console.log(result);
        assert.equal(result, true);
    });
    it('0.0.0, should be return true', function () {
        var result = be.semVer('0.0.0');
        console.log(result);
        assert.equal(result, true);
    });
    it('test, should be return false', function () {
        var result = be.semVer('test');
        console.log(result);
        assert.equal(result, false);
    });
    it('v1.0.0, should be return false', function () {
        var result = be.semVer('v1.0.0');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('serverEnv', function () {
    if(typeof window === 'undefined')
    it('should be return true', function () {
        var result = be.serverEnv();
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
            if(navigation)
                done();
        } catch (e) {
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
            if(navigation)
                done();
        } catch (e) {
            done();
        }
    });
});

describe('sameType', function () {
    it('should be return true', function () {
        var result = be.sameType('hello', 'ciao');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.sameType(true, 1);
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined arguments, should be return true', function () {
        var result = be.sameType();
        console.log(result);
        assert.equal(result, true);
    });
});

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

describe('propertyOf', function () {
    it('should be return true', function () {
        var result = be.propertyOf('a', {a: 1, b: 2});
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.propertyOf('a', {b: 2, c: 3});
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined should be return false', function () {
        var result = be.propertyOf();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('propertyCount', function () {
    it('should be return true', function () {
        var result = be.propertyCount({a: 1, b: 2}, 2);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.propertyCount({a: 1, b: 2}, 5);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('regexp', function () {
    it('should be return true', function () {
        var result = be.regexp(/hello/);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.regexp([]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('contains', function () {
    it('should be return true', function () {
        var result = be.contains('hello world', 'world');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.contains('hello world', 'ciao');
        console.log(result);
        assert.equal(result, false);
    });
    it('array, should be return false', function () {
        var result = be.contains([2,3], 3);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('lowerCase', function () {
    it('should be return true', function () {
        var result = be.lowerCase('hello world');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.lowerCase('Hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('array, should be return false', function () {
        var result = be.lowerCase([2,3]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('upperCase', function () {
    it('should be return true', function () {
        var result = be.upperCase('HELLO WORLD');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.upperCase('Hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('array, should be return false', function () {
        var result = be.upperCase([2,3]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('word', function () {
    it('should be return true', function () {
        var result = be.word('hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.word('Hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('only space, should be return false', function () {
        var result = be.word(' ');
        console.log(result);
        assert.equal(result, false);
    });
    it('with space, should be return true', function () {
        var result = be.word('hello ');
        console.log(result);
        assert.equal(result, true);
    });
    it('array, should be return false', function () {
        var result = be.word([2,3]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('capitalized', function () {
    it('should be return true', function () {
        var result = be.capitalized('Hello World');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.capitalized('hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('empty string should be return false', function () {
        var result = be.capitalized('');
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
});