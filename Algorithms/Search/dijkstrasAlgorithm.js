// The algorithm takes a given graph, and for a given start and finish node, determines the shortest path
// in terms of weighted edges. 
function dijkstrasAlgorithm(graph, start, finish) {

  // Setup
  const [costs, parents] = setupCostsAndParents(graph, start);
  const processed = [start];
  const messages = [];

  // Main Loop
  for (iteration in costs) {

    // Determine cheapest
    const cheapest = cheapestNode(costs, processed);

    // Loop through neighbours, update costs if necessary
    for (node in graph[cheapest]) {
      if (graph[cheapest][node] + costs[cheapest] < costs[node]) {
        costs[node] = graph[cheapest][node] + costs[cheapest];
        parents[node] = cheapest;
      }
    }

    // Mark node as processed. 
    processed.push(cheapest);

  }

  // Print out results
  let destinationNode = finish;
  while (parents[destinationNode]) {
    messages.unshift(
      `Arrive at ${destinationNode} from ${parents[destinationNode]} at the cost of ${costs[destinationNode] - (costs[parents[destinationNode]] ? costs[parents[destinationNode]]: 0) }`);
    destinationNode = parents[destinationNode];
  }
  messages.push(`Total cost: ${costs[finish]}`);
  for (message of messages) {
    console.log(message);
  }

}

function setupCostsAndParents(graph, start) {
  const costs = {};
  const parents = {};
  for (node in graph) {
    if (node !== start) {
      if (graph[start].hasOwnProperty(node)) {
        costs[node] = graph[start][node];
        parents[node] = start;
      }
      else {
        costs[node] = Infinity;
        parents[node] = null;
      }
    }
  }
  return [costs, parents];
}

function cheapestNode(costs, processed) {
  let cheapestCost = Infinity;
  let cheapestNode = null;
  for (node in costs) {
    if (processed.includes(node) === false && costs[node] <= cheapestCost) {
      cheapestNode = node;
      cheapestCost = costs[node];
    }
  }
  return cheapestNode;
}

module.exports.dijkstrasAlgorithm = dijkstrasAlgorithm;