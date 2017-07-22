# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.7.0] - 2017-07-22
### Added
- `be.uuid3`, detect if is UUID v3

## [1.6.3] - 2017-07-20
### Added
- es8 `be.asyncFunction`, detect if is async function

## [1.6.2] - 2017-07-18
- Code optimization

## [1.6.1] - 2017-07-14

### Fixed
- Wrong node.js version badge in README

### Removed
- Unused helper

## [1.6.0] - 2017-07-13

### Added
- `be.compareVersion`, compare two version
- `be.androidTablet`, detect Android tablet
- `be.androidPhone`, detect Android phone
- `be.chromeIOS`, detect Chrome on iOS
- `be.opera`, detect Opera browser
- `be.edge`, detect Edge browser
- `be.safariMobile`, detect Safari mobile browser
- `be.windowsPhone`, detect Windows Phone
- `be.windowsTablet`, detect Windows tablet
- `be.blackberry`, detect BlackBerry device
- `be.linux`, detect Linux
- `be.mobile`, detect mobile device
- `be.tablet`, detect tablet device
- `be.desktop`, detect desktop device

## [1.5.0] - 2017-07-10

### Added
- es6 `be.oSet`, Set object assertion
- es6 `be.weakSet`, WeakSet object assertion
- es6 `be.map`, Map object assertion
- es6 `be.mapIterator`, Map Iterator object assertion
- es6 `be.setIterator`, Set Iterator object assertion
- es6 `be.int8Array`, Int8Array object assertion
- es6 `be.uint8Array`, Uint8Array object assertion
- es6 `be.uint8ClampedArray`, Uint8ClampedArray object assertion
- es6 `be.int16Array`, Int16Array object assertion
- es6 `be.uint16Array`, Uint16Array object assertion
- es6 `be.int32Array`, Int32Array object assertion
- es6 `be.uint32Array`, Uint32Array object assertion
- es6 `be.float32Array`, Float32Array object assertion
- es6 `be.float64Array`, Float64Array object assertion

## [1.4.1] - 2017-07-10

### Added
- `be.set`, now it's possible add new/overwrite methods
- `be.endWith`

### Changed
- `be.startWith`, remove regex test

## [1.4.0] - 2017-07-07

### Added
- `be.symbol`
- `be.defined`
- `be.arrayOfNumbers`
- `be.arrayOfDates`
- `be.arrayOfFunctions`

### Changed
- improved `be.json`
- improved `be.buffer`
- now `be.equal` support also object and array

### Fixed
- now `be.equal` with zero negative return false
- `be.all.array` failed
- `be.any.array` failed

## [1.3.1] - 2017-07-04

### Added
- `be.primitive`
- `be.promise`
- `be.buffer`
- `be.iterable`
- `be.arrayOfBooleans`
- `be.false`
- `be.true`
    
### Changed
- now `be.booleanTrue` and `be.booleanFalse` are alias of `be.true` and `be.false`

### Fixed
- test