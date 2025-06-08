"use client";
import React, { useState } from "react";
import styles from "./MyPage.module.css";

export default function MyPage({ title, color, hover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h1
        className={styles.title}
        style={{ color: isHovered ? hover : color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </h1>
    </div>
  );
}
