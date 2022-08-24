// FETCH API 

// Created Post.js
// Import Component
import {Post} from './Post.js'
// importamos datos de json en el archivo Post.js

import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const handleChange = (e)=> {
    console.log(e.target.value )
} 

root.render(
  <>
  <Post></Post>
  </>
);


