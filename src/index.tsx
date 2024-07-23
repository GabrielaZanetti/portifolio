import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './global.scss'
import Inicial from './pages/Inicial'
import MaisSobre from './pages/sobreMim'
import NotFound from './pages/error404/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Router basename="/portifolio">
            <Routes>
                <Route path="/" element={<Inicial />} />
                <Route path="/mais-sobre" element={<MaisSobre />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
