// Hooks in React
// https://es.reactjs.org/docs/hooks-intro.html

import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const users = [
  {
    id:1,
    name:'Ryan',
    image:'https://robohash.org/user1',
  },
  {
    id:2,
    name:'Joe',
    image:'https://robohash.org/user2',
  },
]
root.render(
  <>
    {/*Recorrer arreglo user*/} 
    {users.map((user)=>{return ' hola  '+user.name})};

    {users.map(u => {return <h1>
      Adios {u.name} 
      </h1>
    })};

    {users.map((u,i)=> {return <h2 key={i}>
      Hello {u.name} with  ID ={i+1}  
      </h2>
    })}
    
    {users.map((user,i)=> {return <div>
        <h1 key ={i}>{user.name}</h1>
        <img src={user.image}/>
    </div>
    })}
  </>
);


