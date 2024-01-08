/** @format */

import React, { useContext } from "react";
import stateContext from "../../../Store/Context/state-context";
import Nav from "../../Header/Nav-JS/Nav";
import SearchSection from "../../Search-section/Search-section";
import Countries from "../Countries/Countries";
// import CountryDetails from "../Countries/CountryDetails";

export default function Body() {
  const { active: isActive } = useContext(stateContext);

  return (
    <main
      className={`h-full pb-8 transition duration-300 ease-in-out relative ${
        !isActive ? "bg-primary-2" : "bg-secondary-2"
      }`}>
      <Nav />
      {/* <CountryDetails/> */}
      <SearchSection />
      <Countries />
    </main>
  );
}
