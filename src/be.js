/**
 * @module be
 * @author Fabio Ricali <fabio@rica.li>
 * @copyright rica.li 2017
 * @license MIT
 * @description The framework for checker tools
 **/

const Helpers = require('./helpers');
const Interface = require('./interface');

/**
 * be class
 * @type {{not, any, all, version, Strings, Types, Numbers, Envs, Objects, Mixed, Arrays, Dates, Urls, Hashes}}
 * @example
 * be.boolean(true);
 * be.not.boolean(1);
 * be.all.boolean(true, false, true);
 * be.all.boolean([true, false, true]);
 * be.any.boolean(true, false, 1);
 */
let be = {};

be.version = '0.0.0';

/**
 * Helpers class
 * @type {{}}
 * @private
 * @ignore
 */
be._helpers = Helpers;

/**
 * Collection of checks
 * @type {{Strings, Types, Numbers, Envs, Objects, Mixed, Arrays, Dates, Urls, Hashes}}
 * @private
 */
let Checks = {
    Strings: require('./checks/strings'),
    Types: require('./checks/types'),
    Numbers: require('./checks/numbers'),
    Envs: require('./checks/envs'),
    Objects: require('./checks/objects'),
    Mixed: require('./checks/mixed'),
    Arrays: require('./checks/arrays'),
    Dates: require('./checks/dates'),
    Urls: require('./checks/urls'),
    Hashes: require('./checks/hashes')
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