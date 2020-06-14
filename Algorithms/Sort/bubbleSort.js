function bubbleSort(array) {

  let temp;
  let pass = 1;

  for (let i = 0 ; i < array.length - 1 ; i++) {

    for (let j = 0 ; j < array.length - pass ; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    
    pass += 1;

  }

  return array;

}

const array = [43, 65, 11, 654, 72 , 22, 1, 66];

console.log(bubbleSort(array));