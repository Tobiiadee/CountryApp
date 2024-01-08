/** @format */

import React from "react";
import SelectRegion from "./SelectRegion";
import SearchCountry from "./SearchCountry";

export default function SearchSection(props) {

  return (
    <div className='flex justify-around md:justify-between mt-14 font-body md:w-4/6 mx-auto'>
      <SearchCountry/>
      <SelectRegion />
    </div>
  );
}
