![beJS](https://raw.githubusercontent.com/fabioricali/beJS/master/extra/logo.png)

***to be, or not to be, that is the question***

[![Build Status](https://travis-ci.org/fabioricali/beJS.svg?branch=master)](https://travis-ci.org/fabioricali/beJS)
[![Coverage Status](https://coveralls.io/repos/github/fabioricali/beJS/badge.svg?branch=master)](https://coveralls.io/github/fabioricali/beJS?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Node.js version](https://img.shields.io/badge/node.js-%3C%3D6-blue.svg)
![Team Terrons](https://img.shields.io/badge/team-terrons-orange.svg)

# Simple, light-weight assertions framework for javascript

#### More than ***150*** assertions

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
```

## Documentation
See [https://be.js.org](https://be.js.org/)

## Changelog
You can view the changelog [here](https://github.com/fabioricali/beJS/blob/master/CHANGELOG.md)

## License
beJS is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

## Author
[Fabio Ricali](http://rica.li)

[Davide Polano](https://www.mdslab.org)
