// [AIV]  beJS Build version: 1.0.13  
 var be =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module interface
 */

var Helpers = __webpack_require__(2);
var Interface = {};

/**
 * Check if is array
 * @param object {Object} object
 * @returns {boolean}
 */
Interface._isArray = function (object) {
    return Helpers.objectToString(object) === '[object Array]';
};

/**
 * Create interface all and any
 * @param obj {Object} object
 * @returns {Object}
 */
Interface.create = function (obj) {
    obj.all = {};
    obj.any = {};
    obj.not = {};

    var _loop = function _loop(i) {
        if (obj.hasOwnProperty(i) && typeof obj[i] === 'function') {
            obj.not[i] = function () {
                for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                    params[_key] = arguments[_key];
                }

                return !obj[i].apply(undefined, params);
            };

            if (typeof obj[i].multiple === 'undefined') {
                obj.all[i] = function () {
                    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        params[_key2] = arguments[_key2];
                    }

                    var args = params;
                    if (Interface._isArray(args[0])) args = args[0];
                    for (var a in args) {
                        if (args.hasOwnProperty(a) && !obj[i].call(undefined, args[a])) return false;
                    }
                    return true;
                };

                obj.any[i] = function () {
                    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        params[_key3] = arguments[_key3];
                    }

                    var args = params;
                    if (Interface._isArray(args[0])) args = args[0];
                    for (var a in args) {
                        if (args.hasOwnProperty(a) && obj[i].call(undefined, args[a])) return true;
                    }
                    return false;
                };
            }
        }
    };

    for (var i in obj) {
        _loop(i);
    }

    return obj;
};

module.exports = Interface;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Types checks.
 */

var Helpers = __webpack_require__(2);
var Interface = __webpack_require__(0);
var Types = {};

/**
 * Check [object ?] class
 *
 * **Interfaces**: `not`
 *
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
Types.classOf = function (object, className) {
    return Helpers.objectToString(object).toLowerCase() === '[object ' + className + ']'.toLowerCase();
};

Types.classOf.multiple = false;

/**
 * Check if is valid boolean
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.boolean(false) // true
 * be.boolean('true') // false
 */
Types.boolean = function (value) {
    return Types.classOf(value, 'boolean');
};

/**
 * Check if is false boolean type
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.booleanFalse(false) // true
 * be.booleanFalse(true) // false
 */
Types.booleanFalse = function (value) {
    return Types.boolean(value) && value === false;
};

/**
 * Check if is true boolean type
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.booleanTrue(true) // true
 * be.booleanTrue(false) // false
 */
Types.booleanTrue = function (value) {
    return Types.boolean(value) && value === true;
};

/**
 * Check if is valid number
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.number(1) // true
 * be.number(false) // false
 */
Types.number = function (value) {
    return Types.classOf(value, 'number') && !isNaN(value);
};

/**
 * Check if is valid string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.string('hello') // true
 * be.string(false) // false
 */
Types.string = function (value) {
    return Types.classOf(value, 'string');
};

/**
 * Check if is undefined value
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.undefined(undefined) // true
 * be.undefined(null) // false
 */
Types.undefined = function (value) {
    return Types.classOf(value, 'undefined');
};

/**
 * Check if is null
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @alias null
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.null(null) // true
 * be.null(undefined) // false
 */
Types['null'] = function (value) {
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
Types.object = function (value) {
    return Types.classOf(value, 'object') && !Types.array(value);
};

/**
 * Check if is an array
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.array([1, 2, 3]) // true
 * be.array({a: 1, b: 2}) // false
 */
Types.array = function (value) {
    return Types.classOf(value, 'array');
};

/**
 * Check if is a JSON string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} json string
 * @returns {boolean}
 * @example
 * be.json('{"a": 1, "b": 2}') // true
 * be.json({a: 1, b: 2}) // false
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
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} date object
 * @returns {boolean}
 * @example
 * be.date(new Date()) // true
 * be.date('2017-12-25') // false
 */
Types.date = function (value) {
    return Types.classOf(value, 'date');
};

/**
 * Check if is a function
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @alias function
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.function(function(){return 1 + 2}) // true
 * be.function(new Date()) // false
 */
Types['function'] = function (value) {
    return Types.classOf(value, 'function');
};

/**
 * Check if is a valid RegExp
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.regexp(/hello/) // true
 * be.regexp('hello') // false
 * be.regexp(new RegExp(/hello/)) // true
 */
Types.regexp = function (value) {
    return Types.classOf(value, 'regexp');
};

/**
 * Check if both arguments are same type
 *
 * **Interfaces**: `not`
 *
 * @param value {Mixed} first
 * @param other {Mixed} second
 * @returns {boolean}
 * @example
 * be.sameType(1, 1) // true
 * be.sameType(1, '1') // false
 */
Types.sameType = function (value, other) {
    return Helpers.objectToString(value) === Helpers.objectToString(other);
};

Types.sameType.multiple = false;

/**
 * Check if is empty
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.empty('') // true
 * be.empty(' ') // false
 * be.empty({}) // true
 * be.empty([]) // true
 */
Types.empty = function (value) {
    if (Types.null(value) || Types.undefined(value)) return true;
    if (Types.number(value) || Types.function(value) || Types.boolean(value)) return false;

    if (Types.object(value) || Types.array(value)) {
        if (value.length > 0) return false;
        if (value.length === 0) return true;

        for (var key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) return false;
        }
    }

    return !(Types.string(value) && value.length > 0);
};

