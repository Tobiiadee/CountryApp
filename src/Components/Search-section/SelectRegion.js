/** @format */

import React, { useContext } from "react";
import stateContext from "../../Store/Context/state-context";

export default function SelectedRegion(props) {
  const {
    active: isActive,
    selectedRegion,
    selectRegion,
    uniqueRegions,
    selectRegionRef
  } = useContext(stateContext);

  const regionOptions = uniqueRegions.map(region => {return <option className='text-xs' key={region} value={region}>{region}</option>})

  return (
    <div>
      <div className='relative flex items-center justify-around px-2 '>
        <select
          name='region'
          ref={selectRegionRef}
          value={selectedRegion}
          className={`border shadow-md w-6 md:w-32 rounded text-sm px-1 outline-none h-10 font-body leading-tight ${
            !isActive ? "" : "bg-secondary-1 text-primary-1 border-none"
          }`}
          onChange={selectRegion}>
          <option disabled value={"Filter by region"} className='text-xs'>
            Filter by region
          </option>
          {regionOptions}
        </select>
      </div>
    </div>
  );
}
