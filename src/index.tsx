import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import Inicial from './pages/Inicial'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Inicial />
  </React.StrictMode>
)
