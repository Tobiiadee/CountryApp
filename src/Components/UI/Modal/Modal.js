/** @format */

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

export default function Modal(props) {
    const portalElement = document.getElementById("overlays")

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {props.children}
    </Fragment>
  );
}
