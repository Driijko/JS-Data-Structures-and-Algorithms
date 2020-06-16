// This example is taken from the book "Grokking Algorithms" by Aditya Y. Bhargava. 
// The scenario being modelled: You are a baker trying to decide how many loaves to bake on a given day
// The factors that affect your choice: How's the weather (scale of 1 - 5), is it a holiday or weekend (1 for yes,
// 0 for no), is it a game day (1 for yes, 0 for no). The 'value' property indicates how many loaves were
// sold on a previous day. 

const today = {
  weather: 4,
  holiday: 0,
  game: 0
}

const data = {
  "A": {
    weather: 5,
    holiday: 1,
    game: 0,
    value: 300
  },
  "B": {
    weather: 3,
    holiday: 1,
    game: 1,
    value: 225
  },
  "C": {
    weather: 1,
    holiday: 1,
    game: 0,
    value: 75
  },
  "D": {
    weather: 4,
    holiday: 0,
    game: 1,
    value: 200
  },
  "E": {
    weather: 5,
    holiday: 0,
    game: 0,
    value: 150
  },
  "F": {
    weather: 2,
    holiday: 0,
    game: 0,
    value: 50
  },
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// We can calculate how similar two nodes are by the distance between their features. 
function distance(a, b) {
  return (
    round(
      Math.sqrt(
        Math.pow(a.weather - b.weather, 2)
        + Math.pow(a.holiday - b.holiday, 2)
        + Math.pow(a.game - b.game, 2)
      ),
      3
    )
  )
}

// We gather the similarity comparisons of the current day to the other days
function similarityRank(current, data) {

  const similarity = {};

  for (const node in data) {
    similarity[node] = distance(current, data[node]);
  }
  return similarity;
}

// Here's the trickiest bit: we find to find 'n' nearest neighbours to our current day. 
// This function returns an array with the name of 'n' days that are the most similar (lowest numbers). 
function nNearest(similarityRank, numNearest) {
  const nMostSimilar = [null, null, null];
  for (const node in similarityRank) {
    for(let i = 0; i < nMostSimilar.length; i++) {
      if (nMostSimilar[i] === null) {
        nMostSimilar[i] = node;
        break;
      }
      else if (similarityRank[node] < similarityRank[nMostSimilar[i]]) {
        nMostSimilar.splice(i, 0, node);
        nMostSimilar.splice(numNearest, 1);
        break;
      }
    }
  }
  return nMostSimilar;
}

// Knowing the 'n' most similar days, we average the number of loaves sold on those days, getting
// us our final answer to how many loaves we should bake for the current day. 
function average(nMostSimilar) {
  let totalValue = 0;
  for (const node of nMostSimilar) {
    totalValue += data[node].value;
  }
  totalValue = round(totalValue / nMostSimilar.length, 3);
  console.log(totalValue);
}

average(nNearest(similarityRank(today, data), 3));