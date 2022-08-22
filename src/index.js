// PROPS

import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      point={[99, 33.4, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function(){alert('Hola Ryan')}}
    ></UserCard>
    <UserCard
      name="Homer"
      amount={5000}
      married={false}
      point={[99 ]}
      address={{ street: "Allways Street", city: "CDMX" }}
      greet={function(){alert('Hola Homer')}}
    />  
    </>
);
