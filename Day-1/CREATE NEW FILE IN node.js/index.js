// FOR CREATING NEW FILE
//The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
// same code can be used for appending the data if mynewfile1.txt is already exist. 
const fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
