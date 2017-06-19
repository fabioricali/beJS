/**
 * Created by Fabio on 18/06/2017.
 */
var Types = require('./types');

var Mixed = {};

/**
 * Check if is valid email
 * @link https://emailregex.com/
 * @param value {string}
 * @returns {boolean}
 */
Mixed.email = function (value) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
};

/**
 * Check if is a hexadecimal
 * @param value {string}
 * @returns {boolean}
 */
Mixed.hex = function (value) {
    return /^(?:0x)?[a-f0-9]+$/.test(value);
};

/**
 * Check if is a hexadecimal color
 * @param value {string}
 * @returns {boolean}
 */
Mixed.hexColor = function (value) {
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
 * @param value {string}
 * @returns {boolean}
 */
Mixed.ipv4 = function (value) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
};

/**
 * Check if is a valid IPv6
 * @param value
 * @returns {boolean}
 */
Mixed.ipv6 = function (value) {
    return /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(value);
};

/**
 * Check if is a valid ip string
 * @param value {string}
 * @returns {*|boolean}
 */
Mixed.ip = function (value) {
    return Mixed.ipv4(value) || Mixed.ipv6(value);
};

/**
 * Check if is base64 encoded string
 * @param value {string}
 * @returns {boolean}
 */
Mixed.base64 = function (value) {
    return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value);
};

/**
 * Check if is a valid semver string
 * @param value {string}
 * @returns {boolean}
 */
Mixed.semVer = function (value) {
    return /^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(value);
};

/**
 * Checks if equal
 * @param value {number|string|boolean|regexp}
 * @param other {number|string|boolean|regexp}
 * @returns {boolean}
 */
Mixed.equal = function (value, other) {
    if(Types.number(value) && Types.number(other))
        return  value === other;
    else if((Types.string(value) && Types.string(other)) || (Types.regexp(value) && Types.regexp(other)))
        return value + '' === '' + other;
    else if(Types.boolean(value) && Types.boolean(other))
        return value === other;
    else
        return false;
};

Mixed.equal.multiple = false;

module.exports = Mixed;