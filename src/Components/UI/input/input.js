/** @format */

import React from "react";

export default function Input(props) {
  return (
    <form action=''>
      <input
        onChange={props.onChange}
        ref={props.inputRef}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        step={props.step}
        max={props.max}
        min={props.min}
      />
    </form>
  );
}
