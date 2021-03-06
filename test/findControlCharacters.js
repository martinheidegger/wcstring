const findControlCharacters = require('../findControlCharacters')
const test = require('tape')

function find (str) {
  var chars = new Int16Array(new Buffer(str))
  return findControlCharacters(0, chars, chars[0])
}

test('test non-control chars', function (t) {
  t.equals(find('abcd'), -1)
  t.equals(find('\u001b'), -1)
  t.equals(find('\u001b'), -1)
  t.equals(find('\u001b['), -1)
  t.equals(find('\u001b[s'), 2)
  t.equals(find('\u001b[u'), 2)
  t.equals(find('\u001b[1;1H'), 5)
  t.equals(find('\u001b[1;1f'), 5)
  t.equals(find('\u001b[2J'), 3)
  t.equals(find('\u001b[K'), 2)
  t.equals(find('\u001b[2'), -1)
  t.equals(find('\u001b[=1234'), -1)
  t.equals(find('\u001b[=1234h'), 7)
  t.equals(find('\u001b[=1234l'), 7)
  t.equals(find('\u001b[123A'), 5)
  t.equals(find('\u001b[12B'), 4)
  t.equals(find('\u001b[1234C'), 6)
  t.equals(find('\u001b[1D'), 3)
  t.equals(find('\u001b[123oa'), -1)
  t.end()
})
