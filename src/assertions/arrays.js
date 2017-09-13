/**
 * @fileOverview Arrays asserts.
 * @module Array
 */

const Types = require('./types');
const Numbers = require('./numbers');
const Interface = require('../interface');
let Arrays = {};

/**
 * Check if an element is in the array
 *
 * **Interfaces**: `not`, `err`
 *
 * @param value {Mixed} element to search
 * @param array {array} array where search
 * @function
 * @name inArray
 * @return {boolean}
 * @example
 *  be.inArray('hello', ['hello', 'world']) //true
 *  be.inArray('ciao', ['hello', 'world']) //false
 *  be.inArray(1, true) //false
 *  be.not.inArray(1, true) //true
 *  be.Arrays.inArray(1, [1, 2, 3]) //true
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
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @param value {array} array
 * @function
 * @name arrayOfStrings
 * @returns {*|boolean}
 * @example
 * be.arrayOfStrings(['hello', 'world']) // true
 * be.all.arrayOfStrings([
 *     ['hello', 'world'],
 *     ['ciao', 'mondo']
 * ]) // true
 */
Arrays.arrayOfStrings = (value) => {
    return Types.all.string(value);
};

/**
 * Check if is an array of objects
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name arrayOfObjects
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfObjects([{a:1},{b:2}]) // true
 * be.all.arrayOfObjects([
 *      {a: 1},
 *      {b: 2},
 *      [1, 2, 3]
 * ]) // false
 */
Arrays.arrayOfObjects = (value) => {
    return Types.all.object(value);
};

/**
 * Check if is an array of booleans
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name arrayOfBooleans
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfBooleans([true, false]) // true
 * be.all.arrayOfBooleans([
 *      true,
 *      false,
 *      [1, 2, 3]
 * ]) // false
 */
Arrays.arrayOfBooleans = (value) => {
    return Types.all.boolean(value);
};

/**
 * Check if is an array of numbers
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name arrayOfNumbers
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfNumbers([1, 2]) // true
 * be.all.arrayOfNumbers([
 *      true,
 *      false,
 *      [1, 2, 3]
 * ]) // false
 */
Arrays.arrayOfNumbers = (value) => {
    return Types.all.number(value);
};

/**
 * Check if is an array of numeric
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name arrayOfNumeric
 * @param value {array} array
 * @returns {*|boolean}
 * @since 1.13.0
 * @example
 * be.arrayOfNumeric([1, "2"]) // true
 * be.all.arrayOfNumeric([
 *      12,
 *      "two"
 * ]) // false
 */
Arrays.arrayOfNumeric = (value) => {
    return Numbers.all.numeric(value);
};

/**
 * Check if is an array of dates
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name arrayOfDates
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfDates([new Date(), new Date('2017-07-06')]) // true
 * be.all.arrayOfDates([
 *      true,
 *      false,
 *      new Date()
 * ]) // false
 */
Arrays.arrayOfDates = (value) => {
    return Types.all.date(value);
};

/**
 * Check if is an array of functions
 *
 * **Interfaces**: `all`, `any`, `not`, `err`
 *
 * @function
 * @name arrayOfFunctions
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfFunctions([function(){return 1}, function(){return 2}]) // true
 * be.all.arrayOfFunctions([
 *      true,
 *      false,
 *      function(){return 1}
 * ]) // false
 */
Arrays.arrayOfFunctions = (value) => {
    return Types.all.function(value);
};

/**
 * Check if is a key of an object with determined value is in array
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name objValueInArray
 * @param array {Array} array
 * @param key {string} object key that you are looking for
 * @param value {any}  the value of the key that you are looking for
 * @returns {*|boolean}
 * @example
 * be.objValueInArray([{ id: 1, name: '...'}], 'id', 1) // true
 */
Arrays.objValueInArray = (array, key, value) => {
  let result = [];
  if(Types.all.object(array)){
    result = array.map((a) => {
      return a.hasOwnProperty(key) && a[key] === value;
   })
  }
  return Types.any.booleanTrue(result);
};

Arrays.objValueInArray.multiple = false;

Arrays = Interface.create(Arrays);

module.exports = Arrays;
