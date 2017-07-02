![beJS](extra/logo.png?1)

***to be, or not to be, that is the question***

[![Build Status](https://travis-ci.org/fabioricali/beJS.svg?branch=master)](https://travis-ci.org/fabioricali/beJS) [![Coverage Status](https://coveralls.io/repos/github/fabioricali/beJS/badge.svg?branch=master)](https://coveralls.io/github/fabioricali/beJS?branch=master)

# Simple, light-weight assertions framework for javascript

## Installation

### Node.js
```javascript
npm install bejs --save
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

## Docs
- [API](docs/be.md)
    - [Arrays](docs/arrays.md)
    - [Dates](docs/dates.md)
    - [Envs](docs/envs.md)
    - [Hashes](docs/hashes.md)
    - [Mixed](docs/mixed.md)
    - [Numbers](docs/numbers.md)
    - [Objects](docs/objects.md)
    - [Strings](docs/strings.md)
    - [Types](docs/types.md)
    - [Urls](docs/urls.md)
    - [CreditCards](docs/creditCards.md)
    - [PostalCodes](docs/postalCodes.md)
    - [DOM](docs/dom.md)

## License
beJS is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

## Author
[Fabio Ricali](http://rica.li)