/**
 * @module be
 * @description Credit cards checks.
 */

const Interface = require('../interface');
let CreditCard = {};

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
CreditCard.creditCard = (value) => {
    return /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(value);
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
CreditCard.amex = (value) => {
    return /^3[47][0-9]{13}$/.test(value);
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
CreditCard.dinersClub = (value) => {
    return /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(value);
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
CreditCard.discover = (value) => {
    return /^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value);
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
CreditCard.mastercard = (value) => {
    return /^5[1-5][0-9]{14}$/.test(value);
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
CreditCard.visa = (value) => {
    return /^4[0-9]{12}(?:[0-9]{3})?$/.test(value);
};

CreditCard = Interface.create(CreditCard);

module.exports = CreditCard;
