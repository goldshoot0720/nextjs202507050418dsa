import React from "react";
import Link from "next/link";

export default function MyNav(props) {
  const navLists = props.navLists;

  const navListLink = navLists.map((navList, index) => (
    <React.Fragment key={index}>
      <Link href={navList.href}>{navList.label}</Link>{" "}
    </React.Fragment>
  ));

  return <>{navListLink}</>;
}
