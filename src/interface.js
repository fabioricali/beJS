/**
 * Created by fabioricali on 20/06/2017.
 */
var Helpers = require('./helpers');
var Interface = {};

/**
 * Check if is array
 * @param object
 * @returns {boolean}
 * @private
 */
Interface._isArray = function (object) {
    return Helpers.objectToString(object).toLowerCase() === '[object array]'
};

/**
 * Create interface each and some
 * @param obj
 * @returns {*}
 */
Interface.create = function (obj) {
    obj.each = {};
    obj.some = {};
    for(var i in obj){
        if(obj.hasOwnProperty(i) && typeof obj[i] === 'function' && typeof obj[i].multiple === 'undefined'){
            obj.each[i] = (function (j) {
                return function () {
                    var args = arguments;
                    if(Interface._isArray(args[0]))
                        args = args[0];
                    for(var a in args) {
                        if (args.hasOwnProperty(a) && !obj[j].call(this, args[a]))
                            return false;
                    }
                    return true;
                }
            })(i);

            obj.some[i] = (function (j) {
                return function () {
                    var args = arguments;
                    if(Interface._isArray(args[0]))
                        args = args[0];
                    for(var a in args) {
                        if (args.hasOwnProperty(a) && obj[j].call(this, args[a]))
                            return true;
                    }
                    return false;
                }
            })(i);
        }
    }

    return obj;
};

module.exports = Interface;