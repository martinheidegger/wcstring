const wcsize = require('wcsize')
const inherits = require('util').inherits
const VarSizeString = require('varsize-string')
const cache = {}
const eatControlCharacters = require('./eatControlCharacters')

function cacheWcSize (chr) {
  var size = cache[chr]
  if (isNaN(size)) {
    size = wcsize(chr)
    cache[chr] = size
  }
  return size
}

function WCString (string, ignoreControlCharacters) {
  if (!(this instanceof WCString)) {
    return new WCString(string, ignoreControlCharacters)
  }
  var charSizes = cacheWcSize
  if (ignoreControlCharacters !== false) {
    charSizes = eatControlCharacters(charSizes)
  }
  VarSizeString.call(this, string, charSizes)
}
inherits(WCString, VarSizeString)
module.exports = WCString
