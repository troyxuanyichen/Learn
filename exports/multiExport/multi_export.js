'use strict';

let a = {};

a.prototype.aa = function () {
  let map = new HashMap();
  console.log('This is aa');
};

a.prototype.ab = function () {
  console.log('This is ab');
};

module.exports = {a};