import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.scss'
import Inicial from './pages/Inicial'
import MaisSobre from './pages/sobreMim';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portifolio" element={<Inicial />} />
        <Route path="/mais-sobre" element={<MaisSobre />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
