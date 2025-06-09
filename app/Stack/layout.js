import MyNav from "@/components/MyNav";
import React from "react";

export default function StackLayout({ children }) {
  const navLists = [
    { label: "Stack Array", href: "/Stack/StackArray" },
    { label: "Stack Linked List", href: "/Stack/StackLinkedList" },
  ];
  return (
    <>
      <br />
      <MyNav navLists={navLists} />
      {children}
    </>
  );
}
