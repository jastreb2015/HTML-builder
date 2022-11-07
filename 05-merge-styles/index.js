const fs = require('fs');
const path = require('path');
const dir = '05-merge-styles/styles';
const dirMerge = '05-merge-styles/project-dist'

fs.writeFile(
  path.join(dirMerge, 'bundle.css'),
  '',
  (err) => {
      if (err) throw err;
      console.log('Bundle.css file was created.');
  }
);

fs.readdir(dir, {
  withFileTypes: true
}, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  for (const file of files) {
    let filePath = dir + '/' + file.name;
    
      if (err) throw err;
      if (file.isFile() && path.extname(filePath) === '.css') {
        let input = fs.createReadStream(filePath);

       input.on('data', data => {
            fs.appendFile(
              path.join(dirMerge, 'bundle.css'),
             data.toString() + "\n",
              err => {
                if (err) throw err;
                console.log('Файл был изменен');
              }
            )
          }
        );
      }
  }
});
process.on('exit', () => console.log('Good luck!'));