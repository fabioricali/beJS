/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('alphanumeric', function () {
    it('alphanumeric, should be return true', function () {
        var result = be.alphanumeric('abcd28202hju');
        console.log(result);
        assert.equal(result, true);
    });
    it('number as string, should be return true', function () {
        var result = be.alphanumeric('222');
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return true', function () {
        var result = be.alphanumeric(222);
        console.log(result);
        assert.equal(result, false);
    });
    it('boolean, should be return true', function () {
        var result = be.alphanumeric(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('contains', function () {
    it('should be return true', function () {
        var result = be.contains('hello world', 'world');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.contains('hello world', 'ciao');
        console.log(result);
        assert.equal(result, false);
    });
    it('array, should be return false', function () {
        var result = be.contains([2,3], 3);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('lowerCase', function () {
    it('should be return true', function () {
        var result = be.lowerCase('hello world');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.lowerCase('Hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('array, should be return false', function () {
        var result = be.lowerCase([2,3]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('upperCase', function () {
    it('should be return true', function () {
        var result = be.upperCase('HELLO WORLD');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.upperCase('Hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('array, should be return false', function () {
        var result = be.upperCase([2,3]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('word', function () {
    it('should be return true', function () {
        var result = be.word('hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.word('Hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('only space, should be return false', function () {
        var result = be.word(' ');
        console.log(result);
        assert.equal(result, false);
    });
    it('with space, should be return true', function () {
        var result = be.word('hello ');
        console.log(result);
        assert.equal(result, true);
    });
    it('array, should be return false', function () {
        var result = be.word([2,3]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('capitalized', function () {
    it('should be return true', function () {
        var result = be.capitalized('Hello World');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.capitalized('hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('empty string should be return false', function () {
        var result = be.capitalized('');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('emptyString', function () {
    it('should be return true', function () {
        var result = be.emptyString('');
        console.log(result);
        assert.equal(result, true);
    });
    it('double quotes, should be return true', function () {
        var result = be.emptyString("");
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.emptyString('h');
        console.log(result);
        assert.equal(result, false);
    });
    it('space, should be return false', function () {
        var result = be.emptyString(' ');
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined, should be return false', function () {
        var result = be.emptyString();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('similarity', function () {
    it('equal string, should be return true', function () {
        var result = be.similarity('hello', 'hello', 1);
        console.log(result);
        assert.equal(result, 1);
    });
    it('equal string without threshold, should be return true', function () {
        var result = be.similarity('hello', 'hello');
        console.log(result);
        assert.equal(result, 1);
    });
    it('equal string with threshold 15, should be return true', function () {
        var result = be.similarity('hello', 'hello', 15);
        console.log(result);
        assert.equal(result, 1);
    });
    it('equal string with threshold -15, should be return true', function () {
        var result = be.similarity('hello', 'hello', -15);
        console.log(result);
        assert.equal(result, 1);
    });
    it('equal string with threshold null, should be return true', function () {
        var result = be.similarity('hello', 'hello', null);
        console.log(result);
        assert.equal(result, 1);
    });
    it('same word but different case, should be return true', function () {
        var result = be.similarity('hello', 'Hello', 0.5);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.similarity('Fabio Ricali', 'Fabio Rigali', 1);
        console.log(result);
        assert.equal(result, false);
    });
    it('empty, should be return false', function () {
        var result = be.similarity('', '', 1);
        console.log(result);
        assert.equal(result, false);
    });
    it('empty first, should be return false', function () {
        var result = be.similarity('', 'hello', 1);
        console.log(result);
        assert.equal(result, false);
    });
    it('empty second, should be return false', function () {
        var result = be.similarity('hello', '', 1);
        console.log(result);
        assert.equal(result, false);
    });
    it('threshold zero, should be return true', function () {
        var result = be.similarity('hello', '', 0);
        console.log(result);
        assert.equal(result, true);
    });
    it('no string input, should be return false', function () {
        var result = be.similarity(1, 1, 1);
        console.log(result);
        assert.equal(result, false);
    });
    it('no string input except one, should be return false', function () {
        var result = be.similarity(1, '1', 1);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('camelCase', function () {
    it('should be return true', function () {
        var result = be.camelCase('testTest');
        console.log(result);
        assert.equal(result, true);
    });
    it('TestTest should be return true', function () {
        var result = be.camelCase('TestTest');
        console.log(result);
        assert.equal(result, true);
    });
    it('lowercase, should be return false', function () {
        var result = be.camelCase('testtest');
        console.log(result);
        assert.equal(result, false);
    });
    it('uppercase, should be return false', function () {
        var result = be.camelCase('TEST');
        console.log(result);
        assert.equal(result, false);
    });
    it('alphanumeric, should be return false', function () {
        var result = be.camelCase('test123');
        console.log(result);
        assert.equal(result, false);
    });
    it('number, should be return false', function () {
        var result = be.camelCase(123);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('space', function () {
    it('should be return true', function () {
        var result = be.space(' ');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.space('ciao');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('snakeCase', function () {
    it('should be return true', function () {
        var result = be.snakeCase('test_test');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.snakeCase('test');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('kebabCase', function () {
    it('should be return true', function () {
        var result = be.kebabCase('test-test');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.kebabCase('test');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('startWith', function () {
    it('should be return true', function () {
        var result = be.startWith('hello', 'hello world');
        console.log(result);
        assert.equal(result, true);
    });
    it('access by Strings, should be return true', function () {
        var result = be.Strings.startWith('hello', 'hello world');
        console.log(result);
        assert.equal(result, true);
    });
    it('insensitive undefined, should be return false', function () {
        var result = be.startWith('HELLO', 'hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('insensitive true, should be return true', function () {
        var result = be.startWith('HELLO', 'hello world', true);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.startWith('world', 'hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('special char, should be return true', function () {
        var result = be.startWith('^world', '^world hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return true', function () {
        var result = be.startWith(12, 12345);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('endWith', function () {
    it('should be return true', function () {
        var result = be.endWith('world', 'hello world');
        console.log(result);
        assert.equal(result, true);
    });
    it('access by Strings, should be return true', function () {
        var result = be.Strings.endWith('world', 'hello world');
        console.log(result);
        assert.equal(result, true);
    });
    it('insensitive undefined, should be return false', function () {
        var result = be.endWith('WORLD', 'hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('insensitive true, should be return true', function () {
        var result = be.endWith('WORLD', 'hello world', true);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.endWith('hello', 'hello world');
        console.log(result);
        assert.equal(result, false);
    });
    it('special char, should be return true', function () {
        var result = be.endWith('^hello', 'world ^hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return true', function () {
        var result = be.endWith(45, 12345);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('char', function () {
    it('should be return true', function () {
        var result = be.char('h');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.char('hh');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('spaces', function () {
    it('should be return true', function () {
        var result = be.spaces('hello world');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.spaces('helloworld');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('palindrome', function () {
    it('should be return true', function () {
        var result = be.palindrome('A but tuba');
        console.log(result);
        assert.equal(result, true);
    });
    it('with number should be return true', function () {
        var result = be.palindrome('69 A but tuba 96');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.palindrome('helloworld');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('stringRange', function () {
    it('should be return true', function () {
        var result = be.stringRange('hello world', 5, 11);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.stringRange('hello world', 15, 20);
        console.log(result);
        assert.equal(result, false);
    });
});