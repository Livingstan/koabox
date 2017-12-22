/*!
 * is-generator-function-name <https://github.com/tunnckoCore/is-generator-function-name>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

module.exports = function isGeneratorFunctionName (co) {
  if (!co || !co.constructor) {
    return false
  }
  return co.constructor.name === 'GeneratorFunction' ||
  co.constructor.displayName === 'GeneratorFunction'
}
