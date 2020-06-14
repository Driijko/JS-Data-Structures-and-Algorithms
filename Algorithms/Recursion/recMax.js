function recMax(array) {
  if (array.length === 0) {
    return null;
  }
  else if (array.length === 1) {
    return array[0];
  }
  else if (array.length === 2) {
    if (array[0] >= array[1]) return array[0];
    else return array[1];
  }
  else {
    let subMax = recMax(array.slice(1));
    if (array[0] > subMax) {
      return array[0];
    }
    else {
      return subMax;
    }
  }
}

const array = [1, 2, 3, 76, 4, 5, 6];

console.log(recMax(array));