/**
 * Check if a falsy value
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @link https://developer.mozilla.org/it/docs/Glossary/Falsy
 * @param value {Mixed} value
 * @returns {boolean}
 * @example
 * be.falsy(false) // true
 * be.falsy(null) // true
 * be.falsy() // true
 * be.falsy(0) // true
 * be.falsy(true) // false
 */
Types.falsy = function (value) {
    return !value;
};

/**
 * Check if a truthy value
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Truthy
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
Types.truthy = function (value) {
    return !Types.falsy(value);
};

Types = Interface.create(Types);

module.exports = Types;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module helpers
 */

/**
 * Helpers class
 */
var Helpers = {};

/**
 * Get user agent
 * @returns {*}
 */
Helpers.getUserAgent = function () {
    if (arguments.length) return arguments.length <= 0 ? undefined : arguments[0];else {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') throw new Error('test allowed only in browser environment');
        return navigator.userAgent;
    }
};

/**
 * Convert object to string
 * @param object {*}
 * @returns {*}
 */
Helpers.objectToString = function (object) {
    return Object.prototype.toString.call(object);
};

/**
 * Distance between the two given strings
 * @link https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
 * @param a {string}
 * @param b {string}
 * @returns {*}
 */
Helpers.getEditDistance = function (a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    var matrix = [];

    // increment along the first column of each row
    var i = void 0;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j = void 0;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                Math.min(matrix[i][j - 1] + 1, // insertion
                matrix[i - 1][j] + 1)); // deletion
            }
        }
    }

    return matrix[b.length][a.length];
};

module.exports = Helpers;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Numbers checks.
 */

var Types = __webpack_require__(1);
var Interface = __webpack_require__(0);

var Numbers = {};

/**
 * Check if a number is integer
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.int(2) // true
 * be.int(1.5) // false
 * be.all.int(1, 4, 5) // true
 */
Numbers.int = function (value) {
  return Types.number(value) && isFinite(value) && Math.floor(value) === value;
};

/**
 * Check if is float number
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.float(1.5) // true
 * be.float(1) // false
 * be.all.float(1.5, 4.2, 5) // false
 */
Numbers.float = function (value) {
  return Types.number(value) && !Numbers.int(value);
};

/**
 * Check if is NaN
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.nan('s') // true
 */
Numbers.nan = function (value) {
  return isNaN(value);
};

/**
 * Check if is a even number
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.even(2) // true
 * be.even(3) // false
 */
Numbers.even = function (value) {
  return Types.number(value) && value % 2 === 0;
};

/**
 * Check if is an odd number
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.odd(3) // true
 * be.odd(4) // false
 */
Numbers.odd = function (value) {
  return Types.number(value) && !Numbers.even(value);
};

/**
 * Check if is a positive number
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.positive(2) // true
 * be.positive(-3) // false
 */
Numbers.positive = function (value) {
  return Types.number(value) && value > 0;
};

/**
 * Check if is a negative number
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.negative(-2) // true
 * be.negative(2) // false
 */
Numbers.negative = function (value) {
  return Types.number(value) && value < 0;
};

/**
 * Check if number is infinity
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.infinity(1.7976931348623157E+10308) // true
 */
Numbers.infinity = function (value) {
  return Numbers.infinityPositive(value) || Numbers.infinityNegative(value);
};

/**
 * Check if number is infinity positive
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.infinityPositive(1.7976931348623157E+10308) // true
 * be.infinityPositive(-1.7976931348623157E+10308) // false
 */
Numbers.infinityPositive = function (value) {
  return value === Number.POSITIVE_INFINITY;
};

/**
 * Check if number is infinity positive
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.infinityNegative(-1.7976931348623157E+10308) // true
 * be.infinityNegative(1.7976931348623157E+10308) // false
 */
Numbers.infinityNegative = function (value) {
  return value === Number.NEGATIVE_INFINITY;
};

/**
 * Check if number is between min and max
 *
 * * **Interfaces**: `not`
 *
 * @param num {number} number
 * @param min {number} number min
 * @param max {number} number max
 * @returns {boolean}
 * @example
 * be.between(4, 1, 10) // true
 */
Numbers.between = function (num, min, max) {
  return Types.all.number(num, min, max) && num >= min && num <= max;
};

Numbers.between.multiple = false;

/**
 * Checks if number is greater then an other
 *
 * * **Interfaces**: `not`
 *
 * @param value {number} value to check
 * @param num {number} number target
 * @returns {boolean}
 * @example
 * be.greater(10, 5) // true
 * be.greater(2, 8) // false
 */
Numbers.greater = function (value, num) {
  return Types.all.number(value, num) && value > num;
};

Numbers.greater.multiple = false;

/**
 * Checks if number is lesser then an other
 *
 * * **Interfaces**: `not`
 *
 * @param value {number} value to check
 * @param num {number} number target
 * @returns {boolean}
 * @example
 * be.lesser(10, 5) // false
 * be.lesser(2, 8) // true
 */
Numbers.lesser = function (value, num) {
  return Types.all.number(value, num) && value < num;
};

Numbers.lesser.multiple = false;

