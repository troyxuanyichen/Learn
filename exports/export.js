'use strict';

let a = {};

function aa () {
  let contentArray = [];
  contentArray.push(null);
  contentArray.push(1);
  console.log(contentArray.length);
}

aa();

module.exports = {a};