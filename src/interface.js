/**
 * @module interface
 */

let Helpers = require('./helpers');
let Interface = {};

/**
 * Check if is array
 * @param object {Object} object
 * @returns {boolean}
 */
Interface._isArray = (object) => {
    return Helpers.objectToString(object) === '[object Array]'
};

/**
 * Create interface all and any
 * @param obj {Object} object
 * @returns {Object}
 */
Interface.create = (obj) => {
    obj.all = {};
    obj.any = {};
    obj.not = {};

    for (let i in obj) {
        if (obj.hasOwnProperty(i) && typeof obj[i] === 'function') {
            obj.not[i] = (...params) => {
                return !obj[i].apply(this, params);
            };

            if (typeof obj[i].multiple === 'undefined') {
                obj.all[i] = (...params) => {
                    let args = params;
                    if (Interface._isArray(args[0]))
                        args = args[0];

                    if(!args.length) return false;

                    for (let a in args) {
                        if (args.hasOwnProperty(a) && !obj[i].call(this, args[a]))
                            return false;
                    }
                    return true;
                };

                obj.any[i] = (...params) => {
                    let args = params;
                    if (Interface._isArray(args[0]))
                        args = args[0];

                    for (let a in args) {
                        if (args.hasOwnProperty(a) && obj[i].call(this, args[a]))
                            return true;
                    }
                    return false;
                };
            }
        }
    }

    return obj;
};

module.exports = Interface;