"use client";
import React, { useState } from "react";
import MyPage from "@/components/MyPage";

class StackArray {
  constructor(
    stack = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
    ]
  ) {
    this.stack = [...stack];
  }

  toArrayString() {
    if (this.isEmpty()) return "\n[]";
    let str = "\n[";
    for (let i = 0; i < this.stack.length; i++) {
      str = str + this.stack[i];
      if (i != this.stack.length - 1) str = str + ",";
      if (i !== 0 && i % 10 === 0) str = str + "\n";
    }
    return str + "]";
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
            Array:{stack.toArrayString()}
            {"\n"}
            Stack:{stack.toStackString()}
            {"\n"}
          </pre>
        </h2>
      </div>
    </>
  );
}
