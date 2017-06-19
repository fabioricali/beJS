/**
 * Created by Fabio on 11/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

it('count class methods', function () {
    var result = 0;
    var count = 0;
    var Checks = [
        'Strings',
        'Types',
        'Numbers',
        'Envs',
        'Objects',
        'Mixed',
        'Arrays',
        'Dates',
        'Urls',
        'Hashes'
    ];
    for (var i in Checks){
        if(Checks.hasOwnProperty(i)){
            count = Object.keys(be[Checks[i]]).length;
            console.log(Checks[i], ':', count);
            result += count;
        }
    }
    console.log('total methods', result);
    assert.equal(result > 0, true);
});

