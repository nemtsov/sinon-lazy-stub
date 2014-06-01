var stub = require('sinon').stub;

module.exports = function (obj) {
  var keys = Object.keys(obj);

  return function () {
    var api = {},
      cache = {};

    keys.forEach(function (key) {
      Object.defineProperty(api, key, {
        get: function getStub() {
          return (cache[key] = cache[key] || stub());
        }
      });
    });

    return api;
  };
};
