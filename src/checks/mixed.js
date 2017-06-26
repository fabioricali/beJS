/**
 * @module be
 * @description Various checks.
 */

const Types = require('./types');
const Interface = require('../interface');
let Mixed = {};

/**
 * Check if is valid email
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @link https://emailregex.com/
 * @param value {string} email
 * @returns {boolean}
 * @example
 * be.email('fabio@rica.li') // true
 * be.not.email('fabiorica.li') // true
 */
Mixed.email = (value) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
};

/**
 * Check if is a hexadecimal
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} hex string
 * @returns {boolean}
 * @example
 * be.hex('fff') // true
 */
Mixed.hex = (value) => {
    return /^(?:0x)?[a-f0-9]+$/.test(value);
};

/**
 * Check if is a hexadecimal color
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} hex color string
 * @returns {boolean}
 * @example
 * be.hexColor('#ff0000') // true
 */
Mixed.hexColor = (value) => {
    try {
        value = value.replace('#', '');
        return Mixed.hex(value) &&
            (value.length === 3 || value.length === 6);
    } catch (e) {
        return false;
    }
};

/**
 * Check if is a valid IPv4
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} ip string
 * @returns {boolean}
 * @example
 * be.ipv4('127.0.0.1') // true
 */
Mixed.ipv4 = (value) => {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
};

/**
 * Check if is a valid IPv6
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} ip string
 * @returns {boolean}
 * @example
 * be.ipv6('FF01:0:0:0:0:0:0:1') // true
 */
Mixed.ipv6 = (value) => {
    return /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(value);
};

/**
 * Check if is a valid ip string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} ip string
 * @returns {boolean}
 * @example
 * be.ipv('127.0.0.1') // true
 */
Mixed.ip = (value) => {
    return Mixed.ipv4(value) || Mixed.ipv6(value);
};

/**
 * Check if is base64 encoded string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} base64 string
 * @returns {boolean}
 * @example
 * be.base64('aGVsbG8=') // true
 */
Mixed.base64 = (value) => {
    return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value);
};

/**
 * Check if is a valid semver string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.semVer('1.0.0') // true
 */
Mixed.semVer = (value) => {
    return /^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(value);
};

/**
 * Checks if equal
 *
 * **Interfaces**: `not`
 *
 * @param value {Number|String|Boolean|RegExp} first
 * @param other {Number|String|Boolean|RegExp} second
 * @returns {boolean}
 * @example
 * be.equal('hello', 'hello') // true
 * be.equal('hello', 'hellow') // false
 * be.equal(true, 'true') // false
 */
Mixed.equal = (value, other) => {
    if(Types.all.number(value, other))
        return  value === other;
    else if((Types.all.string(value, other)) || (Types.all.regexp(value, other)))
        return value + '' === '' + other;
    else if(Types.all.boolean(value, other))
        return value === other;
    else
        return false;
};

Mixed.equal.multiple = false;

/**
 * Check if is an It postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeES('03160') // true
 */
Mixed.postalCodeES = (value) => {
    return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(value);
};

/**
 * Check if is an Uk postal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} version string
 * @returns {boolean}
 * @example
 * be.postalCodeUk('BN519EJ') // true
 */
Mixed.postalCodeUK = (value) => {
    return /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/.test(value);
};

/**
 * Check if is an IT fiscal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} code string
 * @returns {boolean}
 * @example
 * be.fiscalCodeIT('OLEFBA97C64F158X') // true
 */
Mixed.fiscalCodeIT = (value) => {
    return /^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/.test(value);
};

Mixed = Interface.create(Mixed);

module.exports = Mixed;
