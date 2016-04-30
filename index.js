'use strict';
var async = require('async');
var SandCastle = require('sandcastle').SandCastle;
var sandcastle = new SandCastle();
var execute = function(obj, test, cb){
  var script = sandcastle.createScript(obj.logic);
  script.on('exit', function(err, output) {
    cb(null, output === true);
  });
  script.on('timeout', function() {
    cb(null, false);
  });
  script.run({test: test});
};
module.exports = function (objects, test, cb) {
  for(var i = 0; i < objects.length; i++) {
    if (!objects[i].logic){
      return cb(new Error('"objects" are all required to have a "logic" property, failed at ' + i + '.'), null);
    }
  }
  async.filter(objects, function(obj, cb){
    execute(obj, test, cb);
  }, function(err, results){
    cb(null, results);
  });
};
