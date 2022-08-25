// Hooks: useStage
// https://reactjs.org/docs/hooks-reference.html#usestate

//Import useState
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter(){

  const [counter, setCounter] = useState(0);
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Add</button>
    </div>
  )
}

root.render(
  <>
    <Counter></Counter>
  </>
);


