/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}
var skip;
beforeEach(function() {
    skip = typeof Buffer === 'undefined';
});

describe('boolean', function () {
    it('boolean value, should be return true', function () {
        var result = be.boolean(true);
        console.log(result);
        assert.equal(result, true);
    });

    it('boolean interface all, should be return true', function () {
        var result = be.all.boolean(true, false, true);
        console.log(result);
        assert.equal(result, true);
    });

    it('boolean interface any, should be return true', function () {
        var result = be.any.boolean(1, false, 1);
        console.log(result);
        assert.equal(result, true);
    });

    it('boolean array interface any, should be return true', function () {
        var result = be.any.boolean([1, false, 1]);
        console.log(result);
        assert.equal(result, true);
    });

    it('boolean array interface all, should be return true', function () {
        var result = be.all.boolean([true, false, true]);
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
    it('negative number value, should be return true', function () {
        var result = be.number(-1);
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

    it('infinite value, should be return true', function () {
        var result = be.number(1.7976931348623157E+10308);
        console.log(result);
        assert.equal(result, true);
    });

    it('undefined value, should be return false', function () {
        var result = be.number();
        console.log(result);
        assert.equal(result, false);
    });

    it('NaN value, should be return false', function () {
        var result = be.number(NaN);
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

    it('string value and interface "not", should be return false', function () {
        var result = be.not.string('hello');
        console.log(result);
        assert.equal(result, false);
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

    it('all strings should be return true', function () {
        var result = be.all.string('string1', 'string2', 'string3');
        console.log(result);
        assert.equal(result, true);
    });

    it('all strings as array should be return true', function () {
        var result = be.all.string(['string1', 'string2', 'string3']);
        console.log(result);
        assert.equal(result, true);
    });

    it('two strings and one number should be return false', function () {
        var result = be.all.string('string1', 'string2', 3);
        console.log(result);
        assert.equal(result, false);
    });

    it('any string should be return true', function () {
        var result = be.any.string('string1', 2, 3);
        console.log(result);
        assert.equal(result, true);
    });

    it('all numbers should be return false', function () {
        var result = be.any.string(1, 2, 3);
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

describe('booleanFalse', function () {
    it('should be return true', function () {
        var result = be.booleanFalse(false);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.booleanFalse(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('booleanTrue', function () {
    it('should be return true', function () {
        var result = be.booleanTrue(true);
        console.log(result);
        assert.equal(result, true);
    });
    it('all arguments, should be return true', function () {
        var result = be.all.booleanTrue(true, true, true, true);
        console.log(result);
        assert.equal(result, true);
    });
    it('all, array, should be return true', function () {
        var result = be.all.booleanTrue([true, true, true, true]);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.booleanTrue(false);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('false', function () {
    it('should be return true', function () {
        var result = be.false(false);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.false(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('true', function () {
    it('should be return true', function () {
        var result = be.true(true);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.true(false);
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

describe('falsy', function () {
    it('false, should be return true', function () {
        var result = be.falsy(false);
        console.log(result);
        assert.equal(result, true);
    });
    it('null, should be return true', function () {
        var result = be.falsy(null);
        console.log(result);
        assert.equal(result, true);
    });
    it('undefined, should be return true', function () {
        var result = be.falsy();
        console.log(result);
        assert.equal(result, true);
    });
    it('0, should be return true', function () {
        var result = be.falsy(0);
        console.log(result);
        assert.equal(result, true);
    });
    it('NaN, should be return true', function () {
        var result = be.falsy(NaN);
        console.log(result);
        assert.equal(result, true);
    });
    it('empty string, should be return true', function () {
        var result = be.falsy('');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.falsy(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('truthy', function () {
    it('string, should be return true', function () {
        var result = be.truthy('hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('object, should be return true', function () {
        var result = be.truthy({});
        console.log(result);
        assert.equal(result, true);
    });
    it('array, should be return true', function () {
        var result = be.truthy([]);
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return true', function () {
        var result = be.truthy(2);
        console.log(result);
        assert.equal(result, true);
    });
    it('true, should be return true', function () {
        var result = be.truthy(true);
        console.log(result);
        assert.equal(result, true);
    });
    it('false, should be return true', function () {
        var result = be.truthy(false);
        console.log(result);
        assert.equal(result, false);
    });
    it('null, should be return true', function () {
        var result = be.truthy(null);
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined, should be return true', function () {
        var result = be.truthy();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('classOf', function () {
    it('should be return true', function () {
        var result = be.classOf(new Error('an error'), 'error');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.classOf(new Error('an error'), 'object');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('error', function () {
    it('should be return true', function () {
        var result = be.error(new Error('an error'));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.error({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('argument', function () {
    it('should be return true', function () {
        function arg() {
            var result = be.argument(arguments);
            console.log(result);
            assert.equal(result, true);
        }
        arg('hello');
    });
    it('should be return false', function () {
        var result = be.argument({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('primitive', function () {
    it('number, should be return true', function () {
        var result = be.primitive(20);
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return false', function () {
        var result = be.primitive(new Number(20));
        console.log(result);
        assert.equal(result, false);
    });
    it('string, should be return true', function () {
        var result = be.primitive('hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('string, should be return false', function () {
        var result = be.primitive(new String('hello'));
        console.log(result);
        assert.equal(result, false);
    });
});

describe('promise', function () {
    it('should be return true', function () {

        var p = new Promise(
            function (resolve, reject) {
                resolve();
            }
        );

        var result = be.promise(p);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.promise(function(){});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('buffer', function () {

        it('should be return true', function () {

            if(skip) return;

            var b = new Buffer('hello');

            var result = be.buffer(b);
            console.log(result);
            assert.equal(result, true);
        });
        it('should be return false', function () {
            if(skip) return;

            var result = be.buffer('hello');
            console.log(result);
            assert.equal(result, false);
        });
});

describe('iterable', function () {
    it('array should be return true', function () {
        var result = be.iterable([1,2,3]);
        console.log(result);
        assert.equal(result, true);
    });
    it('string should be return true', function () {
        var result = be.iterable('hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('object should be return false', function () {
        var result = be.iterable({a:1});
        console.log(result);
        assert.equal(result, false);
    });
    it('Map iterable, should be return true', function () {
        var result = be.iterable(new Map().values());
        console.log(result);
        assert.equal(result, true);
    });
    it('Set iterable, should be return true', function () {
        var result = be.iterable(new Set().values());
        console.log(result);
        assert.equal(result, true);
    });
});

describe('symbol', function () {
    it('should be return true', function () {
        var result = be.symbol(Symbol('hello'));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.symbol({a:1});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('defined_', function () {
    it('should be return true', function () {
        var param = 'hello';
        var result = be.defined(param);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var param;
        var result = be.defined(param);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('array_', function () {
    it('should be return true', function () {
        var result = be.array([1,2,3]);
        console.log(result);
        assert.equal(result, true);
    });
    it('interface all, should be return true', function () {
        var result = be.all.array([1,2,3],[2,4,5]);
        console.log(result);
        assert.equal(result, true);
    });
    it('interface any, should be return true', function () {
        var result = be.any.array([1,2,3],true);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.array('hello');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('oSet', function () {
    it('should be return true', function () {
        var result = be.oSet(new Set());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.oSet({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('weakSet', function () {
    it('should be return true', function () {
        var result = be.weakSet(new WeakSet());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.weakSet({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('map', function () {
    it('should be return true', function () {
        var result = be.map(new Map());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.map({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('weakMap', function () {
    it('should be return true', function () {
        var result = be.weakMap(new WeakMap());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.weakMap({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('mapIterator', function () {
    it('should be return true', function () {
        var result = be.mapIterator(new Map().values());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.mapIterator({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('setIterator', function () {
    it('should be return true', function () {
        var result = be.setIterator(new Set().values());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.setIterator({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('int8Array', function () {
    it('should be return true', function () {
        var result = be.int8Array(new Int8Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.int8Array({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('uint8Array', function () {
    it('should be return true', function () {
        var result = be.uint8Array(new Uint8Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.uint8Array({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('uint8ClampedArray', function () {
    it('should be return true', function () {
        var result = be.uint8ClampedArray(new Uint8ClampedArray());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.uint8ClampedArray({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('int16Array', function () {
    it('should be return true', function () {
        var result = be.int16Array(new Int16Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.int16Array({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('uint16Array', function () {
    it('should be return true', function () {
        var result = be.uint16Array(new Uint16Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.uint16Array({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('int32Array', function () {
    it('should be return true', function () {
        var result = be.int32Array(new Int32Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.int32Array({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('uint32Array', function () {
    it('should be return true', function () {
        var result = be.uint32Array(new Uint32Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.uint32Array({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('float32Array', function () {
    it('should be return true', function () {
        var result = be.float32Array(new Float32Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.float32Array({});
        console.log(result);
        assert.equal(result, false);
    });
});

describe('float64Array', function () {
    it('should be return true', function () {
        var result = be.float64Array(new Float64Array({}));
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.float64Array({});
        console.log(result);
        assert.equal(result, false);
    });
});