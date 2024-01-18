/** @format */

import React, { useContext } from "react";

import CountryList from "./CountryList";
import stateContext from "../../../Store/Context/state-context";
// import spinner from "../../../images/Rolling-1s-111px.svg"

export default function Countries() {
  const {
    fetchCountries,
    searchedCountry,
    region,
    selectActive,
    search,
    isLoading,
  } = useContext(stateContext);


  const mappedCountries = fetchCountries.map((country, index) => {
    return (
      <CountryList
        key={country.key}
        name={country.name}
        region={country.region}
        svg={country.svg}
        alt={country.alt}
        capital={country.capital}
        population={country.population}
        nativeName={country.name.nativeName}
        subRegion={country.subRegion}
        tld={country.tld}
        borderCountries={country.borderCountries}
        languages={country.languages}
        index={index}
      />
    );
  });

  const countrySearched =
    searchedCountry.length !== 0 &&
    searchedCountry.map((country, index) => {
      return (
        <CountryList
          key={country.key}
          name={country.name}
          region={country.region}
          svg={country.svg}
          alt={country.alt}
          capital={country.capital}
          population={country.population}
          nativeName={country.name.nativeName}
          subRegion={country.subRegion}
          tld={country.tld}
          borderCountries={country.borderCountries}
          languages={country.languages}
          index={index}
        />
      );
    });

  const selectedRegion = region.map((country, index) => {
    return (
      <CountryList
        key={country.key}
        name={country.name}
        region={country.region}
        svg={country.svg}
        alt={country.alt}
        capital={country.capital}
        population={country.population}
        nativeName={country.name.nativeName}
        subRegion={country.subRegion}
        tld={country.tld}
        borderCountries={country.borderCountries}
        languages={country.languages}
        index={index}
      />
    );
  });

  const onCountriesLoading = isLoading && (
    <div className=' col-span-1 md:col-span-3 sm:col-span-2 mx-auto self-center'>
      <svg
        className="w-10 animate-spin"
        viewBox='0 0 14 14'
        xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' fillRule='evenodd'>
          <circle
            cx='7'
            cy='7'
            r='6'
            stroke='#000000'
            strokeOpacity='.1'
            strokeWidth='2'
          />
          <path
            fill='#000000'
            fillOpacity='.1'
            fillRule='nonzero'
            d='M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z'
          />
        </g>
      </svg>
    </div>
  );

  const initialCountries =
    !selectActive && search.trim() === "" ? mappedCountries : null;

  const searchCountries =
    searchedCountry.length === 0 ? mappedCountries : countrySearched;

  const selectCountries = selectedRegion;

  return (
    <div className='grid z-50 mx-4 py-10 md:w-4/6 md:mx-auto  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {onCountriesLoading}
      {initialCountries}
      {!selectActive && searchCountries}
      {selectActive && selectCountries}
    </div>
  );
}
