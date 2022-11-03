console.log("I am in index.js file");
const randomModule = require('./random');
//OBJECT DESTRUCTURING, WE CAN WRITE greeting also after randomInt in 4th line.
const {randomInt} = require('./random');
console.log(randomInt(100,300))
console.log(randomModule.greeting('Aman'))
