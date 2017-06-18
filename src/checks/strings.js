/**
 * Created by Fabio on 18/06/2017.
 */
var Helpers = require('../helpers');
var Types = require('./types');

var Strings = {};

/**
 *
 * @param value
 * @returns {boolean}
 */
Strings.camelCase = function (value) {
    return true;
};

/**
 * Check similarity between two string
 * @param string1
 * @param string2
 * @param threshold {int|float} 0 to 1
 * @returns {boolean}
 */
Strings.similarity =  function(string1, string2, threshold) {
    if(!Types.string(string1) || !Types.string(string2)) return false;

    if(!Types.number(threshold) || threshold < 0 || threshold > 1)
        threshold = 1;

    var longer = string1;
    var shorter = string2;

    if (string1.length < string2.length) {
        longer = string2;
        shorter = string1;
    }
    var longerLength = longer.length;

    return ((longerLength - Helpers.getEditDistance(longer, shorter)) /
        parseFloat(longerLength)) >= threshold;
};

Strings.similarity.multiple = false;

/**
 * Check if string contains a value
 * @param string
 * @param value
 * @returns {boolean}
 */
Strings.contains = function (string, value) {
    if (!Types.string(string)) return false;
    return string.indexOf(value) > -1;
};

Strings.contains.multiple = false;

/**
 * Check if string is lower case
 * @param value
 * @returns {boolean}
 */
Strings.lowerCase = function (value) {
    if (!Types.string(value)) return false;
    return value.toLowerCase() === value;
};

/**
 * Check if string is upper case
 * @param value
 * @returns {boolean}
 */
Strings.upperCase = function (value) {
    if (!Types.string(value)) return false;
    return value.toUpperCase() === value;
};

/**
 * Check if is a word
 * @param value
 * @returns {boolean}
 */
Strings.word = function (value) {
    if (!Types.string(value)) return false;
    var trimmed = value.trim();
    return trimmed.length > 0 && trimmed.split(' ').length === 1;
};

/**
 * Check if string is capitalized
 * @param value
 * @returns {boolean}
 */
Strings.capitalized = function (value) {
    if (!Types.string(value)) return false;
    var trimmed = value.trim();
    if (trimmed.length === 0) return false;
    var words = value.trim().split(' ');
    for(var i in words){
        var char = words[i].charAt(0);
        if(char !== char.toUpperCase())
            return false;
    }
    return true;
};

/**
 * Check if string is empty
 * @param value
 * @returns {boolean}
 */
Strings.emptyString = function(value){
    return Types.string(value) && value.length === 0;
};

/**
 * Check if is alphanumeric string
 * @param value
 * @returns {boolean|*}
 */
Strings.alphanumeric = function (value) {
    return /^[a-z0-9]+$/i.test(value) &&
        Types.string(value);
};

module.exports = Strings;