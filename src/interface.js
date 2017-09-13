const Helpers = require('./helpers');
const AssertionError = require('./errors');
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
 * Returns formatted arguments
 * @param args {Array}
 * @param pos {number}
 * @returns {string}
 */
Interface._printArgs = (args = [], pos = 0) => {
    let out = ``;
    for(let i=0; i<args.length; i++){
        if(Interface._isArray(args[i])){
            out += Interface._printArgs(args[i], i);
        } else {
            out += `args[${i + pos}]: ${args[i]}\n`;
        }
    }
    return out;
};

/**
 * Create interface all and any
 * @param obj {Object} object
 * @returns {Object}
 */
Interface.create = (obj) => {
    /**
     * @interface all
     * @description
     * All checks must be satisfied, can accept array or arguments
     * @example
     * be.all.true(true, true, false) // false;
     *
     */
    obj.all = {};

    /**
     * @interface any
     * @description
     * Also just one check can be satisfied, can accept array or arguments
     * @example
     * be.any.true(true, true, false) // true;
     *
     */
    obj.any = {};

    /**
     * @interface not
     * @description
     * return "logical not" of called method, accept one argument
     * @example
     * be.not.true(true) // false;
     *
     */
    obj.not = {};

    /**
     * @interface err
     * @description
     * Throw an Error if assertions are not satisfied
     * @param msg {string} optional error message
     * @param callback {function} optional function callback
     * @returns {error|void}
     * @since 1.8.0
     * @example
     * be.err.true(false) // Error;
     * be.err('an error message').true(false) // Error;
     * be.err().all.true(false, 1) // Error;
     * be.err(callback).all.true(false, 1) // Error;
     * be.err('your message', callback).all.boolean(false, true) // callback invoked;
     *
     */
    obj.err = (msg = '', callback = null) => {
        if (typeof msg === 'function') {
            obj.err.__last_error_message = '';
            obj.err.__last_error_callback = msg;
        } else {
            obj.err.__last_error_message = msg;
            obj.err.__last_error_callback = callback;
        }
        return obj.err;
    };

    /**
     * Last error message
     * @type {string}
     * @private
     */
    obj.err.__last_error_message = '';

    for (let i in obj) {
        if (obj.hasOwnProperty(i) && typeof obj[i] === 'function' && typeof obj[i]._ofBe === 'undefined') {
            obj.not[i] = (...params) => {
                return !obj[i].apply(this, params);
            };

            if (typeof obj[i].multiple === 'undefined') {
                obj.all[i] = (...params) => {
                    let args = params;

                    if (Interface._isArray(args[0]) && args.length === 1)
                        args = args[0];

                    if (!args.length) return false;

                    for (let a in args) {
                        if (args.hasOwnProperty(a) && !obj[i].call(this, args[a]))
                            return false;
                    }
                    return true;
                };

                obj.any[i] = (...params) => {
                    let args = params;
                    if (Interface._isArray(args[0]) && args.length === 1)
                        args = args[0];

                    for (let a in args) {
                        if (args.hasOwnProperty(a) && obj[i].call(this, args[a]))
                            return true;
                    }
                    return false;
                };
            }
        }

        // Build err
        if (typeof obj[i]._ofBe === 'undefined')
            if (typeof obj[i] === 'object') {
                for (let j in obj[i]) {
                    if (!obj.err[i])
                        obj.err[i] = {};
                    if (obj[i].hasOwnProperty(j)) {
                        obj.err[i][j] = (...params) => {
                            if (!obj[i][j].apply(this, params)) {
                                let errorMessage = obj.err.__last_error_message + '';
                                obj.err.__last_error_message = '';
                                //console.log(params.toString());
                                throw new AssertionError(
                                    errorMessage ? errorMessage : `${i}.${j} is not satisfied\n\n${Interface._printArgs(params)}\n`
                                );
                            } else if (typeof obj.err.__last_error_callback === 'function') {
                                obj.err.__last_error_callback();
                                obj.err.__last_error_callback = null;
                            }
                        }
                    }
                }
            } else {
                obj.err[i] = (...params) => {
                    if (!obj[i].apply(this, params)) {
                        let errorMessage = obj.err.__last_error_message + '';
                        obj.err.__last_error_message = '';
                        throw new AssertionError(
                            errorMessage ? errorMessage : `${i} is not satisfied\n\n${Interface._printArgs(params)}\n`
                        );
                    } else if (typeof obj.err.__last_error_callback === 'function') {
                        obj.err.__last_error_callback();
                        obj.err.__last_error_callback = null;
                    }
                }
            }
    }

    return obj;
};

module.exports = Interface;