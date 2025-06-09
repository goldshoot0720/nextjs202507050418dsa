"use client";
import React, { useState } from "react";
import MyPage from "@/components/MyPage";

class StackArray {
  constructor(stack = []) {
    this.stack = [...stack];
  }

  toArrayString() {
    return "[" + this.stack.join(",") + "]";
  }

  toStackString() {
    if (this.isEmpty()) return "\n︻\n︼";
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str = "——\n" + this.stack[i] + "\n" + str;
    }
    str = "\n︻\n" + str + "——\n︼";
    return str;
  }

  push(value) {
    if (value) {
      this.stack.push(value);
      console.log(value);
    }
  }

  pop() {
    if (!this.isEmpty()) return this.stack.pop();
    else return "null";
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
    const newStack = new StackArray(stack.stack); // clone 現有 stack
    newStack.push(inputValue);
    setStack(newStack); // 這樣 reference 變了 → React 會 re-render
    setInputValue("");
  }

  function handleClickForPop() {
    const newStack = new StackArray(stack.stack);
    const value = newStack.pop();
    setPopValue(value);
    setStack(newStack);
  }
  return (
    <>
      <MyPage title="Stack Array Page" />
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
          {stack.isEmpty() && <pre>Stack Array is empty.</pre>}
          <pre>
            pop:{popValue}
            {"\n"}
            top:{stack.top()}
            {"\n"}
            size:{stack.size()}
            {"\n"}
            toArrayString():{stack.toArrayString()}
            {"\n"}
            toStackString():{stack.toStackString()}
            {"\n"}
          </pre>
        </h2>
      </div>
    </>
  );
}
