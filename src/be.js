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
    Strings: require('./asserts/strings'),
    Types: require('./asserts/types'),
    Numbers: require('./asserts/numbers'),
    Envs: require('./asserts/envs'),
    Objects: require('./asserts/objects'),
    Mixed: require('./asserts/mixed'),
    Arrays: require('./asserts/arrays'),
    Dates: require('./asserts/dates'),
    Urls: require('./asserts/urls'),
    Hashes: require('./asserts/hashes'),
    CreditCards: require('./asserts/creditCards'),
    PostalCodes: require('./asserts/postalCodes'),
    DOM: require('./asserts/dom')
};

/**
 * Get version of framework
 * @function
 * @name getVersion
 * @memberOf be
 * @returns {string}
 */
be.getVersion = () => {
    if (Checks.Envs.commonjsEnv())
        return require('../package.json').version;
    else
        return version;
};

/**
 * Create interfaces
 */
(function () {
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

})();
