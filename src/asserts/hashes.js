/**
 * @fileOverview Hashes checks.
 * @module Hashes
 */

const Interface = require('../interface');
let Hashes = {};

/**
 * Check if is a valid MD5 hash string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name md5
 * @param value {string} hash string
 * @returns {boolean}
 * @example
 * be.md5('00236a2ae558018ed13b5222ef1bd977') // true
 * be.not.md5('00236a2ae558018ed13b5222ef1bd977') // false
 */
Hashes.md5 = (value) => {
    return /^[a-f0-9]{32}$/i.test(value);
};

/**
 * Check if is a valid SHA1 hash string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name sha1
 * @param value {string} hash string
 * @returns {boolean}
 * @example
 * be.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // true
 * be.not.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // false
 */
Hashes.sha1 = (value) => {
    return /^[a-f0-9]{40}$/i.test(value);
};

Hashes = Interface.create(Hashes);

module.exports = Hashes;
