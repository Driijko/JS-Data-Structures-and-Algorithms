function recSum(array) {
  console.log(array);
  if(array.length === 0) return 0;
  else if (array.length === 1) return array[0];
  else {
    let value = array.pop();
    return value + recSum(array);
  }
}

const array = [1, 2, 3, 4, 5];
console.log(recSum(array));