/**
 * @fileOverview Types checks.
 * @module Types
 */

const Helpers = require('../helpers');
const Interface = require('../interface');
let Types = {};

/**
 * Check [object ?] class
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name classOf
 * @param object {Mixed} object
 * @param className {string} class name
 * @returns {boolean}
 * @example
 * be.classOf(2, 'number') // true
 * be.classOf([1, 2, 3], 'array') // true
 * be.classOf({a: 1, b: 2}, 'object') // true
 * be.classOf({a: 1, b: 2}, 'array') // false
 * be.classOf(/hello/, 'regexp') // true
 * be.classOf(true, 'boolean') // true
 */
Types.classOf = (object, className) => {
    return Helpers.objectToString(object).toLowerCase() === '[object ' + className + ']'.toLowerCase();
};

Types.classOf.multiple = false;

/**
 * Check type of (alias of classOf)
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name of
 * @param object {Mixed} object
 * @param className {string} class name
 * @returns {boolean}
 * @since 1.11.0
 * @example
 * be.of(2, 'number') // true
 * be.of([1, 2, 3], 'array') // true
 * be.of({a: 1, b: 2}, 'object') // true
 * be.of({a: 1, b: 2}, 'array') // false
 * be.of(/hello/, 'regexp') // true
 * be.of(true, 'boolean') // true
 */
Types.of = Types.classOf;

Types.of.multiple = false;

/**
 * Check if is valid boolean
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name boolean
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.boolean(false) // true
 * be.boolean('true') // false
 */
Types.boolean = (value) => {
    return Types.classOf(value, 'boolean');
};

/**
 * Alias of `be.false`
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name booleanFalse
 * @alias false
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.3.1
 * @example
 * be.booleanFalse(false) // true
 * be.booleanFalse(true) // false
 */
Types.booleanFalse = (value) => {
    return Types.false(value);
};

/**
 * Check if is false boolean type
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name false
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.booleanFalse(false) // true
 * be.booleanFalse(true) // false
 */
Types.false = (value) => {
    return Types.boolean(value) && value === false;
};

/**
 * Alias of `be.true`
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name booleanTrue
 * @alias true
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.3.1
 * @example
 * be.booleanTrue(true) // true
 * be.booleanTrue(false) // false
 */
Types.booleanTrue = (value) => {
    return Types.true(value);
};

/**
 * Check if is true boolean type
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name true
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.booleanTrue(true) // true
 * be.booleanTrue(false) // false
 */
Types.true = (value) => {
    return Types.boolean(value) && value === true;
};

/**
 * Check if is valid number
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name number
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.number(1) // true
 * be.number(false) // false
 */
Types.number = (value) => {
    return Types.classOf(value, 'number') && !isNaN(value);
};

/**
 * Check if is valid string
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name string
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.string('hello') // true
 * be.string(false) // false
 */
Types.string = (value) => {
    return Types.classOf(value, 'string');
};

/**
 * Check if is undefined value
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name undefined
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.undefined(undefined) // true
 * be.undefined(null) // false
 */
Types.undefined = (value) => {
    return Types.classOf(value, 'undefined');
};

/**
 * Check if is null
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name null
 * @alias null
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.null(null) // true
 * be.null(undefined) // false
 */
Types['null'] = (value) => {
    return Types.classOf(value, 'null');
};

/**
 * Check if is null or undefined
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name nil
 * @alias nil
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.12.1
 * @example
 * be.nil(null) // true
 * be.nil(undefined) // true
 */
Types.nil = (value) => {
    return Types.null(value) || Types.undefined(value);
};

/**
 * Check if is a object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.object({a: 1, b: 2}) // true
 * be.object([1, 2, 3]) // false
 */
Types.object = (value) => {
    return Types.classOf(value, 'object') && !Types.array(value);
};

/**
 * Check if is an array
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name array
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.array([1, 2, 3]) // true
 * be.array({a: 1, b: 2}) // false
 */
Types.array = (value) => {
    return Types.classOf(value, 'array');
};

/**
 * Check if is a JSON string
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name json
 * @param value {Mixed} json string
 * @returns {boolean}
 * @example
 * be.json('{"a": 1, "b": 2}') // true
 * be.json({a: 1, b: 2}) // false
 */
