'use strict';
var assert = require('assert');
var metaFiesta = require('../');

describe('meta-fiesta node module', function () {
  this.timeout(6000);
  it('must correctly filter results', function (done) {
    var objects = [
      { logic: "exports.main = function() { exit(test === 2);}", otherStuff: "yo" },
      { logic: "exports.main = function() {exit(test === 1);}", otherStuff: "yoyo" }
    ];
    var test = 1;

    metaFiesta(objects, test, function(err, list){
      assert("yoyo", list[0].otherStuff);
      assert(list.length, 1);
      done();
    });
  });
  it('must time out functions', function (done) {
    var objects = [
      { logic: "exports.main = function() { while(true){}}"}
    ];
    var test = 1;

    metaFiesta(objects, test, function(){
      done();
    });
  });
  it('must error when logic is not found', function (done) {
    var objects = [
      { logic: "exports.main = function() {}"},
      { noLogicHere: "foo"}
    ];
    var test = 1;

    metaFiesta(objects, test, function(err){
      assert(err !== null, true);
      done();
    });
  });
});
