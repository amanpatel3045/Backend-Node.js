const fs = require('fs');
const content =  fs.readFileSync('./Readme.md', {
  //if encoding wali line (4th) na likhe toh output me buffer aayega (buffer means sequence of ASCII CODE) character ki jgh code me likha hua aayega in terminal
  // agr encoding :'utf-8' likhenge toh output String me aayega.
  encoding: 'utf-8'
})
console.log(content);
