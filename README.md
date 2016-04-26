# random-file

> Return random file name with random extension.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-file/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/random-file/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-file)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-file/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-file)
  
  
## Install
  
```
$ npm install --save random-file 
```
  
## Usage
  
```js
var randomFile = require('random-file');
  
// API
// - randomFile([options]);
  
// options
// - extension
// - extensions
// - fileType
```

By default, returns random file name with random extension:
  
```js
randomFile();
// => 'bappada.amf'
```

Optionally specify the file extension:

```js
randomFile({ extension: 'txt' });
// => 'tavnamgi.txt'

randomMinute({ extensions: ['txt', 'md', 'doc'] });
// => 'ralve.doc'

randomMinute({ 
    extensions: {
        'images': [ 'bmp', 'gif', 'png' ],
        'vector': [ '3dv', 'amf', 'awg', 'ai' ]
    } 
});
// => 'jeasmov.amf'
```
  
Optionally specify the file type, available types are:

- raster
- vector
- 3d
- doc

```js
randomFile({ fileType: '3d' });
// => 'mappos.max'
```
  
## Related
  
- [random-uuid](https://github.com/mock-end/random-uuid) - Return a random uuid.
- [random-identity](https://github.com/mock-end/random-identity) - Return a random ID.
- [random-dx](https://github.com/mock-end/random-dx) - Return a value equal to the roll of a die.
- [random-hexhash](https://github.com/mock-end/random-hexhash) - Return a random hex hash.
- [random-normal](https://github.com/mock-end/random-normal) - Return a normally-distributed random variate.
- [random-rpg](https://github.com/mock-end/random-rpg) - Return an array of dice values.
- [random-semver](https://github.com/mock-end/random-semver) - Return a random version.
  

## Contributing
  
Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-file/issues/new).
