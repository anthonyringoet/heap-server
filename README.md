# Heap server-side events [![Build Status](https://secure.travis-ci.org/anthonyringoet/heap-server.png?branch=master)](http://travis-ci.org/anthonyringoet/heap-server)

Heap Analytics server-side events helper

## Getting Started
Install the module with: `npm install heap-server`

More info on the [Heap documentation site](https://heapanalytics.com/docs/server-side)

## Methods
The Heap server side API currently has two internal methods:

- ```track```
- ```identify```

When you send along an ```event``` property with the ```heap.push()``` method you will be using the internal ```track``` method. If you are not sending an event along you're using the internal ```identify``` method.

#### Example: tracking a custom event

```javascript
var heap = require('heap-server')('--your-heap-app-id--');

heap.push({
  identity: "john@doe.org",
  event: "Custom event name that shows up in Heap Analytics",
  properties: { // extra event properties are optional
    "foo" : "bar"
  }
}, function(err, foo){
  if(err){
    return;
  }
  console.log(foo);
});

// or no callback

heap.push({
  identity: "john@doe.org",
  event: "Custom event name that shows up in Heap Analytics",
  properties: {
    "foo" : "bar"
  }
});
```

#### Example: tracking a custom event

You can also use this to update properties for an existing user.

```javascript
var heap = require('heap-server')('--your-heap-app-id--');

heap.push({
  identity: 'john@doe.orgfoobar',
  properties: {
    'foo': 'bar',
    'random': 'bogus'
  }
},
function(err, result){
    if(err){
      return;
    }
    console.log(result);
});


// or no callback

heap.push({
  identity: 'john@doe.orgfoobar',
  properties: {
    'foo': 'bar',
    'random': 'bogus'
  }
});

```