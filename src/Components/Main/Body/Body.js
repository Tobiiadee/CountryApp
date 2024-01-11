/** @format */

import React, { useContext } from "react";
import stateContext from "../../../Store/Context/state-context";


export default function Body() {
  const { active: isActive } = useContext(stateContext);

  return (
    <main
      className={`h-full pb-8 transition duration-300 ease-in-out fixed w-full -z-20 ${
        !isActive ? "bg-primary-2" : "bg-secondary-2"
      }`}>

    </main>
  );
}
