
// Event Handlers


/*eventos importantes:
onClick
onDoubleClick
onChange
onSubmit
...

INVESTIGAR A DETALLE
*/
import React from "react";
import ReactDOM from "react-dom/client";

import { Button } from './Button';


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const handleChange = (e)=> {
    console.log(e.target.value )
} 

root.render(
  <>
  <Button text='El boton'></Button>
  {/*Evento cambio*/}
  {/*Method 1*/}
  <input onChange={(e)=> {
    console.log(e.target.value )
    console.log('escribiendo en el imput')
  }}></input>
  {/*Method 2*/}
  <input onChange={handleChange}/>
  {/*Evento envio*/}
  <form onSubmit={(e)=>{
    //Cancela la recarga
    e.preventDefault()
    console.log('enviado')
  }}>  
  <h1>Registro de usuario</h1>
  <button>send</button>
  </form> 

);


