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

/**
 * Check if date is tomorrow
 * @param date
 * @returns {boolean}
 */
Dates.tomorrow = function (date) {
    var now = new Date();
    now.setDate(now.getDate() + 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is yesterday
 * @param date
 * @returns {boolean}
 */
Dates.yesterday = function (date) {
    var now = new Date();
    now.setDate(now.getDate() - 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is past
 * @param date
 * @returns {boolean}
 */
Dates.past = function (date) {
    var now = (new Date()).getTime();
    return Types.date(date) && now > date.getTime();
};

/**
 * Check if date is future
 * @param date
 * @returns {boolean}
 */
Dates.future = function (date) {
    return !Dates.past(date);
};



module.exports = Dates;