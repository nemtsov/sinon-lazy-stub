var build = require('./'),
  should = require('should');

describe('sinon-lazy-stub', function () {
  var api;
  function noop() {}

  beforeEach(function () {
    api = {get: noop};
  });

  it('should build a stub creator', function () {
    var create = build(api),
      a = create();
    a.get.returns(3);
    a.get().should.equal(3);
  });

  it('should re-create', function () {
    var create = build(api),
      a = create(),
      b = create();
    a.get.returns(3);
    should.not.exist(b.get());
  });
});
