/**
 * Created by Fabio on 18/06/2017.
 */
var Types = require('./types');

var Numbers = {};

/**
 * Check if a number is integer
 * @param value
 * @returns {*|boolean}
 */
Numbers.int = function (value) {
    return Types.number(value) &&
        isFinite(value) &&
        Math.floor(value) === value;
};

/**
 * Check if is float number
 * @param value
 * @returns {*|boolean}
 */
Numbers.float = function (value) {
    return Types.number(value) &&
        !Numbers.int(value);
};

/**
 * Check if is NaN
 * @param value
 * @returns {*|boolean}
 */
Numbers.nan = function (value) {
    return isNaN(value);
};

/**
 * Check if is a even number
 * @param value
 * @returns {*|boolean}
 */
Numbers.even = function (value) {
    return Types.number(value) &&
        value % 2 === 0;
};

/**
 * Check if is an odd number
 * @param value
 * @returns {*|boolean}
 */
Numbers.odd = function (value) {
    return Types.number(value) &&
        !Numbers.even(value);
};

/**
 * Check if is a positive number
 * @param value
 * @returns {*|boolean}
 */
Numbers.positive = function (value) {
    return Types.number(value) &&
        value > 0;
};

/**
 * Check if is a negative number
 * @param value
 * @returns {*|boolean}
 */
Numbers.negative = function (value) {
    return Types.number(value) &&
        value < 0;
};

/**
 * Check if number is infinity positive
 * @param value
 * @returns {boolean}
 */
Numbers.infinityPositive = function (value) {
    return value === Number.POSITIVE_INFINITY;
};

/**
 * Check if number is infinity positive
 * @param value
 * @returns {boolean}
 */
Numbers.infinityNegative = function (value) {
    return value === Number.NEGATIVE_INFINITY;
};

/**
 * Check if number is infinity
 * @param value
 * @returns {boolean}
 */
Numbers.infinity = function (value) {
    return Numbers.infinityPositive(value) || Numbers.infinityNegative(value);
};

/**
 * Check if number is between min and max
 * @param num
 * @param min
 * @param max
 * @returns {boolean}
 */
Numbers.between = function (num, min, max) {
    return Types.number(num) &&
        Types.number(min) &&
        Types.number(max) &&
        num >= min && num <= max;
};

Numbers.between.multiple = false;

module.exports = Numbers;