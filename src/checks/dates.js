/**
 * Created by Fabio on 18/06/2017.
 */

var Dates = {};

/**
 * Check if is date string
 * @param value
 * @returns {boolean}
 */
Dates.dateString = function (value) {
    var date = Date.parse(value);
    return !isNaN(date);
};

module.exports = Dates;