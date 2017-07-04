/**
 * @module be
 * @description Arrays checks.
 */

const Types = require('./types');
const Interface = require('../interface');
let Arrays = {};

/**
 * Check if an element is in the array
 *
 * **Interfaces**: `not`
 *
 * @param value {Mixed} element to search
 * @param array {array} array where search
 * @returns {boolean}
 * @example
 * be.inArray('hello', ['hello', 'world']) //true
 * be.inArray('ciao', ['hello', 'world']) //false
 * be.inArray(1, true) //false
 * be.not.inArray(1, true) //true
 * be.Arrays.inArray(1, [1, 2, 3]) //true
 */
Arrays.inArray = (value, array) => {
    if(!Types.array(array)) return false;
    for(let i in array){
        if(array.hasOwnProperty(i) && array[i] === value)
            return true;
    }
    return false;
};

Arrays.inArray.multiple = false;

/**
 * Check if is an array of strings
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfStrings(['hello', 'world']) // true
 */
Arrays.arrayOfStrings = (value) => {
    return Types.all.string(value);
};

/**
 * Check if is an array of objects
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfObjects({a:1},{b:2}) // true
 */
Arrays.arrayOfObjects = (value) => {
    return Types.all.object(value);
};

Arrays = Interface.create(Arrays);

module.exports = Arrays;
