function random(begin=0, end=0) {
  return Math.floor(begin + (Math.random() * (end - begin)));
}

module.exports.random = random;