/**
 * Checks if is a number as string or number type
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.numeric(100) // true
 * be.numeric('100') // true
 */
Numbers.numeric = function (value) {
  return (Types.number(value) || Types.string(value)) && !isNaN(value - parseFloat(value));
};

Numbers = Interface.create(Numbers);

module.exports = Numbers;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Fabio on 17/06/2017.
 */
module.exports = __webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description
 * beJS has the following interfaces:
 *
 * - `all`, all checks must be satisfied
 * - `any`, also just one check can be satisfied
 * - `not`, return "logical not" of called method
 *
 * `all`, `any` can accept array or arguments
 *
 * You can access the methods directly from "be.boolean" or from the class eg "be.Types.boolean".
 * Also the classes supports `all`, `any`, `not`
 *
 * Checks
 *
 * - [Arrays](arrays.md)
 * - [Dates](dates.md)
 * - [Envs](envs.md)
 * - [Hashes](hashes.md)
 * - [Mixed](mixed.md)
 * - [Numbers](numbers.md)
 * - [Objects](objects.md)
 * - [Strings](strings.md)
 * - [Types](types.md)
 * - [Urls](urls.md)
 * - [CreditCards](creditCards.md)
 * - [PostalCodes](postalCodes.md)
 * - [DOM](dom.md)
 *
 * @example
 * // call a method
 * be.boolean(true);
 *
 * // call interface "not"
 * be.not.boolean(1);
 *
 * // call interface "all" and passing arguments
 * be.all.boolean(true, false, true);
 *
 * // call interface "all" and passing array
 * be.all.boolean([true, false, true]);
 *
 * // call interface "any" and passing arguments
 * be.any.boolean(true, false, 1);
 *
 * @author Fabio Ricali <fabio@rica.li>
 * @copyright rica.li 2017
 * @license MIT
 **/

var Helpers = __webpack_require__(2);
var Interface = __webpack_require__(0);
var version = '1.0.13';

/**
 * be class
 * @type {Object}
 * @ignore
 * @private
 */
var be = {};

/**
 * Helpers class
 * @type {Object}
 * @private
 * @ignore
 */
be._helpers = Helpers;

/**
 * Get version of framework
 * @memberOf be
 * @returns {string}
 */
be.getVersion = function () {
    return version;
};

/**
 * Collection of checks
 * @type {Object}
 * @ignore
 * @private
 */
var Checks = {
    Strings: __webpack_require__(6),
    Types: __webpack_require__(1),
    Numbers: __webpack_require__(3),
    Envs: __webpack_require__(7),
    Objects: __webpack_require__(10),
    Mixed: __webpack_require__(11),
    Arrays: __webpack_require__(12),
    Dates: __webpack_require__(13),
    Urls: __webpack_require__(14),
    Hashes: __webpack_require__(15),
    CreditCards: __webpack_require__(16),
    PostalCodes: __webpack_require__(17),
    DOM: __webpack_require__(18)
};

/**
 * Create interfaces
 */
