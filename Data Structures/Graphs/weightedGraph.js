const {dijkstrasAlgorithm} = require("../../Algorithms/Search/dijkstrasAlgorithm");

// const graph = {
//   "start": {
//     "a": 6,
//     "b": 2
//   },
//   "a" : {
//     "fin": 1
//   },
//   "b" : {
//     "a": 1,
//     "fin": 5
//   }, 
//   "fin": {}
// }

// const graph = {
//   "start": {
//     "a": 6,
//     "b": 2
//   },
//   "a" : {
//     "c": 10
//   },
//   "b" : {
//     "a": 1,
//     "c": 5
//   }, 
//   "c": {
//     "d": 4,
//     "fin": 3
//   },
//   "d": {
//     "fin": 1
//   }, 
//   "fin": {}
// }

const graph = {
  "start" : {
    "a": 2,
    "b": 2
  },
  "a": {
    "c": 2,
    "fin": 2,
  },
  "b": {
    "a": 2,
  },
  "c": {
    "b": -1,
    "fin": 2,
  }, 
  "fin": {}
}

dijkstrasAlgorithm(graph, "start", "fin");

