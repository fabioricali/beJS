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