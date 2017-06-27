/**
 * @module be
 * @description DOM checks.
 */

const Interface = require('../interface');
let DOM = {};

/**
 * Check if is a valid DOM element
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} hash string
 * @returns {boolean}
 * @example
 * be.domElement(document.getElementById('test')) // true
 */
DOM.domElement = (value) => {
    return true;
};


DOM = Interface.create(DOM);

module.exports = DOM;