/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

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

describe('infinityPositive', function () {
    it('should be return true', function () {
        var result = be.infinityPositive(1.7976931348623157E+10308);
        console.log(result);
        assert.equal(result, true);
    });
    it('null, should be return false', function () {
        var result = be.infinityPositive(null);
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined, should be return false', function () {
        var result = be.infinityPositive();
        console.log(result);
        assert.equal(result, false);
    });
    it('0, should be return false', function () {
        var result = be.infinityPositive(0);
        console.log(result);
        assert.equal(result, false);
    });
    it('NaN, should be return true', function () {
        var result = be.infinityPositive(NaN);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('infinityNegative', function () {
    it('should be return true', function () {
        var result = be.infinityNegative(-1.7976931348623157E+10308);
        console.log(result);
        assert.equal(result, true);
    });
    it('null, should be return false', function () {
        var result = be.infinityNegative(null);
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined, should be return false', function () {
        var result = be.infinityNegative();
        console.log(result);
        assert.equal(result, false);
    });
    it('-2, should be return false', function () {
        var result = be.infinityNegative(-2);
        console.log(result);
        assert.equal(result, false);
    });
    it('NaN, should be return true', function () {
        var result = be.infinityNegative(NaN);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('infinity', function () {
    it('positive, should be return true', function () {
        var result = be.infinity(1.7976931348623157E+10308);
        console.log(result);
        assert.equal(result, true);
    });
    it('negative, should be return true', function () {
        var result = be.infinity(-1.7976931348623157E+10308);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.infinity(10000);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('between', function () {
    it('should be return true', function () {
        var result = be.between(50, 2, 100);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.between(101, 2, 100);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('greater', function () {
    it('should be return true', function () {
        var result = be.greater(20, 10);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.greater(10, 20);
        console.log(result);
        assert.equal(result, false);
    });
});