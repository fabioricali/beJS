/**
 * Created by Fabio on 17/06/2017.
 */

var Helpers = require('./helpers');
var Interface = require('./interface');

/**
 * Collection of checks
 * @type {[*]}
 */
/**
 *
 * @type {{Strings: *}}
 */
var Checks = {
    Strings     :   require('./checks/strings'),
    Types       :   require('./checks/types'),
    Numbers     :   require('./checks/numbers'),
    Envs        :   require('./checks/envs'),
    Objects     :   require('./checks/objects'),
    Mixed       :   require('./checks/mixed'),
    Arrays      :   require('./checks/arrays'),
    Dates       :   require('./checks/dates'),
    Urls        :   require('./checks/urls'),
    Hashes      :   require('./checks/hashes')
};

/**
 * be class
 * @type {*}
 */
var be = {};

be.version = '0.0.0';
be.each = {};
be.some = {};

/**
 * Helpers class
 * @type {{}}
 * @private
 */
be._helpers = Helpers;

/**
 * Create interfaces
 */
(function () {

    /**
     * Add all methods to "be"
     */
    for(var c in Checks){
        if(Checks.hasOwnProperty(c)){
            for(var f in Checks[c]){
                if(Checks[c].hasOwnProperty(f) && Checks.Types.function(Checks[c][f])) {
                    be[f] = (function (b, k) {
                        return function () {
                            return Checks[b][k].apply(this, arguments);
                        }
                    })(c, f)
                }
            }
        }
    }

    /**
     * Create each and some
     */
    be = Interface.create(be);

    /**
     * After add checks class
     */
    for(var m in Checks) {
        if (Checks.hasOwnProperty(m)) {
            be[m] = Checks[m];
        }
    }

    if (be.amdEnv())
        define(function () { return be; });
    else if (be.commonjsEnv())
        module.exports = be;
    else
        window.be = be;

})();