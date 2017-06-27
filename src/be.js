/**
 * @module be
 * @description
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
 *
 * Checks
 *
 * - [Arrays](arrays.md)
 * - [Dates](dates.md)
 * - [Envs](envs.md)
 * - [Hashes](hashes.md)
 * - [Mixed](mixed.md)
 * - [Numbers](numbers.md)
 * - [Objects](objects.md)
 * - [Strings](strings.md)
 * - [Types](types.md)
 * - [Urls](urls.md)
 * - [CreditCard](creditcard.md)
 *
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
 * @author Fabio Ricali <fabio@rica.li>
 * @copyright rica.li 2017
 * @license MIT
 **/

const Helpers = require('./helpers');
const Interface = require('./interface');

/**
 * be class
 * @type {Object}
 * @ignore
 * @private
 */
let be = {};

/**
 * Version
 * @type {string}
 * @private
 */
be._version = '0.0.0';

/**
 * Helpers class
 * @type {Object}
 * @private
 * @ignore
 */
be._helpers = Helpers;

/**
 * Get version of framework
 * @memberOf be
 * @returns {string}
 */
be.getVersion = () => {
    return be._version;
};

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
    CreditCards: require('./asserts/creditCards')
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
