/**
 * Created by Fabio on 18/06/2017.
 */
var Types = require('./types');
var Arrays = {};

/**
 * Check if element is in array
 * @param value {*}
 * @param array {array}
 * @returns {boolean}
 */
Arrays.inArray = function (value, array) {
    if(!Types.array(array)) return false;
    for(var i in array){
        if(array.hasOwnProperty(i) && array[i] === value)
            return true;
    }
    return false;
};

Arrays.inArray.multiple = false;

module.exports = Arrays;
