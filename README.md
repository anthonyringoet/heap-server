# Heap server-side events [![Build Status](https://secure.travis-ci.org/anthonyringoet/heap-server.png?branch=master)](http://travis-ci.org/anthonyringoet/heap-server)

Heap Analytics server-side events helper

## Getting Started
Install the module with: `npm install heap-server`

More info on the Heap documentation:
https://heapanalytics.com/docs/server-side

```javascript
var heap = require('heap-server')('--your-heap-app-id--');

heap.push({
  identity: "john@doe.org",
  event: "Custom event name that shows up in Heap Analytics",
  properties: { // optional
    "foo" : "bar"
  }
}, function(err, foo){ // callback is optional
  if(err){
    return;
  }
  console.log(foo);
});
```