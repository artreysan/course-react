// propTypes 
// Installed module prop-types
// Modify Button.js

import React from "react";
import ReactDOM from "react-dom/client";
import {Button} from "./Button"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Button text='Pay'/>
    <Button text= 'Hello'/>
    {/*View error in console*/}
    <Button text= {true}/>
    <Button />
    <Button text=''/>
    </>
);


