/** @format */

import React, { useContext } from "react";
import stateContext from "../../Store/Context/state-context";
import Input from "../UI/input/input";

export default function SearchCountry() {
  const {
    active: isActive,
    search,
    searchHandler,
  } = useContext(stateContext);

  return (
    <div>
      <div
        className={`flex items-center rounded ${
          !isActive ? "" : "border-none bg-secondary-1"
        } h-10 shadow-md`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-5 ml-2 text-gray1 ${
            !isActive ? "" : "text-primary-1"
          } h-10 shadow-md}`}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>

        <Input
          type={"text"}
          value={search}
          onChange={searchHandler}
          placeholder={"Search for a country..."}
          className={`w-50 md:w-72 h-6 px-2 py-4 border-none outline-none text-black placeholder-gray1 text-sm font-body ${
            !isActive ? "" : "bg-secondary-1 text-primary-1"
          }`}
        />
      </div>
    </div>
  );
}
