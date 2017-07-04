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
 * **Interfaces**: `not`
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
 * Check if is valid boolean
 *
 * **Interfaces**: `all`, `any`, `not`
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
 * Check if is false boolean type
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name booleanFalse
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.booleanFalse(false) // true
 * be.booleanFalse(true) // false
 */
Types.booleanFalse = (value) => {
    return Types.boolean(value) && value === false;
};

/**
 * Check if is true boolean type
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name booleanTrue
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.booleanTrue(true) // true
 * be.booleanTrue(false) // false
 */
Types.booleanTrue = (value) => {
    return Types.boolean(value) && value === true;
};

/**
 * Check if is valid number
 *
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * Check if is a object
 *
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Check if is date object
 *
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
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
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name primitive
 * @param value {Mixed} value
 * @returns {boolean}
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
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name promise
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * var p = new Promise((resolve, reject) => {resolve()});
 * be.promise(p) // true
 */
Types.promise = (value) => {
    return Types.classOf(value, 'promise');
};

Types = Interface.create(Types);

module.exports = Types;
