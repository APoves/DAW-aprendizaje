import React from 'react'
import ReactDOM from 'react-dom/client'
import {CounterApp} from './CounterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 0 }/>
  </React.StrictMode>,
)
