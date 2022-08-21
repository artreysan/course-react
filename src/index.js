// JSX
// JSX = JavaScript + HTML

import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Greeting() {
    //Function in fuction
    function add(x,y){
        return x+y;
    }
    return <div>
        {/*Boolean*/}
        <h3>{add(10,30)}</h3>
    </div>;
}

//Fragment <> </>
// Remove father tag or clean tag 
root.render(<>
    <Greeting />
</>);
