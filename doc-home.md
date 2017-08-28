<img width="102" src="https://raw.githubusercontent.com/fabioricali/beJS/master/extra/logo.png" title="beJS"/>

***to be, or not to be, that is the question***

<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/node.js-%3E%3D6-blue.svg" title="Node.js version"/>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>

# Simple, light-weight assertions framework for javascript

#### More than ***190*** validation methods

## Installation

### Node.js
```javascript
npm install bejs --save
```

### Browser

#### Local
```html
<script src="node_modules/bejs/dist/be.min.js"></script>
```

#### CDN unpkg
```html
<script src="https://unpkg.com/bejs/dist/be.min.js"></script>
```

#### CDN jsDeliver
```html
<script src="https://cdn.jsdelivr.net/npm/bejs/dist/be.min.js"></script>
```

## Example
```javascript
const be = require('bejs');

// call a method
be.boolean(true);

// call interface "not"
be.not.boolean(1);

// call interface "all" and passing arguments
be.all.boolean(true, false, true);

// call interface "all" and passing array
be.all.boolean([true, false, true]);

// call interface "any" and passing arguments
be.any.boolean(true, false, 1);

// call interface "err" to throw an error if assertions  are not satisfied
be.err.equal('hello world', 'hello world!'); // throw AssertionError

// call interface "err" passing a custom error message
be.err('the string must be equal to "hello world!"').equal('hello world', 'hello world!'); // throw AssertionError

// call others interfaces from "err"
be.err.any.array([], {}, '');
```

## As unit test with Mocha
```javascript
describe('a test', () => {
    it('should be ok', (done)=>{
        be.err(done).email('fabio@rica.li');
    });
    
    it('should be false', ()=>{
        be.err.false(2 === 3);
    });
});
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/beJS/blob/master/CHANGELOG.md">here</a>

## License
beJS is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>

<a target="_blank" href="https://www.mdslab.org">Davide Polano</a>