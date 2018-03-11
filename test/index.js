let hsl = require('../')
let test = require('tap').test

test('pure white', (assert) => {
  let expected = '#ffffff'
  let actual = hsl(0, 100, 100)
  let it = 'max saturation and luminostity should return pure white'
  assert.is(actual, expected, it)
  assert.end()
})

test('medium grey', (assert) => {
  let expected = '#808080'
  let actual = hsl(0, 0, 50)
  let it = '0% saturation, 50% luminosity should be medium grey'
  assert.is(actual, expected, it)
  assert.end()
})
