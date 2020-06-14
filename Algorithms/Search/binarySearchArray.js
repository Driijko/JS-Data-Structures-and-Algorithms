// Assumes array is sorted smallest to largest
function binarySearchArray(value, array) {

  if (array.length === 0) {
    console.log("This array is empty");
    return;
  }

  let min = 0;
  let max = array.length - 1;

  if ( value < array[ min ] || value > array[ max ] ) {
    console.log( `The value ${value} is not located in this array` );
    return ;
  }

  const worstCase = Math.ceil( Math.log2( array.length ) + 1 );

  let currentIndex;

  for (let i = 0 ; i < worstCase; i++ ) {

    currentIndex = Math.floor( ( ( max - min ) / 2 ) + min ) ;
    if (array[ currentIndex ] === value ) {
      console.log( `The value ${value} is located in this array at index ${currentIndex}` );
      return;
    }
    else {
      if ( max === min ) {
        console.log( `The value ${value} is not located in this array` ) ;
        return;
      }
      else if ( array[ currentIndex ] < value ) min = currentIndex + 1 ;
      else if ( array[ currentIndex ] > value ) max = currentIndex - 1 ;
    }
  }
}

// EXAMPLE
const array = [1, 3 ];

binarySearchArray(3, array);

console.log(Math.log2(1580000))