(function () {
    var _loop = function _loop(c) {
        if (Checks.hasOwnProperty(c)) {
            var _loop2 = function _loop2(f) {
                if (Checks[c].hasOwnProperty(f) && Checks.Types.function(Checks[c][f])) {
                    be[f] = function () {
                        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                            params[_key] = arguments[_key];
                        }

                        return Checks[c][f].apply(null, params);
                    };
                }
            };

            for (var f in Checks[c]) {
                _loop2(f);
            }
        }
    };

    /**
     * Add all methods to "be"
     */
    for (var c in Checks) {
        _loop(c);
    }

    /**
     * @ignore
     * @type {be}
     */
    be = Interface.create(be);

    /**
     * After add checks class
     */
    for (var m in Checks) {
        if (Checks.hasOwnProperty(m)) {
            be[m] = Checks[m];
        }
    }

    module.exports = be;
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Strings checks.
 */

var Helpers = __webpack_require__(2);
var Interface = __webpack_require__(0);
var Types = __webpack_require__(1);

var Strings = {};

/**
 * Check if string is in camelCase format
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.camelCase('testTest') // true
 * be.camelCase('test_test') // false
 */
Strings.camelCase = function (value) {
    return Types.string(value) && !Strings.upperCase(value) && Strings.alphanumeric(value) && Strings.spaces(value.replace(/([A-Z])/g, ' $1'));
};

/**
 * Check if string is in snake_case format
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.snakeCase('test_test') // true
 * be.snakeCase('testTest') // false
 */
Strings.snakeCase = function (value) {
    return Strings.lowerCase(value) && /^[0-9a-z]*_[0-9a-z]/ig.test(value);
};

/**
 * Check if string is in kebab-case format
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.kebabCase('test-test') // true
 * be.kebabCase('testTest') // false
 */
Strings.kebabCase = function (value) {
    return Strings.lowerCase(value) && /^[0-9a-z]*-[0-9a-z]/ig.test(value);
};

/**
 * Check similarity between two string
 *
 * **Interfaces**: `not`
 *
 * @param string1 {string} string
 * @param string2 {string} string target
 * @param threshold {int|float} 0 to 1
 * @returns {boolean}
 * @example
 * be.similarity('hello', 'hello', 1) // true
 * be.similarity('hello', 'hello world', 1) // false
 */
Strings.similarity = function (string1, string2, threshold) {
    //if(!Types.string(string1) || !Types.string(string2)) return false;
    if (!Types.all.string(string1, string2)) return false;

    if (!Types.number(threshold) || threshold < 0 || threshold > 1) threshold = 1;

    var longer = string1;
    var shorter = string2;

    if (string1.length < string2.length) {
        longer = string2;
        shorter = string1;
    }
    var longerLength = longer.length;

    return (longerLength - Helpers.getEditDistance(longer, shorter)) / parseFloat(longerLength) >= threshold;
};

Strings.similarity.multiple = false;

/**
 * Check if string contains a value
 *
 * **Interfaces**: `not`
 *
 * @param string {string} string
 * @param value {string} string target
 * @returns {boolean}
 * @example
 * be.contains('hello', 'hello world') // true
 */
Strings.contains = function (string, value) {
    if (!Types.string(string)) return false;
    return string.indexOf(value) > -1;
};

Strings.contains.multiple = false;

/**
 * Check if string is lower case
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.lowerCase('hello') // true
 */
Strings.lowerCase = function (value) {
    if (!Types.string(value)) return false;
    return value.toLowerCase() === value;
};

/**
 * Check if string is upper case
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.upperCase('HELLO') // true
 */
Strings.upperCase = function (value) {
    if (!Types.string(value)) return false;
    return value.toUpperCase() === value;
};

/**
 * Check if is a word
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.word('hello') // true
 * be.word('hello world') // false
 */
Strings.word = function (value) {
    if (!Types.string(value)) return false;
    var trimmed = value.trim();
    return trimmed.length > 0 && trimmed.split(' ').length === 1;
};

/**
 * Check if string is capitalized
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.capitalized('Hello World') // true
 * be.capitalized('hello world') // false
 */
Strings.capitalized = function (value) {
    if (!Types.string(value)) return false;
    var trimmed = value.trim();
    if (trimmed.length === 0) return false;
    var words = value.trim().split(' ');
    for (var i in words) {
        var char = words[i].charAt(0);
        if (char !== char.toUpperCase()) return false;
    }
    return true;
};

/**
 * Check if string is empty
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.emptyString('') // true
 */
Strings.emptyString = function (value) {
    return Types.string(value) && value.length === 0;
};

/**
 * Check if is alphanumeric string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.alphanumeric('hello123456') // true
 */
Strings.alphanumeric = function (value) {
    return (/^[a-z0-9]+$/i.test(value) && Types.string(value)
    );
};

/**
 * Check if string start with a value
 *
 * **Interfaces**: `not`
 *
 * @param value {string} start string
 * @param string {string} string target
 * @param insensitive {boolean} case sensitive
 * @returns {boolean}
 * @example
 * be.startWith('hello', 'hello world') // true
 * be.startWith('hello', 'HELLO world', true) // false
 */
Strings.startWith = function (value, string, insensitive) {
    if (Types.falsy(insensitive)) insensitive = false;
    var regex = new RegExp('^' + value, Types.booleanTrue(insensitive) ? 'i' : '');
    return regex.test(string);
};

Strings.startWith.multiple = false;

/**
 * Check if a string is palindrome
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.palindrome('A but tuba') // true
 */
Strings.palindrome = function (value) {
    if (!Types.string(value)) return false;
    value = value.replace(/\s/g, '').toLowerCase();
    return value === value.split('').reverse().join('');
};

/**
 * Check if value is a single char
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.char('a') // true
 * be.char('ab') // false
 */
Strings.char = function (value) {
    return Types.string(value) && value.length === 1;
};

/**
 * Check if string is a space
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.space(' ') // true
 * be.space('a') // false
 */
Strings.space = function (value) {
    return Strings.char(value) && /\s/.test(value);
};

/**
 * Check if exists spaces in string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.spaces('hello world') // true
 * be.spaces('helloworld') // false
 */
Strings.spaces = function (value) {
    return (/\s/.test(value)
    );
};

Strings = Interface.create(Strings);

module.exports = Strings;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * @module be
 * @description Environments checks.
 */

var Helpers = __webpack_require__(2);
var Interface = __webpack_require__(0);
var Envs = {};

/**
 * Check if server environment
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.commonjsEnv() // true
 */
Envs.commonjsEnv = function () {
  return typeof process !== 'undefined';
};

Envs.commonjsEnv.multiple = false;

/**
 * Check if browser environment
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.browserEnv() // true
 */
Envs.browserEnv = function () {
  return typeof window !== 'undefined';
};

Envs.browserEnv.multiple = false;

/**
 * Check if AMD environment
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.amdEnv() // true
 */
Envs.amdEnv = function () {
  return "function" === 'function' && __webpack_require__(9);
};

Envs.amdEnv.multiple = false;

/**
 * Check if is iOS device
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.ios() // true
 */
Envs.ios = function () {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/iphone|ipad|ipod/i.test(userAgent)
  );
};

Envs.ios.multiple = false;

/**
 * Check if is iPhone device
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.iphone() // true
 */
Envs.iphone = function () {
  for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/iphone/i.test(userAgent)
  );
};

Envs.iphone.multiple = false;

/**
 * Check if is iPad device
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.ipad() // true
 */
Envs.ipad = function () {
  for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/ipad/i.test(userAgent)
  );
};

Envs.ipad.multiple = false;

