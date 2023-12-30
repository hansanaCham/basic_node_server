const a = 5
const b = 7
console.log(a + b)

const fs = require('fs');

fs.writeFile('abc.txt', 'Hello, this is the content of the file.', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File written successfully.');
    }
  });