# get-readme [![Build Status](https://secure.travis-ci.org/johnotander/get-readme.svg?branch=master)](https://travis-ci.org/johnotander/get-readme) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Retrieve the readme contents from a directory.
This is able to retrieve any common readme name.

## Installation

```bash
npm install --save get-readme
```

## Usage

```javascript
var getReadme = require('get-readme')

getReadme('.').then(console.log)
getReadme('some/other/path').then(console.log)
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
