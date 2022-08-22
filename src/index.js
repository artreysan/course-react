// PROPS

import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting,UserCard} from './Greeting'
import Product,{Navbar} from './Product'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(<>
    <UserCard number={11} title='Carta de amor'></UserCard>
    <UserCard number={12} />
    <Greeting title='Hola 1'/>
    <Greeting title='Hola 2'/>
    <Greeting title='Hola 3'/>
    <Greeting title='Hola 4'/>
    <Product></Product>
    <Navbar></Navbar>
</>);
