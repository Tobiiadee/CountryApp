/** @format */

import React, { useState, useEffect, useRef } from "react";

const stateContext = React.createContext({
  active: false,
  clickHandler: () => {},
  fetchCountries: [],
});

export const ActiveContextHandler = (props) => {
  //General Use
  const [isActive, setIsActive] = useState(false);
  const [countries, setCountries] = useState([]);
  //For Search
  const [search, setSearch] = useState("");
  const [searchedCountry, setSearchedCountry] = useState(countries);
  const selectRegionRef = useRef();

  //For Select
  const [selectedRegion, setSelectedRegion] = useState("Filter by region");
  // console.log(selectedRegion);
  const [region, setRegion] = useState([]);
  const [selectActive, setSelectActive] = useState(false);

  //For Fetch
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = () => {
    setIsActive(!isActive);
  };

  async function fetchCountries() {
    try {
      setIsLoading(true);
      const fetchCountry = await fetch("https://restcountries.com/v3.1/all");

      if (!fetchCountry.ok) {
        throw new Error("Fetch country failed: " + fetchCountry.status);
      } else {
        const res = await fetchCountry.json();
        // console.log(res);

        const country = res.map((country) => {
          return {
            key: country.flag,
            svg: country.flags.svg,
            alt: country.flags.alt,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
            nativeName: country.name.nativeName,
            subRegion: country.subregion,
            tld: country.tld,
            borderCountries: country.borders,
            languages: country.languages,
          };
        });

        setCountries(country);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      fetchCountries();
  }, []);

  //For Search
  const searchedCountryHandler = () => {
    const filteredCountry = countries.find((country) => {
      return country.name
        .toLowerCase()
        .includes(search.trim().toLocaleLowerCase());
    });

    if (!filteredCountry) {
      return;
    } else {
      setSearchedCountry([filteredCountry]);
    }
  };

  const searchHandler = (e) => {
    setSelectActive(false);
    setSearch(e.target.value);
    if (search.trim() === "") {
      return;
    }
    searchedCountryHandler();
  };

  //For Select

  const regions = countries.map((country) => country.region);
  const uniqueRegions = [...new Set(regions)];
  // const uniqueRegions = regions.filter((value, index, self) => {
  //   return self.indexOf(value) === index;
  // });
  // console.log(uniqueRegions);

  const selectRegionHandler = () => {
    const filteredRegion = countries.filter((country) => {
      return country.region.includes(selectRegionRef.current.value);
    });
    setRegion(filteredRegion);
  };

  const selectRegion = (e) => {
    setSelectActive(true);
    setSelectedRegion(e.target.value);
    selectRegionHandler();
  };

  return (
    <stateContext.Provider
      value={{
        active: isActive,
        clickHandler: onClickHandler,
        fetchCountries: countries,
        selectRegion,
        searchHandler,
        search,
        region,
        selectedRegion,
        searchedCountry,
        uniqueRegions,
        selectRegionRef,
        selectActive,
        isLoading
      }}>
      {props.children}
    </stateContext.Provider>
  );
};

export default stateContext;
