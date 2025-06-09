"use client";
import React, { useState } from "react";
import MyPage from "@/components/MyPage";

class StackArray {
  constructor(stack = []) {
    this.stack = [...stack];
    this.autoPushCount = 0; // 記錄 autoPush 次數
  }

  autoPush() {
    // 每次推入 100 筆，範圍依照 autoPushCount 遞增
    const start = this.autoPushCount * 100 + 1;
    const end = (this.autoPushCount + 1) * 100;
    for (let i = start; i <= end; i++) {
      this.stack.push(i);
    }
    this.autoPushCount++;
  }

  toArrayString() {
    if (this.isEmpty()) return "[]";
    let str = "[";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i];
      if (i !== this.stack.length - 1) str += ",";
      if (i !== 0 && i % 10 === 0) str += "\n";
    }
    return str + "]";
  }

  toStackString() {
    if (this.isEmpty()) return "︻\n︼";
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str = "——\n" + this.stack[i] + "\n" + str;
    }
    return "︻\n" + str + "——\n︼";
  }

  push(value) {
    if (value !== "") this.stack.push(value);
  }

  pop() {
    return this.isEmpty() ? "null" : this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  top() {
    return this.stack[this.stack.length - 1] || "null";
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

export default function StackArrayPage() {
  const [stack, setStack] = useState(new StackArray());
  const [inputValue, setInputValue] = useState("");
  const [popValue, setPopValue] = useState("");

  function handleChangeForInput(e) {
    setInputValue(e.target.value);
  }

  function handleClickForPush() {
    stack.push(inputValue);
    setInputValue("");
    // 這行用 Object.assign 保持類別方法
    setStack(Object.assign(Object.create(Object.getPrototypeOf(stack)), stack));
  }

  function handleClickForPop() {
    const popped = stack.pop();
    setPopValue(popped);
    setStack(Object.assign(Object.create(Object.getPrototypeOf(stack)), stack));
  }

  function handleClickForAutoPush() {
    stack.autoPush();
    setPopValue("");
    setStack(Object.assign(Object.create(Object.getPrototypeOf(stack)), stack));
  }

  return (
    <>
      <MyPage title="Stack Array Page" />
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
          {stack.isEmpty() && <pre>Stack Array is empty.</pre>}
          <pre className="stack-info">
            pop: {popValue}
            {"\n"}
            top: {stack.top()}
            {"\n"}
            size: {stack.size()}
            {"\n"}
            Array: {"\n"}
            {stack.toArrayString()}
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
          white-space: pre-wrap; /* 自動換行 */
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
