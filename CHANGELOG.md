# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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