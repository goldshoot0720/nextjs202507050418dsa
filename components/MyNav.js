import React from "react";
import Link from "next/link";
import styles from "./MyNav.module.css";

export default function MyNav(props) {
  const navLists = props.navLists;

  const navListLink = navLists.map((navList, index) => (
    <React.Fragment key={index}>
      <Link className={styles.myLink} href={navList.href}>
        {navList.label}
      </Link>{" "}
    </React.Fragment>
  ));

  return <>{navListLink}</>;
}
