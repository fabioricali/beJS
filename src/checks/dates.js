/**
 * @module be
 * @description Dates checks.
 */

const Types = require('./types');
const Numbers = require('./numbers');
const Interface = require('../interface');
let Dates = {};

let _days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];

let _months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

/**
 * Check if is date string
 * @param value {string}
 * @returns {boolean}
 */
Dates.dateString = (value) => {
    let date = Date.parse(value);
    return !isNaN(date);
};

/**
 * Check if date is today
 * @param date {Date}
 * @returns {boolean}
 */
Dates.today = (date) => {
    let now = new Date();
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is tomorrow
 * @param date {Date}
 * @returns {boolean}
 */
Dates.tomorrow = (date) => {
    let now = new Date();
    now.setDate(now.getDate() + 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is yesterday
 * @param date {Date}
 * @returns {boolean}
 */
Dates.yesterday = (date) => {
    let now = new Date();
    now.setDate(now.getDate() - 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is past
 * @param date {Date}
 * @returns {boolean}
 */
Dates.past = (date) => {
    let now = (new Date()).getTime();
    return Types.date(date) && now > date.getTime();
};

/**
 * Check if date is future
 * @param date {Date}
 * @returns {boolean}
 */
Dates.future = (date) => {
    return Types.date(date) && !Dates.past(date);
};

/**
 * Check if date is day specified
 * @param date {Date}
 * @param day {string}
 * @returns {boolean}
 */
Dates.day = (date, day) => {
    return Types.date(date) &&
        Types.string(day) &&
        _days[date.getDay()] === day.toLowerCase();
};

Dates.day.multiple = false;

/**
 * Check if date is month specified
 * @param date {Date}
 * @param month {string}
 * @returns {boolean}
 */
Dates.month = (date, month) => {
    return Types.date(date) &&
        Types.string(month) &&
        _months[date.getMonth()] === month.toLowerCase();
};

Dates.month.multiple = false;

/**
 * Check if date is year specified
 * @param date {Date}
 * @param year {number}
 * @returns {boolean}
 */
Dates.year = (date, year) => {
    return Types.date(date) &&
        Types.number(year) &&
        date.getFullYear() === year;
};

Dates.year.multiple = false;

/**
 * Check if is leap year
 * @param year {number}
 * @returns {boolean}
 */
Dates.leapYear = (year) => {
    return Types.number(year) &&
        ((year % 4 === 0) && (year % 100 !== 0)) ||
        (year % 400 === 0);
};

/**
 * Check if date is weekend
 * @param date {Date}
 * @returns {boolean}
 */
Dates.weekend = (date) => {
    return Dates.day(date, 'saturday') || Dates.day(date, 'sunday');
};

/**
 * Check if date is weekday
 * @param date {Date}
 * @returns {boolean}
 */
Dates.weekday = (date) => {
    return Types.date(date) && !Dates.weekend(date);
};

/**
 * Check if date is weekday
 * @param date {Date}
 * @param startDate {Date}
 * @param endDate {Date}
 * @returns {boolean}
 */
Dates.dateBetween = (date, startDate, endDate) => {
    /*return Types.date(date) &&
        Types.date(startDate) &&
        Types.date(endDate) &&*/
    return Types.each.date(date, startDate, endDate) &&
        Numbers.between(date.getTime(), startDate.getTime(), endDate.getTime());
};

Dates.dateBetween.multiple = false;

/**
 * Check if date is DST
 * @param date {Date}
 * @returns {boolean}
 */
Dates.dayLightSavingTime = (date) => {
    if(!Types.date(date)) return false;
    let jan = new Date(date.getFullYear(), 0, 1);
    let jul = new Date(date.getFullYear(), 6, 1);
    let stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    return date.getTimezoneOffset() < stdTimezoneOffset;
};

Dates = Interface.create(Dates);

module.exports = Dates;