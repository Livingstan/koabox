/*!
 * is-es6-generator <https://github.com/tunnckoCore/is-es6-generator>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isGeneratorFunction = require('./index')

test('is-es6-generator-function:', function () {
  test('should return false with non-generator functions', function () {
    test.equal(isGeneratorFunction(null), false)
    test.equal(isGeneratorFunction(undefined), false)
    test.equal(isGeneratorFunction(function () {}), false)
    test.equal(isGeneratorFunction([55, 23, 24]), false)
    test.equal(isGeneratorFunction({name: 'GeneratorFunction'}), false)
    test.equal(isGeneratorFunction(25), false)
    test.equal(isGeneratorFunction('foo bar'), false)
    test.equal(isGeneratorFunction((function * () {})()), false)
    var noConstructorFn = function () {}
    noConstructorFn.constructor = undefined

    test.equal(isGeneratorFunction(noConstructorFn), false)
  })
  test('should return true with a generator functions', function () {
    test.equal(isGeneratorFunction((function * () {})()), false)
    test.equal(isGeneratorFunction(function * () {}), true)
    test.equal(isGeneratorFunction(function * () { yield 42 }), true)
  })
})
