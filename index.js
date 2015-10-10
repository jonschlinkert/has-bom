/*!
 * has-bom <https://github.com/jonschlinkert/has-bom>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isBuffer = require('is-buffer');
var isUtf8 = require('is-utf8');

module.exports = function hasBom(val) {
  if (isBuffer(val) && isUtf8(val)) {
    return String(val.slice(0, 3)) === '\ufeff';
  }
  if (typeof val === 'string') {
    return val.charAt(0) === '\ufeff';
  }
  return false;
};
