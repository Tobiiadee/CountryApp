/** @format */

import React, { useContext } from "react";

import CountryList from "./CountryList";
import stateContext from "../../../Store/Context/state-context";

export default function Countries() {
  const { fetchCountries, searchedCountry, region, selectActive, search } = useContext(stateContext);

  const mappedCountries = fetchCountries.map((country) => {
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
        borderCountries={country.borders}
        languages={country.languages}
      />
    );
  });

  const countrySearched = searchedCountry.length !== 0 &&
    searchedCountry.map((country) => {
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
          borderCountries={country.borders}
          languages={country.languages}
        />
      );
    });

  const selectedRegion = region.map((country) => {
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
        borderCountries={country.borders}
        languages={country.languages}
      />
    );
  });

  const initialCountries = !selectActive && search.trim() === "" ? mappedCountries : null;

  const searchCountries = 
  searchedCountry.length === 0 ? mappedCountries : countrySearched;

  const selectCountries= selectedRegion;


  return (
    <div className='mt-8 mx-4 py-10 md:w-4/6 md:mx-auto grid gap-4 grid-cols-2 md:grid-cols-3'>
      {initialCountries}
      {!selectActive && searchCountries}
      {selectActive && selectCountries}
    </div>
  );
}
