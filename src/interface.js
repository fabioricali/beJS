/**
 * Created by fabioricali on 20/06/2017.
 */
let Helpers = require('./helpers');
let Interface = {};

/**
 * Check if is array
 * @param object
 * @returns {boolean}
 */
Interface._isArray = (object) => {
    return Helpers.objectToString(object).toLowerCase() === '[object array]'
};

/**
 * Create interface each and some
 * @param obj
 * @returns {*}
 */
Interface.create = (obj) => {
    obj.each = {};
    obj.some = {};
    for(let i in obj){
        if(obj.hasOwnProperty(i) && typeof obj[i] === 'function' && typeof obj[i].multiple === 'undefined'){
            obj.each[i] = (...params) => {
                    let args = params;
                    if(Interface._isArray(args[0]))
                        args = args[0];
                    for(let a in args) {
                        if (args.hasOwnProperty(a) && !obj[i].call(this, args[a]))
                            return false;
                    }
                    return true;
                };

            obj.some[i] = (...params) => {
                    let args = params;
                    if(Interface._isArray(args[0]))
                        args = args[0];
                    for(let a in args) {
                        if (args.hasOwnProperty(a) && obj[i].call(this, args[a]))
                            return true;
                    }
                    return false;
                };
        }
    }

    return obj;
};

module.exports = Interface;