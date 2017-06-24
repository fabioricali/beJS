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
 * interfaces: `not`
 *
 * @param value {Mixed} Element for search
 * @param array {Array} Array where search
 * @returns {Boolean}
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

Arrays = Interface.create(Arrays);

module.exports = Arrays;
