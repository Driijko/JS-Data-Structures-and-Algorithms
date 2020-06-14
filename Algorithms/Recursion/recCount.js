function recCount(list) {
  const keys = Object.keys(list);
  return recCountInner(keys);
  function recCountInner(keys) {
    if (keys.length === 0) return 0;
    else if (keys.length === 1) {
      return 1;
    }
    else {
      keys.pop();
      return 1 + recCountInner(keys);
    }
  }
}

const list = {
  one: "one",
  two: "two",
  three: "three",
  four: "four"
}

console.log(recCount(list));