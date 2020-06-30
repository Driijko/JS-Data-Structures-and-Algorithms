// Based on code from interviewcake (you need a subscription to see this page I think):
// https://www.interviewcake.com/article/javascript/logarithms?course=fc1&section=algorithmic-thinking

function mergeSort(array) {
  console.log("input:" , array);

  // Step 0: Base Case
  // An array with less than two elements is already sorted. 
  if (array.length < 2) {
    console.log("output:", array)
    return array;
  }

  // Step 1: Split array
  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex, array.length);

  // Step 2: Recursively sort
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: Merge left and right sorted arrays
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArray = [];

  while (sortedArray.length < sortedLeft.length + sortedRight.length) {
    if (
      leftIndex < sortedLeft.length
      && (
        rightIndex === sortedRight.length
        || sortedLeft[leftIndex] < sortedRight[rightIndex]
      )
    ) {
      sortedArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    }
    else {
      sortedArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  console.log("output:", sortedArray);
  return sortedArray;

}

console.log(mergeSort([32, 56, 12, 78, 5555, 3]));