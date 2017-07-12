/**
 * @fileOverview Various checks.
 * @module Mixed
 */
const Helpers = require('../helpers');
const Types = require('./types');
const Interface = require('../interface');
let Mixed = {};

/**
 * Check if is valid email
 * https://emailregex.com/
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name email
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
 * @function
 * @name hex
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
 * @function
 * @name hexColor
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
 * @function
 * @name ipv4
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
 * @function
 * @name ipv6
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
 * @function
 * @name ipv
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
 * @function
 * @name base64
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
 * @function
 * @name semVer
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
 * @function
 * @name equal
 * @param value {Number|String|Boolean|RegExp|Array|Object} first
 * @param other {Number|String|Boolean|RegExp|Array|Object} second
 * @returns {boolean}
 * @example
 * be.equal('hello', 'hello') // true
 * be.equal('hello', 'hellow') // false
 * be.equal(true, 'true') // false
 * be.equal([1,2,3], [1,1,1]) // false
 * be.equal({a:1}, {a:1}) // true
 */
Mixed.equal = (value, other) => {
    //console.log('aaa',Types.all.object(value, other));
    //console.log('bbb',Types.all.array(value, other));
    console.log('ccc',Types.all.number(value, other));
    if(Types.all.number(value, other))
        return  value === other && 1 / value === 1 / other;
    else if(Types.all.string(value, other) || Types.all.regexp(value, other))
        return value.toString() === other.toString();
    else if(Types.all.boolean(value, other))
        return value === other;
    else if(Types.all.object(value, other) || Types.all.array(value, other)) {
        console.log('sss',Types.all.array(value, other));
        if (Object.keys(value).length !== Object.keys(other).length)
            return false;
        for (let prop in value) {
            if (value.hasOwnProperty(prop) && other.hasOwnProperty(prop)){
                if (!Mixed.equal(value[prop], other[prop]))
                    return false;
            }else
                return false;
        }
        return true;
    } else return false;
};

Mixed.equal.multiple = false;

/**
 * Check if is an IT fiscal code
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name fiscalCodeIT
 * @param value {string} code string
 * @returns {boolean}
 * @example
 * be.fiscalCodeIT('OLEFBA97C64F158X') // true
 */
Mixed.fiscalCodeIT = (value) => {
    return /^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/.test(value);
};

/**
 * Check if is a valid MAC address
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name macAddress
 * @param value {string} MAC string
 * @returns {boolean}
 * @example
 * be.macAddress('3D:F2:C9:A6:B3:4F') // true
 */
Mixed.macAddress = (value) => {
    return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value);
};

/**
 * Compare two version number
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name compareVersion
 * @param a {string} version a
 * @param operator {string} operator "==", "<", "<=", ">", ">="
 * @param b {string} version b
 * @param major {boolean} consider major only
 * @example
 * be.compareVersion('1.0.2', '==', '1.0.3') // false
 * //Consider major only
 * be.compareVersion('1.0.2', '==', '1.0.3', true) // true
 */
Mixed.compareVersion = (a, operator, b, major) => {
    if(major){
        a = a.split('.')[0];
        b = b.split('.')[0];
    }
    return Helpers.comparators[operator](a, b);
};

Mixed = Interface.create(Mixed);

module.exports = Mixed;
