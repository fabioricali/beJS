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
 * @link https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
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
 * Returns the sign of a number, indicating whether the number is positive, negative or zero.
 * @param x {number} number
 * @returns {number}
 */
Helpers.mathSign = function(x) {
    // If x is NaN, the result is NaN.
    // If x is -0, the result is -0.
    // If x is +0, the result is +0.
    // If x is negative and not -0, the result is -1.
    // If x is positive and not +0, the result is +1.
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
        return Number(x);
    }
    return x > 0 ? 1 : -1;
};

module.exports = Helpers;