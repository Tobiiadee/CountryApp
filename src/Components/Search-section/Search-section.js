/** @format */

import React from "react";
import SelectRegion from "./SelectRegion";
import SearchCountry from "./SearchCountry";

export default function SearchSection(props) {
  return (
    <div
      className={`fixed z-50 left-10 sm:left-24 md:left-52
       flex justify-center md:flex-row sm:justify-between 
       mt-14 sm:mt-14 font-body w-11/12 sm:w-4/6 mx-auto  `}>
      <SearchCountry />
      <SelectRegion />
    </div>
  );
}
