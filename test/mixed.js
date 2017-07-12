/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

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

describe('equal', function () {
    it('string, should be return true', function () {
        var result = be.equal('hello', 'hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('string, should be return false', function () {
        var result = be.equal('hello', 'hellow');
        console.log(result);
        assert.equal(result, false);
    });
    it('number, should be return true', function () {
        var result = be.equal(2, 2);
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return false', function () {
        var result = be.equal(2, 3);
        console.log(result);
        assert.equal(result, false);
    });
    it('number zero negative, should be return false', function () {
        var result = be.equal(-0, 0);
        console.log(result);
        assert.equal(result, false);
    });
    it('number zero, should be return true', function () {
        var result = be.equal(0, 0);
        console.log(result);
        assert.equal(result, true);
    });
    it('number zero positive, should be return true', function () {
        var result = be.equal(+0, 0);
        console.log(result);
        assert.equal(result, true);
    });
    it('number zero positive and negative, should be return false', function () {
        var result = be.equal(+0, -0);
        console.log(result);
        assert.equal(result, false);
    });
    it('number zero and empty string, should be return false', function () {
        var result = be.equal(0, '');
        console.log(result);
        assert.equal(result, false);
    });
    it('boolean, should be return true', function () {
        var result = be.equal(true, true);
        console.log(result);
        assert.equal(result, true);
    });
    it('boolean, should be return false', function () {
        var result = be.equal(true, false);
        console.log(result);
        assert.equal(result, false);
    });
    it('regexp, should be return true', function () {
        var result = be.equal(/hello/, /hello/);
        console.log(result);
        assert.equal(result, true);
    });
    it('regexp, should be return false', function () {
        var result = be.equal(/hello/, /hellow/);
        console.log(result);
        assert.equal(result, false);
    });
    it('regexp 2, should be return true', function () {
        var result = be.equal(new RegExp(/hello/), new RegExp(/hello/));
        console.log(result);
        assert.equal(result, true);
    });
    it('object, should be return true', function () {
        var result = be.equal({a:1}, {a:1});
        console.log(result);
        assert.equal(result, true);
    });
    it('object different, should be return false', function () {
        var result = be.equal({a:1}, {a:2});
        console.log(result);
        assert.equal(result, false);
    });
    it('array, should be return true', function () {
        var result = be.equal([1,2,3], [1,2,3]);
        console.log(result);
        assert.equal(result, true);
    });
    it('array different, should be return false', function () {
        var result = be.equal([1,2,3], [1,1,1]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('creditCard', function () {
    it('should be return true', function () {
        var result = be.creditCard('4242424242424242');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.creditCard('1212422241424242');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('fiscalCodeIT', function () {
    it('should be return true', function () {
        var result = be.fiscalCodeIT('OLEFBA97C64F158X');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.fiscalCodeIT('OLEFBA977777C64F158X');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('macAddress', function () {
    it('(:), should be return true', function () {
        var result = be.macAddress('3D:F2:C9:A6:B3:4F');
        console.log(result);
        assert.equal(result, true);
    });
    it('(-), should be return true', function () {
        var result = be.macAddress('3D-F2-C9-A6-B3-4F');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.macAddress('3DF2C9A6B34F');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('compareVersion', function () {
    it('should be return true', function () {
        var result = be.compareVersion('1.0.2', '>', '1.0.1');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return true, consider major only', function () {
        var result = be.compareVersion('1.0.2', '==', '1.0.1', true);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.compareVersion('1.0.2', '==', '1.0.1');
        console.log(result);
        assert.equal(result, false);
    });
});
