"use client";
import React, { useState } from "react";
import MyPage from "@/components/MyPage";

export default function Stack() {
  class StackArray {
    constructor(stack = []) {
      this.stack = stack;
    }

    toArrayString() {
      return "[" + this.stack.join(",") + "]";
    }

    toStackString() {
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
      return this.stack.pop();
    }

    size() {
      return this.stack.length;
    }

    top() {
      return this.stack[this.stack.length - 1];
    }

    isEmpty() {
      return this.stack.length === 0;
    }
  }

  const [stack1, setStack1] = useState(new StackArray());
  const [value, setValue] = useState("");

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handlePushClick() {
    const newStack = new StackArray([...stack1.stack]);
    newStack.push(value);
    setStack1(newStack);
    setValue("");
  }

  return (
    <>
      <MyPage title="Stack Page" />
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
          <input type="text" value={value} onChange={handleInputChange} />
          <button onClick={handlePushClick}>push</button>
          <br />
          {stack1.isEmpty() ? (
            <pre>StackArray is empty.</pre>
          ) : (
            <pre>
              toArrayString():{stack1.toArrayString()}
              {"\n"}
              toStackString():{stack1.toStackString()}
            </pre>
          )}
        </h2>
      </div>
    </>
  );
}
