/** @format */
import { useContext } from "react";
import stateContext from "../../../Store/Context/state-context";

export default function CountryBorders(props) {
  const { active: isActive } = useContext(stateContext);

  const border =
    props.borders === undefined ? (
      <span
        className={`rounded shadow py-1 w-14 text-center text-xs font-body ${
          !isActive ? "text-black" : "text-primary-1"
        }`}>
        none
      </span>
    ) : (
      props.borders.map((border) => {
        return (
          <span
            key={border}
            className={`rounded shadow py-1 w-14 sm:w-10
            text-xs text-center font-body ${
              !isActive ? "text-black" : "text-primary-1"
            }`}>
            {border}
          </span>
        );
      })
    );

  return (
    <span
      className='flex flex-wrap justify-between
      items-center gap-2'>
      {border}
    </span>
  );
}
