/**
 * Created by Fabio on 18/06/2017.
 */
const Interface = require('../interface');
let Hashes = {};

/**
 * Check if is a valid MD5 hash string
 * @param value {string}
 * @returns {boolean}
 */
Hashes.md5 = (value) => {
    return /^[a-f0-9]{32}$/.test(value);
};

/**
 * Check if is a valid SHA1 hash string
 * @param value {string}
 * @returns {boolean}
 */
Hashes.sha1 = (value) => {
    return /^[a-f0-9]{40}$/.test(value);
};

Hashes = Interface.create(Hashes);

module.exports = Hashes;