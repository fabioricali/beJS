/**
 * Created by Fabio on 18/06/2017.
 */
var Types = require('./types');
var Objects = {};

/**
 * Check if is a property of an object
 * @param value {*}
 * @param object {object}
 * @returns {boolean}
 */
Objects.propertyOf = function (value, object) {
    if(!Types.object(object)) return false;
    return object.hasOwnProperty(value);
};

Objects.propertyOf.multiple = false;

/**
 * Count properties of an object
 * @param object {object}
 * @param value {int}
 * @returns {boolean}
 */
Objects.propertyCount = function (object, value) {
    if(!Types.object(object) || !Types.number(value)) return false;
    var n = 0;
    for(var i in object){
        if(object.hasOwnProperty(i) && ++n > value)
            return false;
    }
    return n === value;
};

Objects.propertyCount.multiple = false;

module.exports = Objects;