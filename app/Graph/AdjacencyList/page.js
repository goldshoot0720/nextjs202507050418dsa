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
  }

  let graph = new Graph();

  return (
    <>
      <h1>Adjacency List Page</h1>
      <h2>
        <pre>{graph.toString()}</pre>
      </h2>
    </>
  );
}
