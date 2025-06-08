import React from "react";

export default function AdjacencyList() {
  class Graph {
    constructor() {
      this.AdjList = {};
    }
    toString() {
      return Object.entries(this.AdjList)
        .map(
          ([vertex, neighbors]) =>
            `${vertex}: ${neighbors
              .map((neighbor) => `${neighbor.node}(${neighbor.weight})`)
              .join(", ")}`
        )
        .join("\n");
    }
    addVertex(vertex) {
      if (!this.AdjList[vertex]) {
        this.AdjList[vertex] = [];
      }
    }
    addEdge(vertex1, vertex2, weight) {
      if (this.AdjList[vertex1] && this.AdjList[vertex2]) {
        this.AdjList[vertex1].push({ node: vertex2, weight });
        this.AdjList[vertex2].push({ node: vertex1, weight });
      }
    }
    removeEdge(vertex1, vertex2) {
      if (this.AdjList[vertex1] && this.AdjList[vertex2]) {
        const index1 = this.AdjList[vertex1].findIndex(
          (neighbor) => neighbor.node === vertex2
        );
        if (index1 !== -1) {
          this.AdjList[vertex1].splice(index1, 1);
        }
        const index2 = this.AdjList[vertex2].findIndex(
          (neighbor) => neighbor.node === vertex1
        );
        if (index2 !== -1) {
          this.AdjList[vertex2].splice(index2, 1);
        }
      }
    }
    bfs(startVertex) {
      if (!this.AdjList[startVertex]) return "Start vertex not found";

      let visited = new Set();
      let queue = [startVertex];
      let result = [];

      visited.add(startVertex);

      while (queue.length > 0) {
        let vertex = queue.shift();
        result.push(vertex);

        for (let neighbor of this.AdjList[vertex]) {
          if (!visited.has(neighbor.node)) {
            visited.add(neighbor.node);
            queue.push(neighbor.node);
          }
        }
      }

      return result.join(" -> ");
    }
    dfs(startVertex) {
      if (!this.AdjList[startVertex]) return "Start vertex not found";

      let visited = new Set();
      let result = [];

      const dfsHelper = (vertex) => {
        visited.add(vertex);
        result.push(vertex);

        for (let neighbor of this.AdjList[vertex]) {
          if (!visited.has(neighbor.node)) {
            dfsHelper(neighbor.node);
          }
        }
      };

      dfsHelper(startVertex);
      return result.join(" -> ");
    }

    TopologicalSort() {}
  }

  let graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addEdge("A", "B", 1);
  graph.addEdge("A", "C", 1);
  graph.addEdge("B", "E", 1);
  graph.addEdge("C", "D", 1);
  graph.addEdge("D", "E", 1);

  return (
    <>
      <h1>Adjacency List Page</h1>
      <h2>
        <pre>{graph.toString()}</pre>
      </h2>
      <h2>BFS traversal: {graph.bfs("A")}</h2>
      <h2>DFS traversal: {graph.dfs("A")}</h2>
    </>
  );
}