/**
 * Check if is iPod device
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.ipod() // true
 */
Envs.ipod = function () {
  for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    params[_key4] = arguments[_key4];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/ipod/i.test(userAgent)
  );
};

Envs.ipod.multiple = false;

/**
 * Check if is Android device
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.android() // true
 */
Envs.android = function () {
  for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    params[_key5] = arguments[_key5];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/Android/i.test(userAgent)
  );
};

Envs.android.multiple = false;

/**
 * Check if exists navigator object
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.navigator() // true
 */
Envs.navigator = function () {
  return Envs.browserEnv() && typeof window.navigator !== 'undefined';
};

Envs.navigator.multiple = false;

/**
 * Firefox detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.firefox() // true
 */
Envs.firefox = function () {
  for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    params[_key6] = arguments[_key6];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/Firefox/i.test(userAgent)
  );
};

Envs.firefox.multiple = false;

/**
 * Chrome detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.chrome() // true
 */
Envs.chrome = function () {
  for (var _len7 = arguments.length, params = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    params[_key7] = arguments[_key7];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/Chrome/i.test(userAgent)
  );
};

Envs.chrome.multiple = false;

/**
 * Safari detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.safari() // true
 */
Envs.safari = function () {
  for (var _len8 = arguments.length, params = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    params[_key8] = arguments[_key8];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/Safari/i.test(userAgent.replace('Chrome', '')) && !/Chrome/i.test(userAgent.replace('Safari', ''))
  );
};

Envs.safari.multiple = false;

/**
 * Explorer detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.ie() // true
 */
Envs.ie = function () {
  for (var _len9 = arguments.length, params = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    params[_key9] = arguments[_key9];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/MSIE|Trident/i.test(userAgent)
  );
};

Envs.ie.multiple = false;

/**
 * Mac detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.mac() // true
 */
Envs.mac = function () {
  for (var _len10 = arguments.length, params = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    params[_key10] = arguments[_key10];
  }

  var userAgent = Helpers.getUserAgent.apply(undefined, params);
  return (/mac/i.test(userAgent)
  );
};

Envs.mac.multiple = false;

/**
 * Check if is on line
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 * @example
 * be.onLine() // true
 */
Envs.onLine = function () {
  return Envs.navigator() && navigator.onLine;
};

Envs.onLine.multiple = false;

Envs = Interface.create(Envs);

module.exports = Envs;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Objects checks.
 */

var Types = __webpack_require__(1);
var Interface = __webpack_require__(0);
var Objects = {};

/**
 * Check if is a property of an object
 *
 * **Interfaces**: `not`
 *
 * @param value {Mixed} property that you want to search
 * @param object {Object} object target
 * @returns {boolean}
 * @example
 * be.propertyOf('firstName', {firstName: 'Teddy', lastName: 'Red'}) // true
 */
Objects.propertyOf = function (value, object) {
  if (!Types.object(object)) return false;
  return object.hasOwnProperty(value);
};

Objects.propertyOf.multiple = false;

/**
 * Count properties of an object
 *
 * **Interfaces**: `not`
 *
 * @param object {Object} object
 * @param value {Integer} count
 * @returns {boolean}
 * @example
 * be.propertyCount({a: 1, b: 2, c: 3}, 3) // true
 */
Objects.propertyCount = function (object, value) {
  if (!Types.object(object) || !Types.number(value)) return false;
  var n = 0;
  for (var i in object) {
    if (object.hasOwnProperty(i) && ++n > value) return false;
  }
  return n === value;
};

Objects.propertyCount.multiple = false;

Objects = Interface.create(Objects);

module.exports = Objects;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Various checks.
 */

var Types = __webpack_require__(1);
var Interface = __webpack_require__(0);
var Mixed = {};

/**
 * Check if is valid email
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @link https://emailregex.com/
 * @param value {string} email
 * @returns {boolean}
 * @example
 * be.email('fabio@rica.li') // true
 * be.not.email('fabiorica.li') // true
 */
Mixed.email = function (value) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    );
};

/**
 * Check if is a hexadecimal
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} hex string
 * @returns {boolean}
 * @example
 * be.hex('fff') // true
 */
Mixed.hex = function (value) {
    return (/^(?:0x)?[a-f0-9]+$/.test(value)
    );
};

/**
 * Check if is a hexadecimal color
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} hex color string
 * @returns {boolean}
 * @example
 * be.hexColor('#ff0000') // true
 */
Mixed.hexColor = function (value) {
    try {
        value = value.replace('#', '');
        return Mixed.hex(value) && (value.length === 3 || value.length === 6);
    } catch (e) {
        return false;
    }
};

/**
 * Check if is a valid IPv4
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} ip string
 * @returns {boolean}
 * @example
 * be.ipv4('127.0.0.1') // true
 */
Mixed.ipv4 = function (value) {
    return (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)
    );
};

/**
 * Check if is a valid IPv6
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} ip string
 * @returns {boolean}
 * @example
 * be.ipv6('FF01:0:0:0:0:0:0:1') // true
 */
Mixed.ipv6 = function (value) {
    return (/^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(value)
    );
};

/**
 * Check if is a valid ip string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} ip string
 * @returns {boolean}
 * @example
 * be.ipv('127.0.0.1') // true
 */
Mixed.ip = function (value) {
    return Mixed.ipv4(value) || Mixed.ipv6(value);
};

