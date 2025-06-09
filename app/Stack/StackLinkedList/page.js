"use client";
import React, { useState } from "react";
import MyPage from "@/components/MyPage";

class StackLinkedList {
  constructor() {}

  toLinkedListString() {}

  toStackString() {}

  push(value) {}

  pop() {}

  size() {}

  top() {}

  isEmpty() {}
}

export default function StackArrayPage() {
  const [stack, setStack] = useState(new StackLinkedList());
  const [inputValue, setInputValue] = useState("");
  const [popValue, setPopValue] = useState("");
  function handleChangeForInput(e) {
    setInputValue(e.target.value);
  }

  function handleClickForPush() {}

  function handleClickForPop() {}
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
