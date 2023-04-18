import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
      links.map((value, i) => {
        return (
          <a key={i} href={"#" + value}>{value}</a>)
      })
    }</nav>;
}

export default NavBar;

// (
//   <a href="#home">home</a>, <a href="#about">about</a>,<a href="#projects">projects</a>)