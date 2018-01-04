/**
 * @fileOverview
 * beJS has the following interfaces:
 *
 * - `all`, all checks must be satisfied
 * - `any`, also just one check can be satisfied
 * - `not`, return "logical not" of called method
 *
 * `all`, `any` can accept array or arguments
 *
 * You can access the methods directly from "be.boolean" or from the class eg "be.Types.boolean".
 * Also the classes supports `all`, `any`, `not`
 * @namespace be
 * @example
 * // call a method
 * be.boolean(true);
 *
 * // call interface "not"
 * be.not.boolean(1);
 *
 * // call interface "all" and passing arguments
 * be.all.boolean(true, false, true);
 *
 * // call interface "all" and passing array
 * be.all.boolean([true, false, true]);
 *
 * // call interface "any" and passing arguments
 * be.any.boolean(true, false, 1);
 *
 **/

const Helpers = require('./helpers');
const Interface = require('./interface');
const version = '[AIV]{version}[/AIV]';

/**
 * be class
 * @type {Object}
 * @ignore
 * @private
 */
let be = {};

/**
 * Helpers class
 * @type {Object}
 * @private
 * @ignore
 */
be._helpers = Helpers;

/**
 * Collection of checks
 * @type {Object}
 * @ignore
 * @private
 */
let Checks = {
    Strings: require('./assertions/strings'),
    Types: require('./assertions/types'),
    Numbers: require('./assertions/numbers'),
    Envs: require('./assertions/envs'),
    Objects: require('./assertions/objects'),
    Mixed: require('./assertions/mixed'),
    Arrays: require('./assertions/arrays'),
    Dates: require('./assertions/dates'),
    Urls: require('./assertions/urls'),
    Hashes: require('./assertions/hashes'),
    CreditCards: require('./assertions/creditCards'),
    PostalCodes: require('./assertions/postalCodes'),
    DOM: require('./assertions/dom')
};

/**
 * Get version of framework
 * @function
 * @name be#getVersion
 * @memberOf be
 * @returns {string}
 */
be.getVersion = () => {
    if (Checks.Envs.commonjsEnv())
        return require('../package.json').version;
    else
        return version;
};

be.getVersion._ofBe = true;

/**
 * Set new/overwrite method
 * @function
 * @name be#setAssert
 * @memberOf be
 * @param name {string} assertion name
 * @param func {function} function
 * @since 1.4.1
 * @example
 * be.setAssert('myAssert', (a, b) => {
 *      return a === b;
 * });
 * be.myAssert(true, true) // true
 */
be.setAssert = (name, func) => {
    be[name] = func;
};

be.setAssert._ofBe = true;

/**
 * Add all methods to "be"
 */
for (let c in Checks) {
    if (Checks.hasOwnProperty(c)) {
        for (let f in Checks[c]) {
            if (Checks[c].hasOwnProperty(f) && Checks.Types.function(Checks[c][f])) {
                be[f] = (...params) => {
                    return Checks[c][f].apply(null, params);
                };
            }
        }
    }
}

/**
 * @ignore
 * @type {be}
 */
be = Interface.create(be);

/**
 * After add checks class
 */
for (let m in Checks) {
    if (Checks.hasOwnProperty(m)) {
        be[m] = Checks[m];
    }
}

module.exports = be;