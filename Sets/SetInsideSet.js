'use strict';

const mocha = require('mocha');
const LINE_SET = {};

LINE_SET.set('APP_STATUS_SET',new Map([
  ['JEFF 1', 'JEFF_1'],
  ['JEFF 2', 'JEFF_2'],
  ['JEFF 3', 'JEFF_3']
]));

LINE_SET.push(new Set([
  'SING 1',
  'SING 2',
  'SING 3'
]));

function foo(lines) {

}

console.log(LINE_SET.get().get('JEFF 1'));
console.log(LINE_SET[1].has('SING 1'));

console.log(LINE_SET[0].entries.ge);