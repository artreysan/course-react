// My first component
import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

//Creating component 'Greeting'
function Greeting(){
    return  <di>
                <h1>Hello World</h1>
                <p>lorem 3 </p>
            </di> 
}

root.render(
    <div>
        {/*Call component method 1*/}
        {Greeting()} 
        {/*Call component method 2*/}
        <Greeting></Greeting>
    </div>
)