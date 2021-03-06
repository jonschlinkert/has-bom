# has-bom [![NPM version](https://badge.fury.io/js/has-bom.svg)](http://badge.fury.io/js/has-bom)  [![Build Status](https://travis-ci.org/jonschlinkert/has-bom.svg)](https://travis-ci.org/jonschlinkert/has-bom)

> Returns true if a buffer or string has a byte order mark (BOM)

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i has-bom --save
```

## Usage

```js
var hasBom = require('has-bom');

hasBom('\ufefffoo');
//=> true
hasBom(new Buffer('\ufefffoo'));
//=> true

hasBom('foo');
//=> false
hasBom(new Buffer('foo'));
//=> false
```

## Related projects

* [cr](https://www.npmjs.com/package/cr): Strip windows carriage returns, or convert carriage returns to newlines. | [homepage](https://github.com/jonschlinkert/cr)
* [strip-bom-buffer](https://www.npmjs.com/package/strip-bom-buffer): Strip a byte order mark (BOM) from a buffer. | [homepage](https://github.com/jonschlinkert/strip-bom-buffer)
* [strip-bom-string](https://www.npmjs.com/package/strip-bom-string): Strip a byte order mark (BOM) from a string. | [homepage](https://github.com/jonschlinkert/strip-bom-string)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/has-bom/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 10, 2015._