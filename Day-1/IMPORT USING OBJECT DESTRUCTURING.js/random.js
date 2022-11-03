function randomInt(start, end) {
  return Math.floor(start + ((Math.random() * 10) % (end - start)));
}
function greeting(name){
    console.log('Hey', name);
}
// console.log(randomInt(100, 300));
module.exports = {
  randomInt,
  greeting
};
