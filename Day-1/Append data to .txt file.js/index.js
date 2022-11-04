const fs = require('fs');
const appendData =  fs.appendFile('test.txt', 'data', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
console.log(appendData);
