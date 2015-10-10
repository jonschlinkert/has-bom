'use strict';

require('mocha');
var assert = require('assert');
var has = require('./');

describe('has', function () {
  it('should return true if a string has a bom:', function () {
    assert(has('\ufefffoo'));
  });

  it('should return false if a string does not have a bom:', function () {
    assert(!has('foo'));
  });

  it('should return true if a buffer has a bom:', function () {
    assert(has(new Buffer('\ufefffoo')));
  });

  it('should return false if a buffer does not have a bom:', function () {
    assert(!has(new Buffer('foo')));
  });
});

