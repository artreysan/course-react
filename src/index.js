// JSX
// JSX = JavaScript + HTML

import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Greeting() {
    //Objects
    const user = {
        firstname: 'ryan',
        lastname: 'Ray',
        married: false
    }
    //Convert objecto to string
    return <div>
        <h1>{JSON.stringify(user.firstname)}</h1>
        <h2>{JSON.stringify(user.lastname)}</h2>
        {/*Boolean*/}
        <h3>{user.married.toString() }</h3>
    </div>;
}

root.render(<Greeting />);
