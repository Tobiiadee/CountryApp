/** @format */

import React, { useContext } from "react";
import Nav from "../Nav-JS/Nav";
import stateContext from "../../../Store/Context/state-context";

export default function Header() {
    const { active: isActive } = useContext(stateContext);

  return <header className={`fixed top-0 z-50 w-full px-5 sm:px-10 py-5 shadow-md transition duration-300 ease-in-out  ${
    !isActive ? "bg-primary-2" : "bg-secondary-1"
  }`}>
    <Nav/>
  </header>;
}
