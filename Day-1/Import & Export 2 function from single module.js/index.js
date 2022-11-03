console.log("I am in index.js file");

// User defined modules
const randomModule = require('./random');

console.log(randomModule.randomInt(100,300))
console.log(randomModule.greeting('Aman'))
