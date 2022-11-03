const fs = require('fs');
const content =  fs.readFileSync('./Readme.md', {
  encoding: 'utf-8'
})
console.log(content);
