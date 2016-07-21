'use strict'

var fs = require('fs')
var path = require('path')
var getFilename = require('readme-filename')

module.exports = function getReadme (dir) {
  if (typeof dir !== 'string') {
    throw new TypeError('get-readme expected a string')
  }

  return getFilename(dir).then(function (filename) {
    if (!filename) return null

    return new Promise(function (resolve, reject) {
      fs.readFile(path.join(dir, filename), 'utf8', function (err, content) {
        if (err) return resolve(null)
        resolve(content)
      })
    })
  })
}
