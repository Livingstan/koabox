/*!
 * is-es6-generator-function <https://github.com/tunnckoCore/is-es6-generator-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var isGeneratorFunctionName = require('is-generator-function-name')

/**
 * Check whether a `value` is a GeneratorFunction.
 *
 * @param  {Mixed} `value`
 * @return {Boolean} always boolean `true` or `false`, never `null` or `undefined`
 * @api public
 */
module.exports = function isGeneratorFunction (value) {
  if (!isGeneratorFunctionName(value)) return false
  if (typeof value !== 'function') return false

  return true
}
