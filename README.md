#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Meta-logic for user awards (so oddly specific)

This library is an application component for a closed-source project. It takes a list of objects with a "logic" property and a single test object. Each "logic" property will be executed in sandboxed JS and passed the test object. The objects containing a "logic" that returned truthy will be passed in an arrray to a callback function.

Probably not that helpful to you?

## Install

```sh
$ npm install --save meta-fiesta
```


## Usage

```js
var metaFiesta = require('meta-fiesta');

var objects = [
  { logic: "exports.main = function() { exit(test === 2);}", otherStuff: "yo" },
  { logic: "exports.main = function() {exit(test === 1);}", otherStuff: "yoyo" }
];
var test = 1;

metaFiesta(objects, test, function(err, list){
    console.log(list);
    //  { logic: "exports.main = function() {exit(test === 1);}", otherStuff: "yoyo" }
});
```


## License

MIT © [Falkirks](http://falkirks.com)


[npm-image]: https://badge.fury.io/js/meta-fiesta.svg
[npm-url]: https://npmjs.org/package/meta-fiesta
[travis-image]: https://travis-ci.org/Falkirks/meta-fiesta.svg?branch=master
[travis-url]: https://travis-ci.org/Falkirks/meta-fiesta
[daviddm-image]: https://david-dm.org/Falkirks/meta-fiesta.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Falkirks/meta-fiesta
