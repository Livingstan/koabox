/*!
 * is-generator-function-name <https://github.com/tunnckoCore/is-generator-function-name>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isGeneratorFunctionName = require('./index')

test('is-generator-function-name:', function () {
  test('generators', function () {
    test('should return false with non-generators', function () {
      test.equal(isGeneratorFunctionName(null), false)
      test.equal(isGeneratorFunctionName(undefined), false)
      test.equal(isGeneratorFunctionName([1, 2, 3]), false)
      test.equal(isGeneratorFunctionName({name: 'GeneratorFunction'}), false)
      test.equal(isGeneratorFunctionName(25), false)
      test.equal(isGeneratorFunctionName('test'), false)
    })
    test('should return false with a generator', function () {
      test.equal(isGeneratorFunctionName((function * () {})()), false)
    })
  })

  test('generator functions', function () {
    test('should return false with non-generator function', function () {
      test.equal(isGeneratorFunctionName(function () {}), false)
      test.equal(isGeneratorFunctionName(function GeneratorFunction () {}), false)
    })
    test('should return true with a generator functions', function () {
      test.equal(isGeneratorFunctionName(function * () {}), true)
      test.equal(isGeneratorFunctionName(function * () { yield 42 }), true)
    })
  })
})
