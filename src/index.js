//Third Party modules, react-icons 
//Installed: npm install react-icons --save
//Import icons
import {VscBug} from 'react-icons/vsc'
import {VscGlobe} from 'react-icons/vsc'

//More components:
/* Search:
      - Material UI
*/

import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const handleChange = (e)=> {
    console.log(e.target.value )
} 

root.render(
  <>
  <VscBug></VscBug>
  <VscGlobe/>
  
  </>
);


