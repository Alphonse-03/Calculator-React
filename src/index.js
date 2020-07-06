import React from "react";
import ReactDOM from "react-dom";
import { Add, Sub, Mul, Div } from "./add";
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{Add(1, 2)}</li>
    <li>{Sub(7, 2)}</li>
    <li>{Mul(2, 3)}</li>
    <li>{Div(9, 2)}</li>
  </ul>,
  document.getElementById("root")
);
