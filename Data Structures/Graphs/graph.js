// const {Queue} = require("../Linked List/Queue");
const {breadthFirstSearch} = require("../../Algorithms/Search/breadthFirstSearch");

const graph = {};
graph["you"] = ["Claire", "Alice", "Bob"];
graph["Bob"] = ["Anuj", "Betty"];
graph["Alice"] = ["Betty"];
graph["Claire"] = ["Jonny", "Thom"];
graph["Anuj"] = [];
graph["Betty"] = [];
graph["Jonny"] = [];
graph["Thom"] = [];

function nameEndsInM(name) {
  if(name.slice(-1) === "m") return true;
  else return false;
}

breadthFirstSearch(graph, "you", nameEndsInM);
