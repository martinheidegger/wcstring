const WCString = require('../')
const test = require('tape')

test('regular init', function (t) {
  t.equal(WCString('abcd').size(), 4, 'functional use')
  t.equal(WCString('あい').size(), 4, 'functional use, double width')
  t.equal(new WCString('あい').size(), 4, 'instance use, double width')
  t.equal(new WCString('ai').size(), 2, 'instance use, double width')
  t.end()
})
