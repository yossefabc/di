const fs = require('fs');


fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  fs.writeFile('destination.txt', data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Content copied from source.txt to destination.txt');
  });
});