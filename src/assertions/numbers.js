/**
 * @fileOverview Numbers checks.
 * @module Numbers
 */

const Types = require('./types');
const Interface = require('../interface');

let Numbers = {};

/**
 * Check if a number is integer
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name int
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.int(2) // true
 * be.int(1.5) // false
 * be.all.int(1, 4, 5) // true
 */
Numbers.int = (value) => {
    return Types.number(value) &&
        isFinite(value) &&
        Math.floor(value) === value;
};

/**
 * Check if is float number
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name float
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.float(1.5) // true
 * be.float(1) // false
 * be.all.float(1.5, 4.2, 5) // false
 */
Numbers.float = (value) => {
    return Types.number(value) && !Numbers.int(value);
};

/**
 * Check if is NaN
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name nan
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.nan('s') // true
 */
Numbers.nan = (value) => {
    return isNaN(value);
};

/**
 * Check if is a even number
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name even
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.even(2) // true
 * be.even(3) // false
 */
Numbers.even = (value) => {
    return Types.number(value) && value % 2 === 0;
};

/**
 * Check if is an odd number
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name odd
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.odd(3) // true
 * be.odd(4) // false
 */
Numbers.odd = (value) => {
    return Types.number(value) && !Numbers.even(value);
};

/**
 * Check if is a positive number
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name positive
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.positive(2) // true
 * be.positive(-3) // false
 */
Numbers.positive = (value) => {
    return Types.number(value) && (value > 0 || Numbers.positiveZero(value));
};

/**
 * Check if is a negative number
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name negative
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.negative(-2) // true
 * be.negative(2) // false
 */
Numbers.negative = (value) => {
    return Types.number(value) && (value < 0 || Numbers.negativeZero(value));
};

/**
 * Check if is negative zero
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name negativeZero
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.negativeZero(-0) // true
 * be.negativeZero(0) // false
 */
Numbers.negativeZero = (value) => {
    return Types.number(value) && value === 0 && 1 / value === Number.NEGATIVE_INFINITY;
};

/**
 * Check if is negative zero
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name positiveZero
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.positiveZero(+0) // true
 * be.positiveZero(0) // true
 */
Numbers.positiveZero = (value) => {
    return Types.number(value) && value === 0 && 1 / value === Number.POSITIVE_INFINITY;
};

/**
 * Check if number is infinity
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name infinity
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.infinity(1.7976931348623157E+10308) // true
 */
Numbers.infinity = (value) => {
    return Numbers.infinityPositive(value) || Numbers.infinityNegative(value);
};

/**
 * Check if number is infinity positive
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name infinityPositive
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.infinityPositive(1.7976931348623157E+10308) // true
 * be.infinityPositive(-1.7976931348623157E+10308) // false
 */
Numbers.infinityPositive = (value) => {
    return value === Number.POSITIVE_INFINITY;
};

/**
 * Check if number is infinity positive
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name infinityNegative
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.infinityNegative(-1.7976931348623157E+10308) // true
 * be.infinityNegative(1.7976931348623157E+10308) // false
 */
Numbers.infinityNegative = (value) => {
    return value === Number.NEGATIVE_INFINITY;
};

/**
 * Check if number is between min and max
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name between
 * @param num {number} number
 * @param min {number} number min
 * @param max {number} number max
 * @returns {boolean}
 * @example
 * be.between(4, 1, 10) // true
 */
Numbers.between = (num, min, max) => {
    return Types.all.number(num, min, max) && num >= min && num <= max;
};

Numbers.between.multiple = false;

/**
 * Checks if number is greater then an other
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name greater
 * @param value {number} value to check
 * @param num {number} number target
 * @returns {boolean}
 * @example
 * be.greater(10, 5) // true
 * be.greater(2, 8) // false
 */
Numbers.greater = (value, num) => {
    return Types.all.number(value, num) && value > num;
};

Numbers.greater.multiple = false;

/**
 * Checks if number is lesser then an other
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name lesser
 * @param value {number} value to check
 * @param num {number} number target
 * @returns {boolean}
 * @example
 * be.lesser(10, 5) // false
 * be.lesser(2, 8) // true
 */
Numbers.lesser = (value, num) => {
    return Types.all.number(value, num) && value < num;
};

Numbers.lesser.multiple = false;

/**
 * Checks if is a number as string or number type
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name numeric
 * @param value {number} number
 * @returns {boolean}
 * @example
 * be.numeric(100) // true
 * be.numeric('100') // true
 */
Numbers.numeric = (value) => {
    return (Types.number(value) || Types.string(value)) && !isNaN(value - parseFloat(value));
};

Numbers = Interface.create(Numbers);

module.exports = Numbers;
