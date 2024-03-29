/** @format */

import React, { useContext } from "react";
import { motion } from "framer-motion";
import stateContext from "../../../Store/Context/state-context";
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import CountryBorders from "./CountryBorders";

export default function CountryDetails(props) {
  const { active: isActive } = useContext(stateContext);

  const countrylanguages = props.details.languages;

  const languageKeys = Object.keys(countrylanguages);
const lang = languageKeys.map((lang) => (
    <span className='text-gray1 ml-1' key={lang}>
      {lang}
    </span>
  ));


  const CountryDetailsVariant = {
    initial: {
      x: -250,
    },
    end: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: { x: 250 },
  };

  return (
    <Modal onClick={props.closeCountry}>
      <motion.div
        variants={CountryDetailsVariant}
        animate='end'
        initial='initial'
        exit='exit'
        className={`flex flex-col gap-14 w-full md:w-4/6  md:mx-auto
         rounded shadow-md md:mt-10 md:px-10 py-10 fixed z-50 h-full
          md:h-5/6 left-0 top-0 md:left-52 md:top-8 font-body ${
            !isActive ? "bg-primary-2" : "bg-secondary-2"
          }`}>
        <Card
          className='w-24 flex justify-center items-center
         mb-5 hover:shadow-lg ml-8 md:ml-0'>
          <button
            className='flex justify-center gap-2 items-center h-7 w-full '
            onClick={props.closeCountry}>
            <span className=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`w-5 h-6 ${
                  !isActive ? "text-black" : "text-primary-1"
                }`}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
                />
              </svg>
            </span>
            <span
              className={`text-xs ${
                !isActive ? "text-black" : "text-primary-1"
              }`}>
              Back
            </span>
          </button>
        </Card>
        <div
          className='grid md:flex justify-between sm:pl-16 sm:mt-10
         md:mt-0 w-4/5 md:w-full gap-8 ml-6 md:mx-0 '>
          <div className=' w-80 self-center block mx-auto md:mx-0 sm:w-96 '>
            <img src={props.details.svg} alt={props.details.alt} />
          </div>

          <div className=' w-full md:w-6/12 mt-4'>
            <h4
              className={`mb-5 font-bold text-lg ${
                !isActive ? "text-black" : "text-primary-1"
              }`}>
              {props.details.name}
            </h4>
            <div className='flex justify-between'>
              <span
                className={`text-xs font-medium ${
                  !isActive ? "text-black" : "text-primary-1"
                }`}>
                <div className='mb-1'>
                  Native Name:{" "}
                  <span className='text-gray1'>{props.details.nativeName}</span>
                </div>
                <div className='mb-1'>
                  Population:{" "}
                  <span className='text-gray1'>{props.details.population}</span>
                </div>
                <div className='mb-1'>
                  Region:{" "}
                  <span className='text-gray1'>{props.details.region}</span>
                </div>
                <div className='mb-1'>
                  Sub Region:{" "}
                  <span className='text-gray1'>{props.details.subRegion}</span>
                </div>
                <div className='mb-1'>
                  Capital:{" "}
                  <span className='text-gray1'>{props.details.capital}</span>
                </div>
              </span>
              <span
                className={`text-xs font-medium ${
                  !isActive ? "text-black" : "text-primary-1"
                }`}>
                <div className='mb-1'>
                  Top Level Domain:{" "}
                  <span className='text-gray1'>{props.details.tld}</span>
                </div>
                <div className='mb-1'>
                  Language: {lang}
                  {/* <span className='text-gray1'>{language}</span> */}
                </div>
              </span>
            </div>
            <div className='flex'>
              <span className='flex justify-around items-center gap-4 mt-8'>
                <h6
                  className={`text-sm font-body ${
                    !isActive ? "text-black" : "text-primary-1"
                  }`}>
                  Border Countries:
                </h6>
                <CountryBorders borders={props.details.borderCountries} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
}
