/** @format */

import React, { useContext } from "react";
import stateContext from "../../../Store/Context/state-context";

export default function Nav(props) {
  const { active: isActive, clickHandler } = useContext(stateContext);

  return (
    <header
      className={` w-full px-5 sm:px-10 py-5 shadow-md transition duration-300 ease-in-out  ${
        !isActive ? "bg-primary-2" : "bg-secondary-1"
      }`}>
      <nav className='flex justify-between items-center font-body'>
        <h2
          className={`text-sm md:text-xl font-black font-body  ${
            !isActive ? "text-black" : "text-primary-1"
          }`}>
          Where in the world?
        </h2>

        <button
          onClick={clickHandler}
          className={`flex justify-center items-center gap-2 cursor-pointer text-sm md:text-lg font-body ${
            !isActive ? "text-black" : "text-primary-1"
          }`}>
          <span>
            {!isActive ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                />
              </svg>
            )}
          </span>
          <span
            className={`capitalize font-medium ${
              !isActive ? "text-black" : "text-primary-1"
            }`}>
            {!isActive ? "Dark mode" : "Light mode"}
          </span>
        </button>
      </nav>
    </header>
  );
}