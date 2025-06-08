import React from "react";

export default function AdjacencyMatrix() {
  class Graph {
    constructor(vertices) {
      this.AdjMatrix = [];
      this.vertices = vertices;
      for (let i = 0; i < vertices; i++) {
        this.AdjMatrix[i] = [];
        for (let j = 0; j < vertices; j++) {
          this.AdjMatrix[i][j] = 0;
        }
      }
    }
    toString() {
      return this.AdjMatrix.map((row) => row.join(" ")).join("\n");
    }
    addEdge(v1, v2, weight = 1) {
      if (v1 >= this.vertices || v2 >= this.vertices) {
        return;
      }
      this.AdjMatrix[v1][v2] = weight;
      this.AdjMatrix[v2][v1] = weight;
    }
    removeEdge() {
      if (v1 >= this.vertices || v2 >= this.vertices) {
        return;
      }
      this.AdjMatrix[v1][v2] = 0;
      this.AdjMatrix[v2][v1] = 0;
    }
  }
  let graph = new Graph(5);
  return (
    <>
      <h1>Adjacency Matrix Page</h1>
      <h2>
        <pre>{graph.toString()}</pre>
      </h2>
    </>
  );
}
