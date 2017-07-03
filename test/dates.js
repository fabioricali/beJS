/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('dateString', function () {
    it('yyyy-mm-dd, should be return true', function () {
        var result = be.dateString('2017-06-11');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH:MM:SS, should be return true', function () {
        var result = be.dateString('2017-06-11 20:45:50');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH:MM, should be return true', function () {
        var result = be.dateString('2017-06-11 20:45');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH, should be return false', function () {
        var result = be.dateString('2017-06-11 20');
        console.log(result);
        assert.equal(result, false);
    });
    it('yyyy-mm-ddTHH:MM:SS, should be return true', function () {
        var result = be.dateString('2017-06-11T20:50:50');
        console.log(result);
        assert.equal(result, true);
    });
    it('yyyy-mm-dd HH:MM:SS wrong minutes, should be return false', function () {
        var result = be.dateString('2017-06-11 20:70:50');
        console.log(result);
        assert.equal(result, false);
    });
    it('yyyy/mm/dd, should be return true', function () {
        var result = be.dateString('2017/06/11');
        console.log(result);
        assert.equal(result, true);
    });
    it('dd/mm/yyyy, should be return true', function () {
        var result = be.dateString('11/06/2017');
        console.log(result);
        assert.equal(result, true);
    });
    it('wrong format, should be return false', function () {
        var result = be.dateString('2017-06-112');
        console.log(result);
        assert.equal(result, false);
    });
    it('wrong format dd-yyyy-mm, should be return false', function () {
        var result = be.dateString('11-2017-06');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('today', function () {
    it('should be return true', function () {
        var result = be.today(new Date());
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.today(new Date('2016-06-08'));
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.today();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('tomorrow', function () {
    it('should be return true', function () {
        var now = new Date();
        now.setDate(now.getDate() + 1);
        var result = be.tomorrow(now);
        console.log(now.toDateString(),result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.tomorrow(new Date());
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.tomorrow();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('yesterday', function () {
    it('should be return true', function () {
        var now = new Date();
        now.setDate(now.getDate() - 1);
        var result = be.yesterday(now);
        console.log(now.toDateString(),result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.yesterday(new Date());
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.yesterday();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('past', function () {
    it('should be return true', function () {
        var now = new Date();
        now.setDate(now.getDate() - 1);
        var result = be.past(now);
        console.log(now.toDateString(),result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var now = new Date();
        now.setDate(now.getDate() + 1);
        var result = be.past(now);
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.past();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('future', function () {
    it('should be return true', function () {
        var now = new Date();
        now.setDate(now.getDate() + 1);
        var result = be.future(now);
        console.log(now.toDateString(),result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var now = new Date();
        now.setDate(now.getDate() - 1);
        var result = be.future(now);
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.future();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('day', function () {
    it('should be return true', function () {
        var now = new Date('2017-06-19');
        var result = be.day(now, 'monday');
        console.log(now.toDateString(),result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var now = new Date('2017-06-18');
        var result = be.day(now, 'monday');
        console.log(now.toDateString(),result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.day();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('month', function () {
    it('should be return true', function () {
        var now = new Date('2017-06-19');
        var result = be.month(now, 'june');
        console.log(now.toDateString(),result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var now = new Date('2017-06-18');
        var result = be.month(now, 'july');
        console.log(now.toDateString(),result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.month();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('year', function () {
    it('should be return true', function () {
        var now = new Date('2017-06-19');
        var result = be.year(now, 2017);
        console.log(now.toDateString(),result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var now = new Date('2017-06-18');
        var result = be.year(now, 2018);
        console.log(now.toDateString(),result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.year();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('leap year', function () {
    it('should be return true', function () {
        var result = be.leapYear(2016);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.leapYear(2017);
        console.log(result);
        assert.equal(result, false);
    });
    it('interface not, should be return false', function () {
        var result = be.not.leapYear(2020);
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.leapYear();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('weekend', function () {
    it('saturday, should be return true', function () {
        var result = be.weekend(new Date('2017-06-24'));
        console.log(result);
        assert.equal(result, true);
    });
    it('sunday, should be return true', function () {
        var result = be.weekend(new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, true);
    });
    it('monday, should be return false', function () {
        var result = be.weekend(new Date('2017-06-19'));
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.weekend();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('weekday', function () {
    it('saturday, should be return false', function () {
        var result = be.weekday(new Date('2017-06-24'));
        console.log(result);
        assert.equal(result, false);
    });
    it('sunday, should be return false', function () {
        var result = be.weekday(new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, false);
    });
    it('monday, should be return true', function () {
        var result = be.weekday(new Date('2017-06-19'));
        console.log(result);
        assert.equal(result, true);
    });
    it('no Date object, should be return false', function () {
        var result = be.weekday();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('dateBetween', function () {
    it('should be return true', function () {
        var result = be.dateBetween(new Date('2017-06-24'), new Date('2017-06-19'), new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, true);
    });
    it('date and start are equal, should be return true', function () {
        var result = be.dateBetween(new Date('2017-06-24'), new Date('2017-06-24'), new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, true);
    });
    it('date and end are equal, should be return true', function () {
        var result = be.dateBetween(new Date('2017-06-25'), new Date('2017-06-19'), new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, true);
    });
    it('date, start, end are equal, should be return true', function () {
        var result = be.dateBetween(new Date('2017-06-25'), new Date('2017-06-25'), new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, true);
    });
    it('date with time, start, end are equal, should be return false', function () {
        var result = be.dateBetween(new Date('2017-06-25 01:00:00'), new Date('2017-06-25'), new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, false);
    });
    it('date, start, end are equal but time is different, should be return true', function () {
        var result = be.dateBetween(new Date('2017-06-25 01:00:00'), new Date('2017-06-25 00:40:00'), new Date('2017-06-25 01:01:00'));
        console.log(result);
        assert.equal(result, true);
    });
    it('date is not in range, should be return false', function () {
        var result = be.dateBetween(new Date('2017-06-26'), new Date('2017-06-19'), new Date('2017-06-25'));
        console.log(result);
        assert.equal(result, false);
    });
    it('no Date object, should be return false', function () {
        var result = be.dateBetween();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('dayLightSavingTime', function () {
    it('should be return true', function () {
        var result = be.dayLightSavingTime(new Date('2017-06-24')) || (new Date()).getTimezoneOffset() === 0;
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.dayLightSavingTime(new Date('2017-10-30'));
        console.log(result);
        assert.equal(result, false);
    });
});

describe('timeString', function () {
    it('hh:mm:ss, should be return true', function () {
        var result = be.timeString('22:50:05');
        console.log(result);
        assert.equal(result, true);
    });
    it('hh:mm, should be return true', function () {
        var result = be.timeString('22:50');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.timeString('22:50:65');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('numberInWeek', function () {
    it('0, should be return true', function () {
        var result = be.numberInWeek(0);
        console.log(result);
        assert.equal(result, true);
    });
    it('1, should be return true', function () {
        var result = be.numberInWeek(1);
        console.log(result);
        assert.equal(result, true);
    });
    it('7, should be return false', function () {
        var result = be.numberInWeek(7);
        console.log(result);
        assert.equal(result, false);
    });
});