/**
 * Check if is base64 encoded string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} base64 string
 * @returns {boolean}
 * @example
 * be.base64('aGVsbG8=') // true
 */
Mixed.base64 = function (value) {
    return (/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value)
    );
};

/**
 * Check if is a valid semver string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.semVer('1.0.0') // true
 */
Mixed.semVer = function (value) {
    return (/^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(value)
    );
};

/**
 * Checks if equal
 *
 * **Interfaces**: `not`
 *
 * @param value {Number|String|Boolean|RegExp} first
 * @param other {Number|String|Boolean|RegExp} second
 * @returns {boolean}
 * @example
 * be.equal('hello', 'hello') // true
 * be.equal('hello', 'hellow') // false
 * be.equal(true, 'true') // false
 */
Mixed.equal = function (value, other) {
    if (Types.all.number(value, other)) return value === other;else if (Types.all.string(value, other) || Types.all.regexp(value, other)) return value + '' === '' + other;else if (Types.all.boolean(value, other)) return value === other;else return false;
};

Mixed.equal.multiple = false;

/**
 * Check if is an IT fiscal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} code string
 * @returns {boolean}
 * @example
 * be.fiscalCodeIT('OLEFBA97C64F158X') // true
 */
Mixed.fiscalCodeIT = function (value) {
    return (/^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/.test(value)
    );
};

/**
 * Check if is a valid MAC address
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} MAC string
 * @returns {boolean}
 * @example
 * be.macAddress('3D:F2:C9:A6:B3:4F') // true
 */
Mixed.macAddress = function (value) {
    return (/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value)
    );
};

Mixed = Interface.create(Mixed);

module.exports = Mixed;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Arrays checks.
 */

var Types = __webpack_require__(1);
var Interface = __webpack_require__(0);
var Arrays = {};

/**
 * Check if an element is in the array
 *
 * **Interfaces**: `not`
 *
 * @param value {Mixed} element to search
 * @param array {array} array where search
 * @returns {boolean}
 * @example
 * be.inArray('hello', ['hello', 'world']) //true
 * be.inArray('ciao', ['hello', 'world']) //false
 * be.inArray(1, true) //false
 * be.not.inArray(1, true) //true
 * be.Arrays.inArray(1, [1, 2, 3]) //true
 */
Arrays.inArray = function (value, array) {
  if (!Types.array(array)) return false;
  for (var i in array) {
    if (array.hasOwnProperty(i) && array[i] === value) return true;
  }
  return false;
};

Arrays.inArray.multiple = false;

Arrays = Interface.create(Arrays);

module.exports = Arrays;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Dates checks.
 */

var Types = __webpack_require__(1);
var Numbers = __webpack_require__(3);
var Interface = __webpack_require__(0);
var Dates = {};

var _days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

var _months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

/**
 * Check if is date string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string date
 * @returns {boolean}
 * @example
 * be.dateString('2017-06-20') // true
 * be.dateString('hello') // false
 */
Dates.dateString = function (value) {
    var date = Date.parse(value);
    return !isNaN(date);
};

/**
 * Check if is time string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string time
 * @returns {boolean}
 * @example
 * be.timeString('22:06:50') // true
 */
Dates.timeString = function (value) {
    return (/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(value)
    );
};

/**
 * Check if date is today
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * be.today(new Date()) // true
 */
