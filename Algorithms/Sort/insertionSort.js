function insertionSort(array) {
  let currentElement;
  for (let i = 1 ; i < array.length; i++) {
    currentElement = array[i];

    for (let j = i - 1 ; j > -1 ; j--) {
      if(currentElement < array[j]) {
        array[j + 1] = array[j];
        if (j === 0) {
          array[0] = currentElement;
        }
      }
      else if (currentElement >= array[j]) {
        array[j + 1] = currentElement;
        break;
      }
    }
  }

  return array;
}

const array = [43, 65, 11, 654, 72 , 22, 1, 66];
console.log(insertionSort(array));