Types.json = (value) => {
    try {
        return !!JSON.parse(value);
    } catch (e) {
        return false;
    }
};

/**
 * Check if is date object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name date
 * @param value {Mixed} date object
 * @returns {boolean}
 * @example
 * be.date(new Date()) // true
 * be.date('2017-12-25') // false
 */
Types.date = (value) => {
    return Types.classOf(value, 'date');
};

/**
 * Check if is a function
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name function
 * @alias function
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.function(function(){return 1 + 2}) // true
 * be.function(new Date()) // false
 */
Types['function'] = (value) => {
    return Types.classOf(value, 'function');
};

/**
 * Check if is a valid RegExp
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name regexp
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.regexp(/hello/) // true
 * be.regexp('hello') // false
 * be.regexp(new RegExp(/hello/)) // true
 */
Types.regexp = (value) => {
    return Types.classOf(value,'regexp');
};

/**
 * Check if both arguments are same type
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name sameType
 * @param value {Mixed} first
 * @param other {Mixed} second
 * @returns {boolean}
 * @example
 * be.sameType(1, 1) // true
 * be.sameType(1, '1') // false
 */
Types.sameType = (value, other) =>{
    return Helpers.objectToString(value) === Helpers.objectToString(other);
};

Types.sameType.multiple = false;

/**
 * Check if is empty
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name empty
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.empty('') // true
 * be.empty(' ') // false
 * be.empty({}) // true
 * be.empty([]) // true
 */
Types.empty = (value) => {
    if (Types.null(value) || Types.undefined(value)) return true;
    if (Types.number(value) || Types.function(value) || Types.boolean(value)) return false;

    if (Types.object(value) || Types.array(value)) {
        if (value.length > 0)    return false;
        if (value.length === 0)  return true;

        for (let key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) return false;
        }
    }

    return !(Types.string(value) && value.length > 0);
};

/**
 * Check if a falsy value
 * https://developer.mozilla.org/it/docs/Glossary/Falsy
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name falsy
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.falsy(false) // true
 * be.falsy(null) // true
 * be.falsy() // true
 * be.falsy(0) // true
 * be.falsy(true) // false
 */
Types.falsy = (value) => {
    return !value;
};

/**
 * Check if a truthy value
 * https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name truthy
 * @param value {Mixed}
 * @returns {boolean}
 * @example
 * be.truthy('hello') // true
 * be.truthy({}) // true
 * be.truthy([]) // true
 * be.truthy(2) // true
 * be.truthy(false) // false
 * be.truthy(null) // false
 * be.truthy(undefined) // false
 */
Types.truthy = (value) => {
    return !Types.falsy(value);
};

/**
 * Check if is an error object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name error
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.error(new Error('my error')) // true
 * be.error({}) // false
 */
Types.error = (value) => {
    return Types.classOf(value, 'error');
};

/**
 * Check if is an arguments
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name argument
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.argument(arguments) // true
 * be.argument({}) // false
 */
Types.argument = (value) => {
    return Types.classOf(value, 'arguments') || (Types.object(value) && 'callee' in value);
};

/**
 * Check if is a primitive object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name primitive
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.3.1
 * @example
 * be.primitive(20) // true
 * be.primitive(new Number(20)) // false
 */
Types.primitive = (value) => {
    return value !== Object(value);
};

/**
 * Check if is a primitive object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name promise
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.3.1
 * @example
 * var p = new Promise((resolve, reject) => {resolve()});
 * be.promise(p) // true
 */
Types.promise = (value) => {
    return Types.classOf(value, 'promise');
};

/**
 * Check if is a buffer
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name buffer
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.3.1
 * @example
 * var b = new Buffer('hello');
 * be.buffer(b) // true
 */
Types.buffer = (value) => {
    return Buffer && value instanceof Buffer;
};

/**
 * Check if is iterable
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name iterable
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.3.1
 * @example
 * be.iterable([1, 2, 3]) // true
 * be.iterable('hello') // true
 * be.iterable({a: 1}) // false
 */
