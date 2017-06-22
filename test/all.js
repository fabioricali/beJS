/**
 * Created by Fabio on 11/06/2017.
 */
//if(typeof process === 'object') {
    const assert = require('assert');
    const be = require('../index');
//}
it('count class methods', function () {
    let result = 0;
    let count = 0;
    let Checks = [
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
    for (let i in Checks){
        if(Checks.hasOwnProperty(i)){
            count = 0;
            for (let m in be[Checks[i]]){
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

