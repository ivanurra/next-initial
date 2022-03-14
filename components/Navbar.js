import Link from "next/link";
import React from "react";
// import styles from "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <a href="/Contact">Contact</a>
      <a href="/About">About</a>
    </nav>
  );
};
