function linearSearchArray(value, array) {
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] === value) {
      console.log(`Value: ${value} is in array at index ${i}`);
      return;
    }
  }
  console.log("Value not found")
}

// EXAMPLE

// const array = [2, 5453, 3, 6546, 4, 67];

// linearSearchArray(67, array);