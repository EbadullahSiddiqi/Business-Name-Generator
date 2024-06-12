import React from "react";
import Inputs from "./Inputs";
import { generateName } from "../App";
import Result from "./Result";

export default function Display(props) {
  return (
    <div className="container">
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-5 rounded-2"
        tabIndex="0"
      >
        <h4 id="scrollspyHeading1">AZ will tell you your Business's Name!</h4>
        <Inputs/>
        <button onClick={generateName} className='btn btn-primary center'>Generate!</button>

      </div>
    </div>
  );
}
