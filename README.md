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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Anthony Ringoet. Licensed under the MIT license.
