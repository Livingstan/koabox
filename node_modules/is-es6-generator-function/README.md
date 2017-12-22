# is-es6-generator-function [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check that given value is `GeneratorFunction`

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-es6-generator-function --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isGeneratorFunction = require('is-es6-generator-function')

var generator = (function * () {})()
var genFunction = function * () { yield 42 }

isGeneratorFunction(null) //=> false
isGeneratorFunction(undefined) //=> false
isGeneratorFunction(42) //=> false
isGeneratorFunction('foo') //=> false
isGeneratorFunction(function fn () {}) //=> false
isGeneratorFunction(genFunction) //=> true
isGeneratorFunction(generator) //=> false
```


## See also
- [apidocs-cli](https://github.com/tunnckocore/apidocs-cli): Async CLI for automatically generating API docs from code comments
- [is-es6-generators](https://github.com/tunnckocore/is-es6-generators): Check whether a value is a generator or generator function.
- [is-es6-generator](https://github.com/tunnckocore/is-es6-generator): Check that given value is `Generator`
- [is-generator-function-name](https://github.com/tunnckocore/is-generator-function-name): Check that given value have `GeneratorFunction` name… [more](https://github.com/tunnckocore/is-generator-function-name).
- [is-generator-function](https://github.com/ljharb/is-generator-function): Determine if a function is an ES6 generator function or not.
- [is-generator](https://github.com/blakeembrey/is-generator): Check whether a value is a generator or generator function
- [is-hybrid](https://github.com/hybridables/is-hybrid): Check whether an object looks like Hybrid which is promises-a+ promise and callback api
- [is-promise](https://github.com/then/is-promise): Test whether an object looks like a promises-a+ promise
- [is-missing](https://github.com/tunnckoCore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as… [more](https://github.com/tunnckoCore/is-missing)
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system - globally or locally.
- [is-kindof](https://github.com/tunnckoCore/is-kindof): Thin wrapper around `kind-of` and in bonus functional api.
- [npm-related](https://github.com/tunnckoCore/npm-related): Thin wrapper on top of `helper-related` for generating a list of links to the… [more](https://github.com/tunnckoCore/npm-related)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-es6-generator-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-es6-generator-function
[npmjs-img]: https://img.shields.io/npm/v/is-es6-generator-function.svg

[license-url]: https://github.com/tunnckoCore/is-es6-generator-function/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-es6-generator-function
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-es6-generator-function.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-es6-generator-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-es6-generator-function.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-es6-generator-function
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-es6-generator-function.svg

[david-url]: https://david-dm.org/tunnckoCore/is-es6-generator-function
[david-img]: https://img.shields.io/david/tunnckoCore/is-es6-generator-function.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
