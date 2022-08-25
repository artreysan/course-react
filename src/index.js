// Hooks: useStage
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter(){
  const [msj, setMessage] = useState('');
  
  return (
    <div>
      <input onChange={e => setMessage(e.target.value)}></input>
      <button onClick={() => {alert('El mensaje es: '+msj)}}>Save</button>      
    </div>
  )
}

root.render(
  <>
    <Counter></Counter>
  </>
);


