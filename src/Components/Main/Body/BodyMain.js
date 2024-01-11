/** @format */

import React from "react";
import Header from "../../Header/Header/Header";
import Body from "./Body";
import SearchSection from "../../Search-section/Search-section";
import CountriesMain from "../Countries/CountriesMain";

export default function BodyMain() {
  return (
    <div className="pt-10">
      <Body />
      <Header/>
      <SearchSection />
      <CountriesMain/>
    </div>
  );
}
