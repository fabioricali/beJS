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
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param value {String} string date
 * @returns {Boolean}
 * @example
 * be.dateString('2017-06-20') // true
 * be.dateString('hello') // false
 */
Dates.dateString = (value) => {
    let date = Date.parse(value);
    return !isNaN(date);
};

/**
 * Check if date is today
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * be.today(new Date()) // true
 */
Dates.today = (date) => {
    let now = new Date();
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is tomorrow
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * let now = new Date();
 * let tomorrow = now.setDate(now.getDate() + 1);
 * be.tomorrow(tomorrow) // true
 */
Dates.tomorrow = (date) => {
    let now = new Date();
    now.setDate(now.getDate() + 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is yesterday
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * let now = new Date();
 * let yesterday = now.setDate(now.getDate() - 1);
 * be.yesterday(yesterday) // true
 */
Dates.yesterday = (date) => {
    let now = new Date();
    now.setDate(now.getDate() - 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is past
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * be.past(new Date('1980-02-05')) // true
 */
Dates.past = (date) => {
    let now = (new Date()).getTime();
    return Types.date(date) && now > date.getTime();
};

/**
 * Check if date is future
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * be.future(new Date('2117-06-24')) // true
 * be.all.future(new Date('2117-06-24'), new Date('2007-06-25')) // false
 * be.any.future(new Date('2117-06-24'), new Date('2007-06-25')) // true
 * be.not.future(new Date('2117-06-24')) // false
 */
Dates.future = (date) => {
    return Types.date(date) && !Dates.past(date);
};

/**
 * Check if date is day specified
 *
 * interfaces: `not`
 *
 * @param date {Date} date object
 * @param day {String} day can be 'sunday','monday','tuesday','wednesday','thursday','friday','saturday'
 * @returns {Boolean}
 * @example
 * be.day(new Date('2017-06-24'), 'saturday') // true
 * be.day(new Date('2017-06-25'), 'monday') // false
 * be.not.day(new Date('2017-06-25'), 'monday') // true
 */
Dates.day = (date, day) => {
    return Types.date(date) &&
        Types.string(day) &&
        _days[date.getDay()] === day.toLowerCase();
};

Dates.day.multiple = false;

/**
 * Check if date is month specified
 *
 * interfaces: `not`
 *
 * @param date {Date} date object
 * @param month {string} month can be 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
 * @returns {Boolean}
 * @example
 * be.month(new Date('2017-06-24'), 'june') // true
 * be.month(new Date('2017-02-25'), 'march') // false
 * be.not.month(new Date('2017-02-25'), 'march') // true
 */
Dates.month = (date, month) => {
    return Types.date(date) &&
        Types.string(month) &&
        _months[date.getMonth()] === month.toLowerCase();
};

Dates.month.multiple = false;

/**
 * Check if date is the year specified
 *
 * interfaces: `not`
 *
 * @param date {Date} date object
 * @param year {Number} year
 * @returns {Boolean}
 * @example
 * be.year(new Date('2017-06-06'), 2017) // true
 * be.not.year(new Date('2017-06-06'), 2017) // false
 */
Dates.year = (date, year) => {
    return Types.date(date) &&
        Types.number(year) &&
        date.getFullYear() === year;
};

Dates.year.multiple = false;

/**
 * Check if is leap year
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param year {Number} year
 * @returns {Boolean}
 * @example
 * be.leapYear(2016) // true
 * be.leapYear(2017) // false
 * be.not.leapYear(2017) // true
 * be.all.leapYear(2012, 2016) // true
 * be.any.leapYear(2015, 2016) // true
 */
Dates.leapYear = (year) => {
    return Types.number(year) &&
        ((year % 4 === 0) && (year % 100 !== 0)) ||
        (year % 400 === 0);
};

/**
 * Check if date is weekend
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * be.weekend(new Date('2017-06-24')) // true
 * be.not.weekend(new Date('2017-06-24')) // false
 * be.all.weekend(new Date('2017-06-24'), new Date('2017-06-25')) // true
 * be.any.weekend(new Date('2017-06-24'), new Date('2017-06-26')) // true
 */
Dates.weekend = (date) => {
    return Dates.day(date, 'saturday') || Dates.day(date, 'sunday');
};

/**
 * Check if date is weekday
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * be.weekday(new Date('2017-06-26')) // true
 * be.not.weekday(new Date('2017-06-24')) // true
 * be.all.weekday(new Date('2017-06-26'), new Date('2017-06-27')) // true
 * be.any.weekday(new Date('2017-06-24'), new Date('2017-06-26')) // true
 */
Dates.weekday = (date) => {
    return Types.date(date) && !Dates.weekend(date);
};

/**
 * Check if date is between start date and end date
 *
 * interfaces: `not`
 *
 * @param date {Date} date object
 * @param startDate {Date} start date object
 * @param endDate {Date} end date object
 * @returns {Boolean}
 * @example
 * be.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // true
 * be.not.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // false
 */
Dates.dateBetween = (date, startDate, endDate) => {
    return Types.all.date(date, startDate, endDate) &&
        Numbers.between(date.getTime(), startDate.getTime(), endDate.getTime());
};

Dates.dateBetween.multiple = false;

/**
 * Check if date is DST
 *
 * interfaces: `all`, `any`, `not`
 *
 * @param date {Date} date object
 * @returns {Boolean}
 * @example
 * be.dayLightSavingTime(new Date('2017-06-24')) // true
 * be.dayLightSavingTime(new Date('2017-10-30')) // false
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