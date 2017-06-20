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
            count = 0;
            for (var m in be[Checks[i]]){
                if(be[Checks[i]].hasOwnProperty(m) && be.function(be[Checks[i]][m]) )
                    count++;
            }
            console.log(Checks[i], ':', count);
            result += count;
        }
    }
    console.log('total methods', result);
    assert.equal(result > 0, true);
});

