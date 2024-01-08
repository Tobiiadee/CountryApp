/** @format */

import React, { useContext, useState } from "react";
// import { motion } from "framer-motion";
import CountryDetails from "./CountryDetails";
import stateContext from "../../../Store/Context/state-context";
import Card from "../../UI/Card/Card";

export default function CountryList(props) {
  const [clickCountry, setClickCountry] = useState(false);
  const { active: isActive } = useContext(stateContext);
  const population = props.population.toLocaleString();

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

  return (
    <div>
      {clickCountry && (
        <CountryDetails details={details} closeCountry={closeClickedHandler} />
      )}
      <Card
        className={`mb-6 h-72 md:w-56 md:h-80 md:hover:scale-105 focus:scale-105 md:transition cursor-pointer ${
          !isActive ? "" : "bg-secondary-1"
        }`}
        onClick={clickHandler}>
        <div>
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
        </div>
      </Card>
    </div>
  );
}
