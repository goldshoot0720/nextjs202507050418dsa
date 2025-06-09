"use client";
import React, { useState } from "react";
import MyPage from "@/components/MyPage";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  toLinkedListString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    return result + "null";
  }

  toStackString() {
    if (this.isEmpty()) return "\n︻\n︼";
    let str = "";
    let current = this.head;
    while (current) {
      str = str + "——\n" + current.value + "\n";
      current = current.next;
    }
    str = "\n︻\n" + str + "——\n︼";
    return str;
  }

  push(value) {
    if (value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  pop() {
    if (!this.head) return "null";
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  size() {
    return this.length;
  }

  top() {
    return this.head ? this.head.value : "null";
  }

  isEmpty() {
    return this.length === 0;
  }
}

export default function StackArrayPage() {
  const [stack, setStack] = useState(new StackLinkedList());
  const [inputValue, setInputValue] = useState("");
  const [popValue, setPopValue] = useState("");
  function handleChangeForInput(e) {
    setInputValue(e.target.value);
  }

  function handleClickForPush() {
    stack.push(inputValue);
    setInputValue("");

    // Create a shallow clone to trigger React re-render
    setStack(Object.assign(Object.create(Object.getPrototypeOf(stack)), stack));
  }

  function handleClickForPop() {
    const popped = stack.pop();
    setPopValue(popped);

    // Create a shallow clone to trigger React re-render
    setStack(Object.assign(Object.create(Object.getPrototypeOf(stack)), stack));
  }
  return (
    <>
      <MyPage title="Stack Linked List Page" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h2>
          <label>value:</label>
          <input
            type="text"
            value={inputValue}
            onChange={handleChangeForInput}
          />
          <button onClick={handleClickForPush}>push</button>
          <button onClick={handleClickForPop}>pop</button>
          <br />
          {stack.isEmpty() && <pre>Stack Linked List is empty.</pre>}
          <pre>
            pop:{popValue}
            {"\n"}
            top:{stack.top()}
            {"\n"}
            size:{stack.size()}
            {"\n"}
            toLinkedListString():{stack.toLinkedListString()}
            {"\n"}
            toStackString():{stack.toStackString()}
            {"\n"}
          </pre>
        </h2>
      </div>
    </>
  );
}
