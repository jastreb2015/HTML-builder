const fs = require('fs');
const dirPath = '04-copy-directory/files';
const dirCopyPath = '04-copy-directory/files-copy';

fs.mkdir('04-copy-directory/files-copy', {
  recursive: true
}, (err) => {
  if (err) throw err;
});

fs.readdir(dirCopyPath, {
  withFileTypes: true
}, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  for (const file of files) {
    let fileCopyPath = dirCopyPath + '/' + file.name;
    fs.unlink(fileCopyPath, err => {
      if (err) throw err;
      console.log('Файл успешно удален');
    });

  }

});

fs.readdir(dirPath, {
  withFileTypes: true
}, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  for (const file of files) {
    let filePath = dirPath + '/' + file.name;
    let fileCopyPath = dirCopyPath + '/' + file.name;
    fs.copyFile(filePath, fileCopyPath, err => {
      if (err) throw err;
      console.log('Файл успешно скопирован');
    });

  }

});