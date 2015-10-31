const wcsize = require('wcsize')
const inherits = require('util').inherits
const VarSizeString = require('varsize-string')
const cache = {}

function cacheWcSize (chr) {
  var size = cache[chr]
  if (isNaN(size)) {
    size = wcsize(chr)
    cache[chr] = size
  }
  return size
}

function WCString (string) {
  if (!(this instanceof WCString)) {
    return new WCString(string)
  }
  VarSizeString.call(this, string, cacheWcSize)
}
inherits(WCString, VarSizeString)
module.exports = WCString
