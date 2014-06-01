# Sinon.js lazy stub

When using `sinon` you sometimes need to stub an object that has many
methods. This can be taxing on performance, especially if you
re-create the stub before every test (for a clean test).

This module solves this problem by lazily creating the stubs of the
methods of an object, only when they're used.


## Usage

**Simple:**
```javascript
var lazyStub = require('sinon-lazy-stub');
  api = {get: function () {}},
  createStub = lazyStub(api),
  stubA, stubB;

stubA = createStub();
stubB = createStub();

stubA.get.returns(7);
assert.equal(stub.get())
```

**Recommended:**
```javascript
// api-test.js
var stubs = require('./my_stubs');

describe('API', function () {
  var api;

  beforeEach(function () {
    api = stubs.api();
  });

  it('should be great', function () {
    //...
  });
});

// my_stubs.js
var lazyStub = require('sinon-lazy-stub'),
  api = require('...');

module.exports = {
  api: lazyStub(api)
};
```

As you see in the case above, I recommend creating a separate
file in your project with the stubs. That way they're all in
a single known place.


## License

MIT. See LICENSE
