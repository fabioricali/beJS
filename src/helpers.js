/**
 * Created by Fabio on 17/06/2017.
 */
var Types = require('./checks/types');

/**
 * Helpers class
 */
var Helpers = {};

/**
 * Get user agent
 * @returns {*}
 */
Helpers.getUserAgent = function () {
    if (arguments.length)
        return arguments[0];
    else {
        if (!be.navigator())
            throw new Error('test allowed only in browser environment');
        return navigator.userAgent;
    }
};

/**
 * Convert object to string
 * @param object {*}
 * @returns {*}
 */
Helpers.objectToString = function (object) {
    return Object.prototype.toString.call(object);
};

/**
 * Distance between the two given strings
 * @link https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
 * @param a {string}
 * @param b {string}
 * @returns {*}
 */
Helpers.getEditDistance = function(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    var matrix = [];

    // increment along the first column of each row
    var i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                    Math.min(matrix[i][j-1] + 1, // insertion
                        matrix[i-1][j] + 1)); // deletion
            }
        }
    }

    return matrix[b.length][a.length];
};

/**
 * Create interface each and some
 * @param obj
 * @returns {*}
 */
Helpers.createInterface = function (obj) {
    obj.each = {};
    obj.some = {};
    for(var i in obj){
        if(obj.hasOwnProperty(i) && Types.function(obj[i]) && Types.undefined(obj[i].multiple)){
            obj.each[i] = (function (j) {
                return function () {
                    var args = arguments;
                    if(Types.array(args[0]))
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
                    if(Types.array(args[0]))
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

module.exports = Helpers;