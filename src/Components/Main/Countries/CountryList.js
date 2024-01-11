/** @format */

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import CountryDetails from "./CountryDetails";
import stateContext from "../../../Store/Context/state-context";

export default function CountryList(props) {
  const [clickCountry, setClickCountry] = useState(false);
  const { active: isActive } = useContext(stateContext);
  const population = props.population.toLocaleString();

  const index = props.index;

  const clickHandler = () => {
    setClickCountry(!clickCountry);
  };

  const closeClickedHandler = () => {
    setClickCountry(false);
  };

  const details = {
    svg: props.svg,
    alt: props.alt,
    name: props.name,
    population: props.population.toLocaleString(),
    capital: props.capital,
    region: props.region,
    nativeName: props.nativeName,
    subRegion: props.subRegion,
    tld: props.tld,
    languages: props.languages,
    borderCountries: props.borderCountries,
  };

  const CountryListVariant = {
    initial: {
      y: "100vw",
    },
    end: {
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 * index,
      },
    },
    exit: { x: -250 },
  };

  return (
    <div>
      {clickCountry && (
        <CountryDetails details={details} closeCountry={closeClickedHandler} />
      )}
      <motion.div
        variants={CountryListVariant}
        animate='end'
        initial='initial'
        exit='exit'
        className={`mb-6 h-72 md:w-56 shadow-md rounded md:h-80 md:hover:scale-105 focus:scale-105 md:transition cursor-pointer ${
          !isActive ? "" : "bg-secondary-1"
        }`}
        onClick={clickHandler}>
        <ul>
          <li>
            <div className='h-36 overflow-hidden'>
              <img src={props.svg} alt={props.alt} className='object-fit' />
            </div>
            <div className='px-8 py-4'>
              <h4
                className={`mb-4 font-bold text-sm md:text-lg ${
                  !isActive ? "" : "text-primary-1"
                }`}>
                {props.name}
              </h4>
              <div className={`text-sm ${!isActive ? "" : "text-primary-1"}`}>
                Population: <span className={`text-gray1 `}>{population}</span>
              </div>
              <div className={`text-sm ${!isActive ? "" : "text-primary-1"}`}>
                Region: <span className='text-gray1'>{props.region}</span>
              </div>
              <div className={`text-sm ${!isActive ? "" : "text-primary-1"}`}>
                Capital: <span className='text-gray1'>{props.capital}</span>
              </div>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
