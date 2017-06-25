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
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.camelCase('testTest') // true
 * be.camelCase('test_test') // false
 */
Strings.camelCase = (value) => {
    return Types.string(value) &&
        !Strings.upperCase(value) &&
        Strings.alphanumeric(value) &&
        Strings.spaces(value.replace(/([A-Z])/g, ' $1'));
};

/**
 * Check if string is in snake_case format
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.snakeCase('test_test') // true
 * be.snakeCase('testTest') // false
 */
Strings.snakeCase = (value) => {
    return Strings.lowerCase(value) &&
        /^[0-9a-z]*_[0-9a-z]/ig.test(value);
};

/**
 * Check if string is in kebab-case format
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.kebabCase('test-test') // true
 * be.kebabCase('testTest') // false
 */
Strings.kebabCase = (value) => {
    return Strings.lowerCase(value) &&
        /^[0-9a-z]*-[0-9a-z]/ig.test(value);
};

/**
 * Check similarity between two string
 *
 * **Interfaces**: `not`
 *
 * @param string1 {string} string
 * @param string2 {string} string target
 * @param threshold {int|float} 0 to 1
 * @returns {boolean}
 * @example
 * be.similarity('hello', 'hello', 1) // true
 * be.similarity('hello', 'hello world', 1) // false
 */
Strings.similarity =  (string1, string2, threshold) => {
    //if(!Types.string(string1) || !Types.string(string2)) return false;
    if(!Types.all.string(string1, string2)) return false;

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
 *
 * **Interfaces**: `not`
 *
 * @param string {string} string
 * @param value {string} string target
 * @returns {boolean}
 * @example
 * be.contains('hello', 'hello world') // true
 */
Strings.contains = (string, value) => {
    if (!Types.string(string)) return false;
    return string.indexOf(value) > -1;
};

Strings.contains.multiple = false;

/**
 * Check if string is lower case
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.lowerCase('hello') // true
 */
Strings.lowerCase = (value) => {
    if (!Types.string(value)) return false;
    return value.toLowerCase() === value;
};

/**
 * Check if string is upper case
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.upperCase('HELLO') // true
 */
Strings.upperCase = (value) => {
    if (!Types.string(value)) return false;
    return value.toUpperCase() === value;
};

/**
 * Check if is a word
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.word('hello') // true
 * be.word('hello world') // false
 */
Strings.word = (value) => {
    if (!Types.string(value)) return false;
    let trimmed = value.trim();
    return trimmed.length > 0 && trimmed.split(' ').length === 1;
};

/**
 * Check if string is capitalized
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.capitalized('Hello World') // true
 * be.capitalized('hello world') // false
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
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.emptyString('') // true
 */
Strings.emptyString = (value) => {
    return Types.string(value) && value.length === 0;
};

/**
 * Check if is alphanumeric string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.alphanumeric('hello123456') // true
 */
Strings.alphanumeric = (value) => {
    return /^[a-z0-9]+$/i.test(value) &&
        Types.string(value);
};

/**
 * Check if string start with a value
 *
 * **Interfaces**: `not`
 *
 * @param value {string} start string
 * @param string {string} string target
 * @param insensitive {boolean} case sensitive
 * @returns {boolean}
 * @example
 * be.startWith('hello', 'hello world') // true
 * be.startWith('hello', 'HELLO world', true) // false
 */
Strings.startWith = (value, string, insensitive) => {
    if(Types.falsy(insensitive)) insensitive = false;
    let regex = new RegExp('^' + value, Types.booleanTrue(insensitive) ? 'i' : '');
    return regex.test(string);
};

Strings.startWith.multiple = false;

/**
 * Check if value is a single char
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.char('a') // true
 * be.char('ab') // false
 */
Strings.char = (value) => {
    return Types.string(value) && value.length === 1;
};

/**
 * Check if string is a space
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.space(' ') // true
 * be.space('a') // false
 */
Strings.space = (value) => {
    return Strings.char(value) && /\s/.test(value);
};

/**
 * Check if exists spaces in string
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {string} string
 * @returns {boolean}
 * @example
 * be.spaces('hello world') // true
 * be.spaces('helloworld') // false
 */
Strings.spaces = (value) => {
    return /\s/.test(value);
};

Strings = Interface.create(Strings);

module.exports = Strings;