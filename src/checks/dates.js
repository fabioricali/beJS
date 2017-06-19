/**
 * Created by Fabio on 18/06/2017.
 */
var Types = require('./types');
var Dates = {};

/**
 * Check if is date string
 * @param value {string}
 * @returns {boolean}
 */
Dates.dateString = function (value) {
    var date = Date.parse(value);
    return !isNaN(date);
};

/**
 * Check if date is today
 * @param date {Date}
 * @returns {boolean}
 */
Dates.today = function (date) {
    var now = new Date();
    return Types.date(date) && now.toDateString() === date.toDateString();
};

Dates.tomorrow = function (date) {

};

module.exports = Dates;