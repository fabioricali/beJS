/**
 * Created by Fabio on 17/06/2017.
 */

const Helpers = require('./helpers');
const Interface = require('./interface');

/**
 * Collection of checks
 * @type {[*]}
 */
/**
 *
 * @type {{Strings: *}}
 */
let Checks = {
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
let be = {};

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
( function() {
    /**
     * Add all methods to "be"
     */
    /*
    for(let c in Checks){
        if(Checks.hasOwnProperty(c)){
            for(let f in Checks[c]){
                if(Checks[c].hasOwnProperty(f) && Checks.Types.function(Checks[c][f])) {
                    be[f] = ( (b, k) => {
                        return () => {
                            return Checks[b][k].apply(this, arguments);
                        }
                    })(c, f)
                }
            }
        }
    }*/
    for(let c in Checks){
        if(Checks.hasOwnProperty(c)){
            for(let f in Checks[c]){
                if(Checks[c].hasOwnProperty(f) && Checks.Types.function(Checks[c][f])) {
                    be[f] = () => {
                        console.log(arguments);
                            return Checks[c][f].apply(this, arguments);
                        }

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
    for(let m in Checks) {
        if (Checks.hasOwnProperty(m)) {
            be[m] = Checks[m];
        }
    }

    if (be.amdEnv())
        define( () => { return be; });
    else if (be.commonjsEnv())
        module.exports = be;
    else
        window.be = be;

})();