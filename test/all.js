/**
 * Created by Fabio on 11/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

it('count class methods', function () {
    var result = Object.keys(be).length;
    console.log('total methods', result);
    assert.equal(result > 0, true);
});

