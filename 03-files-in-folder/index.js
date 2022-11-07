const fs = require('fs');
const path = require('path');
const dir = '03-files-in-folder/secret-folder';

fs.readdir(dir, {
  withFileTypes: true
}, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  for (const file of files) {
    let filePath = dir + '/' + file.name;
   fs.stat (filePath, (err, stats) => {
      if (err) throw err;
      if (file.isFile()) {
        console.log(`${path.parse(filePath).name} - ${path.extname(filePath).slice(1)} - ${stats.size}`);
      }
    });
  }

});
