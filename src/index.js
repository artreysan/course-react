// Component's Styles 
// Created task.css
// Import CSS in Task.js

import React from "react";
import ReactDOM from "react-dom/client";
import {TaskCard,TaskCardTwo} from './Task'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <TaskCard  ready = {false}/>
    <TaskCardTwo ready = {true}/>
  </>
);


