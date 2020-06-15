// const objects = [
//   {
//     name: "guitar",
//     weight: 1,
//     value: 1500
//   },
//   {
//     name: "stereo", 
//     weight: 3,
//     value: 3000
//   },
//   {
//     name: "laptop",
//     weight: 4,
//     value: 4000
//   }
// ]

const objects = [
  {
    name: "water",
    weight: 3,
    value: 10
  }, 
  {
    name: "book",
    weight: 1,
    value: 3
  },
  {
    name: "food",
    weight: 2,
    value: 9
  },
  {
    name: "jacket",
    weight: 2, 
    value: 5
  },
  {
    name: "camera",
    weight: 1,
    value: 6
  }
]

function knapsackDynamicAlgorithm(objects, maxWeight) {

  const results = [];

  // For each object being assessed, we create an array, 'row'
  for (const [i, object] of objects.entries()) {
    const row = [];

    // We test backpacks of capacity's 1 to 'maxWeight' (how much the backpack can carry)
    for (let j = 1 ; j <= maxWeight ; j++) {

      // We'll record our best choice in this variable. 
      let currentBestChoice;

      // First, let's check if the object currently being assessed fits into a backpack of capacity 'j'
      if (object.weight <= j) {

        // It fits! Now we check if there is a previous result that we need to consider for comparison
        // with the object being currently assessed. 
        if (results[i - 1] && results[i - 1][j - 1]) {

          // If there is a previous result, we need to figure out it's value
          let prevResultsValue = 0;
          for (const index of results[i - 1][j - 1]) {
            prevResultsValue += objects[index].value;
          }

          let currentObjectValue = objects[i].value;

          // If there is extra space in the backpack after we add the current object being assessed,
          // we need to check if there is a result for a backpack whose capacity is equal to that extra space. 
          let bestRemainingSpaceValue = 0;
          if ((j - object.weight > 0) && results[i - 1][j - 1 - object.weight]) {
            for (const index of results[i - 1][j - 1 - object.weight]) {
              bestRemainingSpaceValue += objects[index].value;
            }
          }

          // Finally, we compare the value of the previous result with the value of the object
          // currently being assessed, as well as possibly the best value so far calculated for the
          // remaining space in the backpack (if there is remaining space). 
          if (prevResultsValue > currentObjectValue + bestRemainingSpaceValue) {
            currentBestChoice = results[i - 1][j - 1];
          }
          else {
            currentBestChoice = [i]
            if ((j - object.weight > 0) && results[i - 1] && results[i - 1][j - 1 - object.weight]) {
              currentBestChoice = currentBestChoice.concat(results[i - 1][j - 1 - object.weight]);
            }
          }
        }

        // If there isn't a previous option, we take the current object being assessed and add it's index
        // as well as the index of any objects that are a best fit for value for any possible extra space
        // inside the backpack after the current object is added. 
        else {
          currentBestChoice = [i];
          if ((j - object.weight > 0) && results[i - 1] && results[i - 1][j - 1 - object.weight]) {
            currentBestChoice = currentBestChoice.concat(results[i - 1][j - 1 - object.weight]);
          }
        }
      }

      // If the current object doesn't fit into a backpack of capacity 'j',
      // First we see if there is a previous result to use instead, or
      // we can just mark that spot as 'null' if there is no previous result. 
      else {
        if (results[i - 1] && results[i - 1][j - 1]) {
          currentBestChoice = results[i - 1][j - 1];
        }
        else {
          currentBestChoice = null;
        }
      }

      // We add the current best choice to the 'row' array. 
      row.push(currentBestChoice);

      // If we have arrived at the end of our calculations, then we are ready to publish the results. 
      if (i === objects.length - 1 && j === maxWeight) {
        console.log(`You should take the following items:`)
        for (const index of currentBestChoice) {
          console.log(`${objects[index].name}`)
        }
      }
    }

    results.push(row);
  }

  // console.log(results);
}

knapsackDynamicAlgorithm(objects, 6);