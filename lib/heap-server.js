/*
 * heap-server
 * https://github.com/anthonyringoet/heap-server
 *
 * Copyright (c) 2014 Anthony Ringoet
 * Licensed under the MIT license.
 */

'use strict';

var xtend = require('xtend');
var request = require('request')

module.exports = Heap;

function Heap(id, debug) {
  if (!(this instanceof Heap)) return new Heap(id);
  if (!id) throw new TypeError('An api token is required');
  this.remote = 'https://heapanalytics.com/api/track';
  this.config = {
    'app_id': id
  };
  this.debug = debug;
}

Heap.prototype.push = function(data, callback) {
  var result = xtend(this.config, data);

  var options = {
    url: this.remote,
    json: true,
    method: 'POST',
    body: result
  }

  request(options, function(error, response, body){
    if(error || response.statusCode != 200){
      if(this.debug){
        console.log(error);
      }
      callback(true);
    }
    else{
      if(callback){
        callback(false, body);
      }
    }
  });
};