/**
 * Created by Fabio on 18/06/2017.
 */
var Helpers = require('../helpers');
var Interface = require('../interface');
var Types = {};

/**
 * Check [object ?] class
 * @param object {*}
 * @param className {string}
 * @returns {boolean}
 */
Types.classOf = function (object, className) {
    return Helpers.objectToString(object).toLowerCase() === '[object ' + className + ']'.toLowerCase();
};

Types.classOf.multiple = false;

/**
 * Check if is valid boolean
 * @param value {*}
 * @returns {boolean}
 */
Types.boolean = function (value) {
    return Types.classOf(value, 'boolean');
};

/**
 * Check if is false boolean type
 * @param value {*}
 * @returns {boolean}
 */
Types.booleanFalse = function (value) {
    return Types.boolean(value) && value === false;
};

/**
 * Check if is true boolean type
 * @param value {*}
 * @returns {boolean}
 */
Types.booleanTrue = function (value) {
    return Types.boolean(value) && value === true;
};

/**
 * Check if is valid number
 * @param value {*}
 * @returns {boolean}
 */
Types.number = function (value) {
    return Types.classOf(value, 'number') && !isNaN(value);
};

/**
 * Check if is valid string
 * @param value {*}
 * @returns {boolean}
 */
Types.string = function (value) {
    return Types.classOf(value, 'string');
};

/**
 * Check if is undefined value
 * @param value {*}
 * @returns {boolean}
 */
Types.undefined = function (value) {
    return Types.classOf(value, 'undefined');
};

/**
 * Check if is null
 * @param value {*}
 * @returns {boolean}
 */
Types['null'] = function (value) {
    return Types.classOf(value, 'null');
};

/**
 * Check if is a object
 * @param value {*}
 * @returns {boolean}
 */
Types.object = function (value) {
    return Types.classOf(value, 'object') && !Types.array(value);
};

/**
 * Check if is an array
 * @param value {*}
 * @returns {boolean}
 */
Types.array = function (value) {
    return Types.classOf(value, 'array');
};

/**
 * Check if is a JSON string
 * @param value {*}
 * @returns {boolean}
 */
Types.json = function (value) {
    try {
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Check if is date object
 * @param value {*}
 * @returns {boolean}
 */
Types.date = function (value) {
    return Types.classOf(value, 'date');
};

/**
 * Check if is a function
 * @param value {*}
 * @returns {boolean}
 */
Types['function'] = function (value) {
    return Types.classOf(value, 'function');
};

/**
 * Check if is a valid RegExp
 * @param value {*}
 * @returns {boolean}
 */
Types.regexp = function (value) {
    return Types.classOf(value,'regexp');
};

/**
 * Check if both arguments are same type
 * @param value {*}
 * @param other {*}
 * @returns {boolean}
 */
Types.sameType = function (value, other) {
    return Helpers.objectToString(value) === Helpers.objectToString(other);
};

Types.sameType.multiple = false;

/**
 * Check if is empty
 * @param value {*}
 * @returns {boolean}
 */
Types.empty = function (value) {
    if (Types.null(value) || Types.undefined(value)) return true;
    if (Types.number(value) || Types.function(value) || Types.boolean(value)) return false;

    if (Types.object(value) || Types.array(value)) {
        if (value.length > 0)    return false;
        if (value.length === 0)  return true;

        for (var key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) return false;
        }
    }

    return !(Types.string(value) && value.length > 0);
};

/**
 * Check if a falsy value
 * @link https://developer.mozilla.org/it/docs/Glossary/Falsy
 * @param value {*}
 * @returns {boolean}
 */
Types.falsy = function (value) {
    return !value;
};

/**
 * Check if a truthy value
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * @param value {*}
 * @returns {boolean}
 */
Types.truthy = function (value) {
    return !Types.falsy(value);
};

Types = Interface.create(Types);

module.exports = Types;