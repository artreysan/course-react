// PROPS

import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting,UserCard} from './Greeting'
import Product,{Navbar} from './Product'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(<>
    <UserCard></UserCard>
    <Greeting title='string'/>
    <Greeting gret='bye'/>
    <Greeting num={30}/>
    <Greeting bool={true}/>
    <Greeting arr={[1,2,3]}/>
    <Product></Product>
    <Navbar></Navbar>
</>);
