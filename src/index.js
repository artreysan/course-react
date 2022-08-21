// JSX
// JSX = JavaScript + HTML

import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

//Creating component 'Greeting'
function Greeting() {
  const name = "arturo";
  const age = 24;
  const married = false;

  if (married) {
    return (
      <h1>
        Hello {name} {age - 2} {married}
      </h1>
    );
  }
  //Allow to use emotes
  return <h1>{married ? "estoy casado" : "no estoy casado 😜"}</h1>;
}

root.render(<Greeting />);
