// Hooks: useStage
// https://reactjs.org/docs/hooks-reference.html#usestate

//Import useState
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter(){
  let counter =0;

  //No se actuala
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
         counter = counter+10;
      }}>Add</button>
    </div>
  )
}

root.render(
  <>

  </>
);


