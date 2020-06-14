const {random} = require('../../Utils/random');

function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  else {
    const randomPick = random(array.length);
    // console.log(randomPick);
    const pivot = array.splice(randomPick, 1);
    console.log("pivot:", pivot);
    const less = array.filter(element => element <= pivot);
    console.log("less: ", less);
    const more = array.filter(element => element > pivot);
    console.log("more", more);
    return quickSort(less).concat(pivot, quickSort(more));
  }
}

const array = [54, 2, 765, 23, 87, 38, 22, 174];
console.log(quickSort(array));