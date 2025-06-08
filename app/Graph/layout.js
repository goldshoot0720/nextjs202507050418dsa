import MyNav from "@/components/MyNav";
import React from "react";

export default function GraphLayout({ children }) {
  const navLists = [
    { label: " Adjacency Matrix", href: "/Graph/AdjacencyMatrix" },
    { label: "Adjacency List", href: "/Graph/AdjacencyList" },
  ];
  return (
    <>
      <br />
      <MyNav navLists={navLists} />
      {children}
    </>
  );
}
