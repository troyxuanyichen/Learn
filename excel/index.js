'use strict';

const Excel = require('exceljs');
const path = require('path');
const output_dir = ('./output');
let workbook = new Excel.Workbook();

let map = new Map([
  ['title', 'App Status'],
  ['status',
    ['status', 'good']
  ],
  ['entry',
    [
      ['entry_1', 'Running'],
      ['entry_2', 'Running'],
      ['entry_3', 'Running']
    ]
  ]
]);

function main(map) {
  let workbook = init();
  edit(workbook, 'nuevo', map);
  write(workbook, 'nuevo' + new Date() + '.xlsx');
}

function init() {
  console.log('Create File');
  let workbook = new Excel.Workbook();
  workbook.created = new Date();
  return workbook;
}

/**
 *
 * @param {Workbook} workbook
 * @param {string} tabName
 * @param {Map} map
 * @returns {}
 */
async function edit(workbook, tabName, map) {
  console.log('Edit tab');
  let worksheet = workbook.addWorksheet(tabName);
  worksheet.columns = [
    {header: 'Title', key: 'title', width: 10},
    {header: 'Status', key: 'status', width: 10},
    {header: 'Action', key: 'action', width: 20},
  ];
  let cur_title = map.get('title');
  let cur_status = map.get('status');
  let cur_entry = map.get('entry');
  worksheet.addRow({title: cur_title, status: cur_status[0], action: cur_status[1]});
  if (cur_status[1] === 'good') {
    let row = worksheet.lastRow;
    row.eachCell(function (cell) {
      cell.fill.bgColor = {argb: 'FF008000'}
    })
    // row.fill = {bgColor: {argb: 'FF008000'}};
  } else {
    let row = worksheet.lastRow;
    // row.eachCell((cell => cell.fill.bgColor = {argb: 'FFFF0000'}))
  }
  for (let entry of cur_entry) {
    worksheet.addRow({title: entry[0], status: entry[1]});
  }
}

async function write(workbook, fileName) {
  workbook.xlsx.writeFile('./output/' + fileName)
      .then(function () {
        console.log('File ' + fileName + ' saved in ./output folder');
      });
}

main(map);