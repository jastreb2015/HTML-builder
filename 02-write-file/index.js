'use strict'
const fs = require('fs');
const path = require('path');
const {
  stdin,
  stdout
} = process;

fs.writeFile(
  path.join('02-write-file', 'text.txt'),
  '',
  (err) => {
    if (err) throw err;
    console.log('Hello! File was created. Add some notes to it.');
  }
);

stdin.on('data', data => {
  let str = data.toString();

  if (str.indexOf('exit') !== -1) {
    process.exit();
  } else {
    fs.appendFile(
      path.join('02-write-file', 'text.txt'),
      data,
      err => {
        if (err) throw err;
        console.log('Файл был изменен');
      }
    )
  }
  process.on('SIGINT', () => {
    process.exit()
  });
});

process.on('exit', () => stdout.write('Удачи в изучении Node.js!\n'));
process.on('exit', () => console.log('Good luck!'));