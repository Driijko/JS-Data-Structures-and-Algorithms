const {Queue} = require("../../Data Structures/Linked List/Queue");

function breadthFirstSearch(graph, searchKey, test) {
  const toCheckQueue = new Queue();
  toCheckQueue.enqueue(searchKey);
  const beenChecked = [];
  let currentCheck;
  while(toCheckQueue.head !== null) {
    
    currentCheck = toCheckQueue.dequeue();

    if(beenChecked.includes(currentCheck) === false) {
      if (test(currentCheck)) {
        console.log(`${currentCheck} passes the test`);
        return currentCheck;
        break;
      } 
      else {
        beenChecked.push(currentCheck);
        for(let i = 0; i < graph[`${currentCheck}`].length; i++) {
          toCheckQueue.enqueue(graph[`${currentCheck}`][i]);
        }
      }
    }
  }
}

module.exports.breadthFirstSearch = breadthFirstSearch;