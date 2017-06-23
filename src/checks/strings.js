/**
 * @module be
 * @description Strings checks.
 */

const Helpers = require('../helpers');
const Interface = require('../interface');
const Types = require('./types');

let Strings = {};

/**
 * Check if string is in camelCase format
 * @param value {string}
 * @returns {boolean}
 */
Strings.camelCase = (value) => {
    return Types.string(value) &&
        !Strings.upperCase(value) &&
        Strings.alphanumeric(value) &&
        Strings.spaces(value.replace(/([A-Z])/g, ' $1'));
};

/**
 * Check if string is in snake_case format
 * @param value {string}
 * @returns {boolean}
 */
Strings.snakeCase = (value) => {
    return Strings.lowerCase(value) &&
        /^[0-9a-z]*_[0-9a-z]/ig.test(value);
};

/**
 * Check if string is in kebab-case format
 * @param value {string}
 * @returns {boolean}
 */
Strings.kebabCase = (value) => {
    return Strings.lowerCase(value) &&
        /^[0-9a-z]*-[0-9a-z]/ig.test(value);
};

/**
 * Check similarity between two string
 * @param string1 {string}
 * @param string2 {string}
 * @param threshold {int|float} 0 to 1
 * @returns {boolean}
 */
Strings.similarity =  (string1, string2, threshold) => {
    //if(!Types.string(string1) || !Types.string(string2)) return false;
    if(!Types.each.string(string1, string2)) return false;

    if(!Types.number(threshold) || threshold < 0 || threshold > 1)
        threshold = 1;

    let longer = string1;
    let shorter = string2;

    if (string1.length < string2.length) {
        longer = string2;
        shorter = string1;
    }
    let longerLength = longer.length;

    return ((longerLength - Helpers.getEditDistance(longer, shorter)) /
        parseFloat(longerLength)) >= threshold;
};

Strings.similarity.multiple = false;

/**
 * Check if string contains a value
 * @param string {string}
 * @param value {string}
 * @returns {boolean}
 */
Strings.contains = (string, value) => {
    if (!Types.string(string)) return false;
    return string.indexOf(value) > -1;
};

Strings.contains.multiple = false;

/**
 * Check if string is lower case
 * @param value {string}
 * @returns {boolean}
 */
Strings.lowerCase = (value) => {
    if (!Types.string(value)) return false;
    return value.toLowerCase() === value;
};

/**
 * Check if string is upper case
 * @param value {string}
 * @returns {boolean}
 */
Strings.upperCase = (value) => {
    if (!Types.string(value)) return false;
    return value.toUpperCase() === value;
};

/**
 * Check if is a word
 * @param value {string}
 * @returns {boolean}
 */
Strings.word = (value) => {
    if (!Types.string(value)) return false;
    let trimmed = value.trim();
    return trimmed.length > 0 && trimmed.split(' ').length === 1;
};

/**
 * Check if string is capitalized
 * @param value {string}
 * @returns {boolean}
 */
Strings.capitalized = (value) => {
    if (!Types.string(value)) return false;
    let trimmed = value.trim();
    if (trimmed.length === 0) return false;
    let words = value.trim().split(' ');
    for(let i in words){
        let char = words[i].charAt(0);
        if(char !== char.toUpperCase())
            return false;
    }
    return true;
};

/**
 * Check if string is empty
 * @param value {string}
 * @returns {boolean}
 */
Strings.emptyString = (value) => {
    return Types.string(value) && value.length === 0;
};

/**
 * Check if is alphanumeric string
 * @param value {string}
 * @returns {boolean|*}
 */
Strings.alphanumeric = (value) => {
    return /^[a-z0-9]+$/i.test(value) &&
        Types.string(value);
};

/**
 * Check if string start with a value
 * @param value {string}
 * @param string {string}
 * @param insensitive {boolean|*}
 * @returns {boolean}
 */
Strings.startWith = (value, string, insensitive) => {
    if(Types.falsy(insensitive)) insensitive = false;
    let regex = new RegExp('^' + value, Types.booleanTrue(insensitive) ? 'i' : '');
    return regex.test(string);
};

Strings.startWith.multiple = false;

/**
 * Check if value is a single char
 * @param value {string}
 * @returns {boolean}
 */
Strings.char = (value) => {
    return Types.string(value) && value.length === 1;
};

/**
 * Check if string is a space
 * @param value {string}
 * @returns {boolean}
 */
Strings.space = (value) => {
    return Strings.char(value) && /\s/.test(value);
};

/**
 * Check if exists spaces in string
 * @param value {string}
 * @returns {boolean}
 */
Strings.spaces = (value) => {
    return /\s/.test(value);
};

Strings = Interface.create(Strings);

module.exports = Strings;