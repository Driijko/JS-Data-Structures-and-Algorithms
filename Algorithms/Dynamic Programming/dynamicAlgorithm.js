// This example is taken from the book "Grokking Algorithms" by Aditya Y. Bhargava. 
// The scenario being modelled: You are a thief with a backpack that can carry 4lbs worth of objects
// Which objects should you steal?

const objects = [
  {
    name: "guitar",
    weight: 1,
    value: 1500
  },
  {
    name: "stereo", 
    weight: 3,
    value: 3000
  },
  {
    name: "laptop",
    weight: 4,
    value: 4000
  }
]


function dynamicAlgorithm(objects, maxWeight) {
  
  const results = [];
  
  for (const [i, object] of objects.entries()) {      
    const row = []; // For each object we create a row
   
    // For each object, we need to compare it's value relative to a series of backpack capacities: 1lb (j = 1),
    // 2lbs (j = 2), etc, up to 4lbs
    for (let j = 1; j <= maxWeight; j++) {
      
      // We need to check if an object has already been assessed, to supply us with comparative values
      if (results[i - 1]) {

        // We check to see if the object will fit in a backpack of capacity 'j'
        if (object.weight <= j) {

          // We check to see if there is any remaining space within the backpack. 
          let bestChoiceForRemainingSpace = 0;
          if (j - object.weight > 0) {
            bestChoiceForRemainingSpace = results[i - 1][j - object.weight];
          }

          console.log(object.value + bestChoiceForRemainingSpace)

          if (results[i - 1][j - 1] < (object.value + bestChoiceForRemainingSpace)) {
            row[j - 1] = object.value + bestChoiceForRemainingSpace;
          }
          else {
            row[j - 1] = results[i - 1][j - 1];
          }
        }
        // If it doesn't fit, we use the last value given for a backpack of capacity 'j'
        else {
          row[j - 1] = results[i - 1][j - 1];
        }
      }
      // This case is for the first object being assessed. 
      else {
        // We check to see if the object will fit in a backpack of capacity 'j'
        if (object.weight <= j) {
          row[j - 1] = object.value;
        }
        // Otherwise we give a value of zero. 
        else {
          row[j - 1] = 0;
        }
      }
    }
    results.push(row);
  }
  console.log(results);
}

dynamicAlgorithm(objects, 4);