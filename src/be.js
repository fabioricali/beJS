/**
 * Created by Fabio on 17/06/2017.
 */

var Helpers = require('./helpers');

var Checks = [
    require('./checks/strings'),
    require('./checks/types'),
    require('./checks/numbers'),
    require('./checks/envs'),
    require('./checks/objects'),
    require('./checks/mixed'),
    require('./checks/arrays'),
    require('./checks/dates'),
    require('./checks/urls'),
    require('./checks/hashes')
];

/**
 * be class
 */
var be = {};
be.each = {};
be.some = {};

/**
 * Helper class
 * @type {{}}
 * @private
 */
be._helper = Helpers;

/**
 * Create interfaces
 */
(function () {
    for(var c in Checks){
        if(Checks.hasOwnProperty(c)){
            for(var f in Checks[c]){
                if(Checks[c].hasOwnProperty(f)) {
                    be[f] = (function (k, b) {
                        return function () {
                            var args = arguments;
                            for (var a in args) {
                                if (args.hasOwnProperty(a) && !Checks[b][k].call(this, args[a]))
                                    return false;
                            }
                            return true;
                        }
                    })(f, c)
                }
            }
        }
    }

    for(var i in be){
        if(be.hasOwnProperty(i) && be.function(be[i]) && be.undefined(be[i].multiple)){
            be.each[i] = (function (j) {
                return function () {
                    var args = arguments;
                    if(be.array(args[0]))
                        args = args[0];
                    for(var a in args) {
                        if (args.hasOwnProperty(a) && !be[j].call(this, args[a]))
                            return false;
                    }
                    return true;
                }
            })(i);

            be.some[i] = (function (j) {
                return function () {
                    var args = arguments;
                    if(be.array(args[0]))
                        args = args[0];
                    for(var a in args) {
                        if (args.hasOwnProperty(a) && be[j].call(this, args[a]))
                            return true;
                    }
                    return false;
                }
            })(i);
        }
    }

    //console.log(be);

    if (be.serverEnv())
        module.exports = be;
    else
        window.be = be;

})();