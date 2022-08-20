import React from 'react'
import ReactDOM from 'react-dom/client'

//ROOT ELEMENT from '../public/index.html' of the element with id="root"
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(<h1>Hello world</h1>)