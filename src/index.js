// Ecmascript  

import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting,UserCard} from './Greeting'
import Product,{Navbar} from './Product'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(<>
    <UserCard></UserCard>
    <Greeting />
    <Product></Product>
    <Navbar></Navbar>
</>);