Dates.today = function (date) {
    var now = new Date();
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is tomorrow
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * let now = new Date();
 * let tomorrow = now.setDate(now.getDate() + 1);
 * be.tomorrow(tomorrow) // true
 */
Dates.tomorrow = function (date) {
    var now = new Date();
    now.setDate(now.getDate() + 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is yesterday
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * let now = new Date();
 * let yesterday = now.setDate(now.getDate() - 1);
 * be.yesterday(yesterday) // true
 */
Dates.yesterday = function (date) {
    var now = new Date();
    now.setDate(now.getDate() - 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is past
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * be.past(new Date('1980-02-05')) // true
 */
Dates.past = function (date) {
    var now = new Date().getTime();
    return Types.date(date) && now > date.getTime();
};

/**
 * Check if date is future
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * be.future(new Date('2117-06-24')) // true
 * be.all.future(new Date('2117-06-24'), new Date('2007-06-25')) // false
 * be.any.future(new Date('2117-06-24'), new Date('2007-06-25')) // true
 * be.not.future(new Date('2117-06-24')) // false
 */
Dates.future = function (date) {
    return Types.date(date) && !Dates.past(date);
};

/**
 * Check if date is day specified
 *
 * **Interfaces**: `not`
 *
 * @param date {Date} date object
 * @param day {string} day can be 'sunday','monday','tuesday','wednesday','thursday','friday','saturday'
 * @returns {boolean}
 * @example
 * be.day(new Date('2017-06-24'), 'saturday') // true
 * be.day(new Date('2017-06-25'), 'monday') // false
 * be.not.day(new Date('2017-06-25'), 'monday') // true
 */
Dates.day = function (date, day) {
    return Types.date(date) && Types.string(day) && _days[date.getDay()] === day.toLowerCase();
};

Dates.day.multiple = false;

/**
 * Check if date is month specified
 *
 * **Interfaces**: `not`
 *
 * @param date {Date} date object
 * @param month {string} month can be 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
 * @returns {boolean}
 * @example
 * be.month(new Date('2017-06-24'), 'june') // true
 * be.month(new Date('2017-02-25'), 'march') // false
 * be.not.month(new Date('2017-02-25'), 'march') // true
 */
Dates.month = function (date, month) {
    return Types.date(date) && Types.string(month) && _months[date.getMonth()] === month.toLowerCase();
};

Dates.month.multiple = false;

/**
 * Check if date is the year specified
 *
 * **Interfaces**: `not`
 *
 * @param date {Date} date object
 * @param year {number} year
 * @returns {boolean}
 * @example
 * be.year(new Date('2017-06-06'), 2017) // true
 * be.not.year(new Date('2017-06-06'), 2017) // false
 */
Dates.year = function (date, year) {
    return Types.date(date) && Types.number(year) && date.getFullYear() === year;
};

Dates.year.multiple = false;

/**
 * Check if is leap year
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param year {number} year
 * @returns {boolean}
 * @example
 * be.leapYear(2016) // true
 * be.leapYear(2017) // false
 * be.not.leapYear(2017) // true
 * be.all.leapYear(2012, 2016) // true
 * be.any.leapYear(2015, 2016) // true
 */
Dates.leapYear = function (year) {
    return Types.number(year) && year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};

/**
 * Check if date is weekend
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * be.weekend(new Date('2017-06-24')) // true
 * be.not.weekend(new Date('2017-06-24')) // false
 * be.all.weekend(new Date('2017-06-24'), new Date('2017-06-25')) // true
 * be.any.weekend(new Date('2017-06-24'), new Date('2017-06-26')) // true
 */
Dates.weekend = function (date) {
    return Dates.day(date, 'saturday') || Dates.day(date, 'sunday');
};

/**
 * Check if date is weekday
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * be.weekday(new Date('2017-06-26')) // true
 * be.not.weekday(new Date('2017-06-24')) // true
 * be.all.weekday(new Date('2017-06-26'), new Date('2017-06-27')) // true
 * be.any.weekday(new Date('2017-06-24'), new Date('2017-06-26')) // true
 */
Dates.weekday = function (date) {
    return Types.date(date) && !Dates.weekend(date);
};

/**
 * Check if date is between start date and end date
 *
 * **Interfaces**: `not`
 *
 * @param date {Date} date object
 * @param startDate {Date} start date object
 * @param endDate {Date} end date object
 * @returns {boolean}
 * @example
 * be.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // true
 * be.not.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // false
 */
Dates.dateBetween = function (date, startDate, endDate) {
    return Types.all.date(date, startDate, endDate) && Numbers.between(date.getTime(), startDate.getTime(), endDate.getTime());
};

Dates.dateBetween.multiple = false;

/**
 * Check if date is DST
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {boolean}
 * @example
 * be.dayLightSavingTime(new Date('2017-06-24')) // true
 * be.dayLightSavingTime(new Date('2017-10-30')) // false
 */
Dates.dayLightSavingTime = function (date) {
    if (!Types.date(date)) return false;
    var jan = new Date(date.getFullYear(), 0, 1);
    var jul = new Date(date.getFullYear(), 6, 1);
    var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    return date.getTimezoneOffset() < stdTimezoneOffset;
};

Dates = Interface.create(Dates);

module.exports = Dates;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Urls checks.
 */

var Interface = __webpack_require__(0);
var Urls = {};

/**
 * Check if is valid string url
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @link https://gist.github.com/dperini/729294
 * @param value {string} url
 * @returns {boolean}
 * @example
 * be.url('http://www.google.com') // true;
 * be.not.url('http://www.google.com') // false;
 * be.any.url('http://www.google.com', 'http://') // true;
 * be.all.url('http://www.google.com', 'http://') // false;
 */
Urls.url = function (value) {
  return (/^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)
  );
};

/**
 * Check if is a HTTP url
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} url
 * @returns {boolean}
 * @example
 * be.httpUrl('http://www.google.com') // true;
 * be.not.httpUrl('http://www.google.com') // false;
 * be.any.httpUrl('http://www.google.com', 'http://') // true;
 * be.all.httpUrl('http://www.google.com', 'http://') // false;
*/
Urls.httpUrl = function (value) {
  return Urls.url(value) && /^http:/i.test(value);
};

/**
 * Check if is a HTTPS url
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} url
 * @returns {boolean}
 * @example
 * be.httpsUrl('https://www.google.com') // true;
 * be.not.httpsUrl('https://www.google.com') // false;
 * be.any.httpsUrl('https://www.google.com', 'http://') // true;
 * be.all.httpsUrl('https://www.google.com', 'http://') // false;
 */
Urls.httpsUrl = function (value) {
  return Urls.url(value) && /^https:/i.test(value);
};

/**
 * Check if url is encoded
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} url encoded
 * @returns {boolean}
 * @example
 * be.urlEncoded('http://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8') // true
 */
Urls.urlEncoded = function (value) {
  return (/%[0-9a-f]{2}/i.test(value)
  );
};

/**
 * Check if is a FTP urls
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} url
 * @returns {boolean}
 * @example
 * be.ftpUrl('ftp://ftp.google.com') // true;
 * be.not.ftpUrl('ftp://ftp.google.com') // false;
 * be.any.ftpUrl('ftp://ftp.google.com', 'http://') // true;
 * be.all.ftpUrl('ftp://ftp.google.com', 'http://') // false;
 */
Urls.ftpUrl = function (value) {
  return Urls.url(value) && /^ftp:/i.test(value);
};

/**
 * Check if is a FTPS urls
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} url
 * @returns {boolean}
 * @example
 * be.ftpsUrl('ftps://ftp.google.com') // true;
 * be.not.ftpsUrl('ftps://ftp.google.com') // false;
 * be.any.ftpsUrl('ftps://ftp.google.com', 'http://') // true;
 * be.all.ftpsUrl('ftps://ftp.google.com', 'http://') // false;
 */
Urls.ftpsUrl = function (value) {
  return Urls.url(value) && /^ftps:/i.test(value);
};

Urls = Interface.create(Urls);

module.exports = Urls;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Hashes checks.
 */

var Interface = __webpack_require__(0);
var Hashes = {};

/**
 * Check if is a valid MD5 hash string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} hash string
 * @returns {boolean}
 * @example
 * be.md5('00236a2ae558018ed13b5222ef1bd977') // true
 * be.not.md5('00236a2ae558018ed13b5222ef1bd977') // false
 */
Hashes.md5 = function (value) {
  return (/^[a-f0-9]{32}$/i.test(value)
  );
};

/**
 * Check if is a valid SHA1 hash string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} hash string
 * @returns {boolean}
 * @example
 * be.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // true
 * be.not.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // false
 */
Hashes.sha1 = function (value) {
  return (/^[a-f0-9]{40}$/i.test(value)
  );
};

Hashes = Interface.create(Hashes);

module.exports = Hashes;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Credit cards checks.
 */

var Interface = __webpack_require__(0);
var CreditCard = {};

/**
 * Check if is a valid credit card
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.creditCard('4242424242424242') // true
 */
CreditCard.creditCard = function (value) {
  return (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(value)
  );
};

/**
 * Check if is a valid American Express credit card
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.amex('378282246310005') // true
 */
CreditCard.amex = function (value) {
  return (/^3[47][0-9]{13}$/.test(value)
  );
};

/**
 * Check if is a valid Diner’s Club credit card
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.dinersClub('30569309025904') // true
 */
CreditCard.dinersClub = function (value) {
  return (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(value)
  );
};

/**
 * Check if is a valid Discover credit card
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.discover('6011111111111117') // true
 */
CreditCard.discover = function (value) {
  return (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value)
  );
};

/**
 * Check if is a valid Mastercard credit card
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.mastercard('5555555555554444') // true
 */
CreditCard.mastercard = function (value) {
  return (/^5[1-5][0-9]{14}$/.test(value)
  );
};

/**
 * Check if is a valid Visa credit card
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.visa('4242424242424242') // true
 */
CreditCard.visa = function (value) {
  return (/^4[0-9]{12}(?:[0-9]{3})?$/.test(value)
  );
};

CreditCard = Interface.create(CreditCard);

module.exports = CreditCard;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @module be
 * @description Postal codes checks.
 */

var Interface = __webpack_require__(0);
var PostalCodes = {};

/**
 * Check if is an ES postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeES('03160') // true
 */
PostalCodes.postalCodeES = function (value) {
  return (/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(value)
  );
};

/**
 * Check if is an UK postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeUk('BN519EJ') // true
 */
PostalCodes.postalCodeUK = function (value) {
  return (/^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/.test(value)
  );
};

/**
 * Check if is an US postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeUS('36784') // true
 */
PostalCodes.postalCodeUS = function (value) {
  return (/(\d{5}([\-]\d{4})?)$/.test(value)
  );
};

/**
 * Check if is an IT postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeIT('98023') // true
 */
PostalCodes.postalCodeIT = function (value) {
  return (/^\d{5}$/.test(value)
  );
};

/**
 * Check if is an DE postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeDE('10117') // true
 */
PostalCodes.postalCodeDE = function (value) {
  return (/\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b/.test(value)
  );
};

/**
 * Check if is an NL postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeNL('1001 AD') // true
 */
PostalCodes.postalCodeNL = function (value) {
  return (/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value)
  );
};

PostalCodes = Interface.create(PostalCodes);

module.exports = PostalCodes;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @module be
 * @description DOM checks.
 */

var Interface = __webpack_require__(0);
var Types = __webpack_require__(1);
var DOM = {};

/**
 * Check if is a valid DOM element
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param element {object} element object
 * @returns {boolean}
 * @example
 * be.domElement(document.getElementById('test')) // true
 */
DOM.domElement = function (element) {
  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? element instanceof HTMLElement : element && (typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element.nodeType === 1 && typeof element.nodeName === 'string';
};

/**
 * Check if element is a specific tag
 *
 * **Interfaces**: `not`
 *
 * @param element {object} element object
 * @param tag {string} tag name
 * @returns {boolean}
 * @example
 * be.domElementTag(document.getElementsByTagName('body')[0], 'ul') // false
 */
DOM.domElementTag = function (element, tag) {
  return DOM.domElement(element) && Types.string(tag) && element.tagName.toLowerCase() === tag.toLowerCase();
};

DOM.domElementTag.multiple = false;

DOM = Interface.create(DOM);

module.exports = DOM;

/***/ })
/******/ ]); 