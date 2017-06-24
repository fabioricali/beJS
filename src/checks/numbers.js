/**
 * @module be
 * @description Numbers checks.
 */

const Types = require('./types');
const Interface = require('../interface');

let Numbers = {};

/**
 * Check if a number is integer
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Number} number
 * @returns {Boolean}
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
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Number} number
 * @returns {Boolean}
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
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Number} number
 * @returns {Boolean}
 * @example
 * be.nan('s') // true
 */
Numbers.nan = (value) => {
    return isNaN(value);
};

/**
 * Check if is a even number
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Number} number
 * @returns {Boolean}
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
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Number} number
 * @returns {Boolean}
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
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Number} number
 * @returns {Boolean}
 * @example
 * be.positive(2) // true
 * be.positive(-3) // false
 */
Numbers.positive = (value) => {
    return Types.number(value) && value > 0;
};

/**
 * Check if is a negative number
 *
 * * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {Number} number
 * @returns {Boolean}
 * @example
 * be.negative(-2) // true
 * be.negative(2) // false
 */
Numbers.negative = (value) => {
    return Types.number(value) && value < 0;
};

/**
 * Check if number is infinity positive
 * @param value {number}
 * @returns {boolean}
 */
Numbers.infinityPositive = (value) => {
    return value === Number.POSITIVE_INFINITY;
};

/**
 * Check if number is infinity positive
 * @param value {number}
 * @returns {boolean}
 */
Numbers.infinityNegative = (value) => {
    return value === Number.NEGATIVE_INFINITY;
};

/**
 * Check if number is infinity
 * @param value {number}
 * @returns {boolean}
 */
Numbers.infinity = (value) => {
    return Numbers.infinityPositive(value) || Numbers.infinityNegative(value);
};

/**
 * Check if number is between min and max
 * @param num {number}
 * @param min {number}
 * @param max {number}
 * @returns {boolean}
 */
Numbers.between = (num, min, max) => {
    return Types.all.number(num, min, max) && num >= min && num <= max;
};

Numbers.between.multiple = false;

/**
 * Checks if number is greater then an other
 * @param value {number}
 * @param num {number}
 * @returns {boolean}
 */
Numbers.greater = (value, num) => {
    return Types.all.number(value, num) && value > num;
};

Numbers.greater.multiple = false;

/**
 * Checks if number is lesser then an other
 * @param value {number}
 * @param num {number}
 * @returns {boolean}
 */
Numbers.lesser = (value, num) => {
    return Types.all.number(value, num) && value < num;
};

Numbers.lesser.multiple = false;

/**
 * Checks if is a number as string or number type
 * @param value {*}
 * @returns {boolean}
 */
Numbers.numeric = (value) => {
    return (Types.number(value) || Types.string(value)) && !isNaN(value - parseFloat(value));
};

Numbers = Interface.create(Numbers);

module.exports = Numbers;