Types.iterable = (value) => {
    return Types.function(value[Symbol.iterator]);
};

/**
 * Check if is symbol
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name symbol
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.4.0
 * @example
 * be.symbol(Symbol('hello')) // true
 * be.symbol({a: 1}) // false
 */
Types.symbol = (value) => {
    return !Types.undefined(Symbol) && Types.classOf(value, 'symbol');
};

/**
 * Check if is defined
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name defined
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.4.0
 * @example
 * var param = 'hello';
 * be.defined(param) // true
 * var param2;
 * be.defined(param2) // false
 */
Types.defined = (value) => {
    return !Types.undefined(value);
};

/**
 * Check if is Set object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name set
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.set(new Set()) // true
 */
Types.set = (value) => {
    return Types.classOf(value, 'set');
};

/**
 * Check if is WeakSet object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name weakSet
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.weakSet(new WeakSet()) // true
 */
Types.weakSet = (value) => {
    return Types.classOf(value, 'weakset');
};

/**
 * Check if is Map object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name map
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.map(new Map()) // true
 */
Types.map = (value) => {
    return Types.classOf(value, 'map');
};

/**
 * Check if is WeakMap object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name weakMap
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.weakMap(new WeakMap()) // true
 */
Types.weakMap = (value) => {
    return Types.classOf(value, 'weakmap');
};

/**
 * Check if is Map Iterator object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name mapIterator
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.mapIterator(new Map().values()) // true
 */
Types.mapIterator = (value) => {
    return Types.classOf(value, 'map iterator');
};

/**
 * Check if is Set Iterator object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name setIterator
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.setIterator(new Set().values()) // true
 */
Types.setIterator = (value) => {
    return Types.classOf(value, 'set iterator');
};

/**
 * Check if is Int8Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name int8Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.int8Array(new Int8Array()) // true
 */
Types.int8Array = (value) => {
    return Types.classOf(value, 'int8array');
};

/**
 * Check if is Uint8Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name uint8Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.uint8Array(new Uint8Array()) // true
 */
Types.uint8Array = (value) => {
    return Types.classOf(value, 'uint8array');
};

/**
 * Check if is Uint8ClampedArray object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name uint8ClampedArray
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.uint8ClampedArray(new Uint8ClampedArray()) // true
 */
Types.uint8ClampedArray = (value) => {
    return Types.classOf(value, 'uint8clampedarray');
};

/**
 * Check if is Int16Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name int16Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.int16Array(new Int16Array()) // true
 */
Types.int16Array = (value) => {
    return Types.classOf(value, 'int16array');
};

/**
 * Check if is Uint16Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name uint16Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.uint16Array(new Uint16Array()) // true
 */
Types.uint16Array = (value) => {
    return Types.classOf(value, 'uint16array');
};

/**
 * Check if is Int32Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name int32Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.int32Array(new Int32Array()) // true
 */
Types.int32Array = (value) => {
    return Types.classOf(value, 'int32array');
};

/**
 * Check if is Uint32Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name uint32Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.uint32Array(new Uint32Array()) // true
 */
Types.uint32Array = (value) => {
    return Types.classOf(value, 'uint32array');
};

/**
 * Check if is Float32Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name float32Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.float32Array(new Float32Array()) // true
 */
Types.float32Array = (value) => {
    return Types.classOf(value, 'float32array');
};

/**
 * Check if is Float64Array object
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name float64Array
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.5.0
 * @example
 * be.float64Array(new Float64Array()) // true
 */
Types.float64Array = (value) => {
    return Types.classOf(value, 'float64array');
};

/**
 * Check if is async Function
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name asyncFunction
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.6.3
 * @example
 * be.asyncFunction(async function test(){}) // true
 */
Types.asyncFunction = (value) => {
    return Types.classOf(value, 'asyncfunction');
};

/**
 * Check if is GeneratorFunction
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name generatorFunction
 * @param value {Mixed} value
 * @returns {boolean}
 * @since 1.10.0
 * @example
 * be.generatorFunction(function* test(){}) // true
 */
Types.generatorFunction = (value) => {
    return Types.classOf(value, 'generatorfunction');
};

Types = Interface.create(Types);

module.exports = Types;