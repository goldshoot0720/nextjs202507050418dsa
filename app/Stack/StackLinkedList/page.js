"use client";
import React, { useRef, useState } from "react";
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
    this.autoPushCount = 0; // 記錄 autoPush 次數
  }

  autoPush() {
    const start = this.autoPushCount * 100 + 1;
    const end = (this.autoPushCount + 1) * 100;
    for (let i = start; i <= end; i++) {
      this.push(i);
    }
    this.autoPushCount++;
  }

  toLinkedListString() {
    let result = "";
    let current = this.head;
    let i = 0;
    while (current) {
      if (i !== 0 && i % 10 === 0) result += "\n";
      result += current.value + "->";
      current = current.next;
      i++;
    }
    return result + "null";
  }

  toStackString() {
    if (this.isEmpty()) return "\n︻\n︼";
    let str = "";
    let current = this.head;
    while (current) {
      str += "——\n" + current.value + "\n";
      current = current.next;
    }
    return "\n︻\n" + str + "——\n︼";
  }

  push(value) {
    if (value !== "") {
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

export default function StackLinkedListPage() {
  const stackRef = useRef(new StackLinkedList());
  const [renderTrigger, setRenderTrigger] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [popValue, setPopValue] = useState("");

  function handleChangeForInput(e) {
    setInputValue(e.target.value);
  }

  function handleClickForPush() {
    stackRef.current.push(inputValue);
    setInputValue("");
    setRenderTrigger((prev) => prev + 1);
  }

  function handleClickForPop() {
    const popped = stackRef.current.pop();
    setPopValue(popped);
    setRenderTrigger((prev) => prev + 1);
  }

  function handleClickForAutoPush() {
    stackRef.current.autoPush();
    setPopValue("");
    setRenderTrigger((prev) => prev + 1);
  }

  const stack = stackRef.current;

  return (
    <>
      <MyPage title="Stack Linked List Page" />
      <div className="container">
        <h2>
          <label htmlFor="inputValue">value:</label>
          <input
            id="inputValue"
            type="text"
            value={inputValue}
            onChange={handleChangeForInput}
          />
          <button onClick={handleClickForPush}>push</button>
          <button onClick={handleClickForPop}>pop</button>
          <button onClick={handleClickForAutoPush}>autoPush</button>
          <br />
          {stack.isEmpty() && <pre>Stack Linked List is empty.</pre>}
          <pre className="stack-info">
            pop: {popValue}
            {"\n"}
            top: {stack.top()}
            {"\n"}
            size: {stack.size()}
            {"\n"}
            Linked List: {"\n"}
            {stack.toLinkedListString()}
            {"\n"}
            Stack: {"\n"}
            {stack.toStackString()}
            {"\n"}
          </pre>
        </h2>
      </div>

      <style jsx>{`
        .container {
          max-width: 600px;
          width: 90vw;
          padding: 1rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        h2 {
          width: 100%;
        }
        label {
          font-weight: bold;
        }
        input {
          width: 60%;
          min-width: 150px;
          max-width: 300px;
          font-size: 1rem;
          margin-left: 0.5rem;
          padding: 0.3rem;
          box-sizing: border-box;
        }
        button {
          margin-left: 0.5rem;
          padding: 0.4rem 0.8rem;
          font-size: 1rem;
          cursor: pointer;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #f0f0f0;
          transition: background-color 0.2s ease;
        }
        button:hover {
          background-color: #e0e0e0;
        }
        pre {
          white-space: pre-wrap;
          text-align: left;
          font-size: 0.9rem;
          max-height: 400px;
          overflow-y: auto;
          background-color: #f9f9f9;
          padding: 0.5rem;
          border-radius: 4px;
          margin-top: 1rem;
          line-height: 1.3;
        }
        .stack-info {
          white-space: pre-wrap;
        }

        /* 小螢幕手機優化 */
        @media (max-width: 480px) {
          input {
            width: 100% !important;
            margin-left: 0 !important;
            margin-bottom: 0.5rem !important;
          }
          button {
            margin-left: 0 !important;
            margin-bottom: 0.5rem !important;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
