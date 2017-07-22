/**
 * @fileOverview Various checks.
 * @module Mixed
 */
const Helpers = require('../helpers');
const Types = require('./types');
const Interface = require('../interface');
let Mixed = {};

let regExp = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    hex: /^(?:0x)?[a-f0-9]+$/,
    ipv4: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    ipv6: /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    semVer: /^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i,
    fiscalCodeIT: /^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/,
    macAddress: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    uuid1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    uuid3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    uuid4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    uuid5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    isrc: /^([A-Z]{2}-[0-9A-Z]{3}-\d{2}-\d{5}|[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5})$/,
    iswc: /^T-\d{9}-[A-Za-z0-9]$/
};

Mixed = Helpers.createRegExpMethods(Mixed, regExp);

/**
 * Check if is ISRC
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name isrc
 * @param value {string} ISRC code
 * @returns {boolean}
 * @example
 * be.isrc('JMK401400212') // true
 */

/**
 * Check if is UUID
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name uuid
 * @param value {string} UUID code
 * @returns {boolean}
 * @example
 * be.uuid('9e3a0460-d72d-11e4-a631-c8e0eb141dab') // true
 */

/**
 * Check if is UUID ver 1
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name uuid1
 * @param value {string} UUID code
 * @returns {boolean}
 * @example
 * be.uuid1('9e3a0460-d72d-11e4-a631-c8e0eb141dab') // true
 */

/**
 * Check if is UUID ver 3
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name uuid3
 * @param value {string} UUID code
 * @returns {boolean}
 * @example
 * be.uuid3('2c1d43b8-e6d7-376e-af7f-d4bde997cc3f') // true
 */

/**
 * Check if is UUID ver 4
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name uuid4
 * @param value {string} UUID code
 * @returns {boolean}
 * @example
 * be.uuid4('366a77ba-d506-4a03-a730-318b8e6be8c5') // true
 */

/**
 * Check if is UUID ver 5
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name uuid5
 * @param value {string} UUID code
 * @returns {boolean}
 * @example
 * be.uuid5('39888f87-fb62-5988-a425-b2ea63f5b81e') // true
 */

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
    if(Types.all.number(value, other))
        return  value === other && 1 / value === 1 / other;
    else if(Types.all.string(value, other) || Types.all.regexp(value, other))
        return value.toString() === other.toString();
    else if(Types.all.boolean(value, other))
        return value === other;
    else if(Types.all.object(value, other) || Types.all.array(value, other)) {
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
