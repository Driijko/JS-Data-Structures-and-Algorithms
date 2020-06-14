function selectionSort(array) {
  let temp;
  let smallerThanIndex;

  for (let i = 0 ; i < array.length - 1 ; i++) {

    smallerThanIndex = i;

    for (let j = i + 1; j < array.length ; j++) {

      if(array[smallerThanIndex] > array[j]) {
        smallerThanIndex = j;
      }

    }

    if (smallerThanIndex !== i) {
      temp = array[i];
      array[i] = array[smallerThanIndex];
      array[smallerThanIndex] = temp;
    }
    
  }

  return array;

}

const array = [43, 65, 11, 654, 72 , 22, 1, 66];
console.log(selectionSort(array));