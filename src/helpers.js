/**
 * @module helpers
 */

/**
 * Helpers class
 */
let Helpers = {};

/**
 * Get user agent
 * @returns {*}
 */
Helpers.getUserAgent = (...params) => {
    if (params.length)
        return params[0];
    else {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined')
            throw new Error('test allowed only in browser environment');
        return navigator.userAgent;
    }
};

/**
 * Convert object to string
 * @param object {*}
 * @returns {*}
 */
Helpers.objectToString = (object) => {
    return Object.prototype.toString.call(object);
};

/**
 * Distance between the two given strings
 * @see https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
 * @param a {string}
 * @param b {string}
 * @returns {*}
 */
Helpers.getEditDistance = (a, b) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    let matrix = [];

    // increment along the first column of each row
    let i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    let j;
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
 * Comparators methods
 */
Helpers.comparators = {
    '==': function(a, b) {return Helpers.compareVersions(a, b) === 0;},
    '<': function(a, b) {return Helpers.compareVersions(a, b) < 0;},
    '<=': function(a, b) {return Helpers.compareVersions(a, b) <= 0;},
    '>': function(a, b) {return Helpers.compareVersions(a, b) > 0;},
    '>=': function(a, b) {return Helpers.compareVersions(a, b) >= 0;}
};

/**
 * Compare version number
 * @see https://stackoverflow.com/questions/6832596/how-to-compare-software-version-number-using-js-only-number
 * @param a {string} version number
 * @param b {string} version number
 * @returns {int}
 */
Helpers.compareVersions = function (a, b) {
    let diff;
    let regExStrip0 = /(\.0+)+$/;
    let segmentsA = a.replace(regExStrip0, '').split('.');
    let segmentsB = b.replace(regExStrip0, '').split('.');
    let l = Math.min(segmentsA.length, segmentsB.length);

    for (let i = 0; i < l; i++) {
        diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
        if (diff) {
            return diff;
        }
    }
    return segmentsA.length - segmentsB.length;
};

/**
 * Get operator and version number
 * @param value {string} string like <=1.0.0
 * @returns {*}
 */
Helpers.operatorVersion = function (value) {
    if(!value) return false;
    let match = value.match(/(==|<=?|>=?)(?:\s+)?(\d+(\.\d+)+)/);
    if(!match) return false;
    return [match[1], match[2]];
};

module.exports = Helpers;