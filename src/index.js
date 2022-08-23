//  defaultProps
// Created component Button.js
// Send parameter text 

import React from "react";
import ReactDOM from "react-dom/client";
import {Button} from "./Button"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Button text='Pay'/>
    {/*IF not send parameter the componet use the parameter for dafault => 'click me'*/}
    <Button />
    </>
);


