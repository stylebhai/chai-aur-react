import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  "Click me to visit Google"
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
