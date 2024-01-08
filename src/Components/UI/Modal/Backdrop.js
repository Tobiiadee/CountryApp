/** @format */

import React from "react";

export default function Backdrop(props) {
  return (
    <div onClick={props.onClick}>
      <div className='bg-black opacity-60 w-full h-full fixed top-0 left-0 z-20'></div>
    </div>
  );
}
