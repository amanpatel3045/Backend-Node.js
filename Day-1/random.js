function randomInt(start, end) {
  return Math.floor(start + ((Math.random() * 10) % (end - start)));
}

console.log(randomInt(100, 300));
