import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ResetCSS } from './global/resetCSS'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
