/**
 * Created by Fabio on 18/06/2017.
 */
const Types = require('./types');
const Interface = require('../interface');
let Objects = {};

/**
 * Check if is a property of an object
 * @param value {*}
 * @param object {object}
 * @returns {boolean}
 */
Objects.propertyOf = (value, object) => {
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
Objects.propertyCount = (object, value) => {
    if(!Types.object(object) || !Types.number(value)) return false;
    let n = 0;
    for(let i in object){
        if(object.hasOwnProperty(i) && ++n > value)
            return false;
    }
    return n === value;
};

Objects.propertyCount.multiple = false;

Objects = Interface.create(Objects);

module.exports = Objects;