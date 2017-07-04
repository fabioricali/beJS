/**
 * @fileOverview Postal codes checks.
 * @module PostalCodes
 */

const Interface = require('../interface');
let PostalCodes = {};

/**
 * Check if is an ES postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name postalCodeES
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeES('03160') // true
 */
PostalCodes.postalCodeES = (value) => {
    return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(value);
};

/**
 * Check if is an UK postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name postalCodeUK
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeUk('BN519EJ') // true
 */
PostalCodes.postalCodeUK = (value) => {
    return /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/.test(value);
};

/**
 * Check if is an US postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name postalCodeUS
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeUS('36784') // true
 */
PostalCodes.postalCodeUS = (value) => {
    return /(\d{5}([\-]\d{4})?)$/.test(value);
};

/**
 * Check if is an IT postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name postalCodeIT
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeIT('98023') // true
 */
PostalCodes.postalCodeIT = (value) => {
    return /^\d{5}$/.test(value);
};

/**
 * Check if is an DE postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name postalCodeDE
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeDE('10117') // true
 */
PostalCodes.postalCodeDE = (value) => {
    return /\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b/.test(value);
};

/**
 * Check if is an NL postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name postalCodeNL
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeNL('1001 AD') // true
 */
PostalCodes.postalCodeNL = (value) => {
    return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
};



PostalCodes = Interface.create(PostalCodes);

module.exports = PostalCodes;
