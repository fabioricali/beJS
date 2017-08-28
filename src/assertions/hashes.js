/**
 * @fileOverview Hashes checks.
 * @module Hashes
 */

const Interface = require('../interface');
let Hashes = {};

/**
 * Check if is a valid MD5 hash string
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
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
 * **Interfaces**: `all`, `any`, `not`, `err`
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

/**
 * Check if is a valid SHA256 hash string
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name sha256
 * @param value {string} hash string
 * @returns {boolean}
 * @example
 * be.256('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069') // true
 * be.not.256('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069') // false
 */
Hashes.sha256 = (value) => {
    return /^[a-f0-9]{64}$/i.test(value);
};

/**
 * Check if is a valid SHA512 hash string
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name sha512
 * @param value {string} hash string
 * @returns {boolean}
 * @example
 * be.sha512('aeae379a6e857728e44164267fdb7a0e27b205d757cc19899586c89dbb221930f1813d02ff93a661859bc17065eac4d6edf3c38a034e6283a84754d52917e5b0') // true
 * be.not.sha512('aeae379a6e857728e44164267fdb7a0e27b205d757cc19899586c89dbb221930f1813d02ff93a661859bc17065eac4d6edf3c38a034e6283a84754d52917e5b0') // false
 */
Hashes.sha512 = (value) => {
    return /^[a-f0-9]{128}$/i.test(value);
};

Hashes = Interface.create(Hashes);

module.exports = Hashes;
