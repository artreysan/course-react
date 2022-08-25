// Hooks: useStage
// https://reactjs.org/docs/hooks-reference.html#usestate

//Import useState
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter(){
  //useCase return a Arry, 1: variable and function
  // variable is same to counter = 10
  // function: change the state of variable 
  const [counter, setCounter] = useState(10);
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Add</button>
      <button onClick={()=>{
        setCounter(counter-1)
      }}>Sub</button>
      <button onClick={()=>{
        setCounter(0)
      }}>Reset</button>
    </div>

  )
}

root.render(
  <>
    <Counter></Counter>
  </>
);


