/**
 * @module be
 * @description Numbers checks.
 */

const Types = require('./types');
const Interface = require('../interface');

let Numbers = {};

/**
 * Check if a number is integer
 * @param value {number}
 * @returns {*|boolean}
 */
Numbers.int = (value) => {
    return Types.number(value) &&
        isFinite(value) &&
        Math.floor(value) === value;
};

/**
 * Check if is float number
 * @param value {number}
 * @returns {*|boolean}
 */
Numbers.float = (value) => {
    return Types.number(value) && !Numbers.int(value);
};

/**
 * Check if is NaN
 * @param value {*}
 * @returns {*|boolean}
 */
Numbers.nan = (value) => {
    return isNaN(value);
};

/**
 * Check if is a even number
 * @param value {number}
 * @returns {*|boolean}
 */
Numbers.even = (value) => {
    return Types.number(value) && value % 2 === 0;
};

/**
 * Check if is an odd number
 * @param value {number}
 * @returns {*|boolean}
 */
Numbers.odd = (value) => {
    return Types.number(value) && !Numbers.even(value);
};

/**
 * Check if is a positive number
 * @param value {number}
 * @returns {*|boolean}
 */
Numbers.positive = (value) => {
    return Types.number(value) && value > 0;
};

/**
 * Check if is a negative number
 * @param value {number}
 * @returns {*|boolean}
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