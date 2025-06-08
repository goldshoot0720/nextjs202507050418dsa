"use client";
import React, { useState } from "react";

export default function MyPage(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
