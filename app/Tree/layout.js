import MyNav from "@/components/MyNav";
import React from "react";

export default function TreeLayout({ children }) {
  const navLists = [
    { label: "Binary Tree", href: "/Tree/BinaryTree" },
    { label: "Binary Search Tree", href: "/Tree/BinarySearchTree" },
    { label: "AVL Tree", href: "/Tree/AVLTree" },
    { label: "Binary Heap", href: "/Tree/BinaryHeap" },
  ];
  return (
    <>
      <br />
      <MyNav navLists={navLists} />
      {children}
    </>
  );
}
