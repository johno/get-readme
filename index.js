'use strict'

var fs = require('fs')
var path = require('path')

module.exports = function getReadme (dir) {
  if (typeof dir !== 'string') {
    throw new TypeError('get-readme expected a string')
  }

  var readme = null

  fs.readdirSync(dir).forEach(function (file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) return

    if (/^readme/i.test(file)) {
      readme = file
    }
  })

  if (!readme) return

  return fs.readFileSync(path.join(dir, readme), 'utf8')
}
