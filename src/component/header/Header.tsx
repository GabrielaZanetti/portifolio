import React, { useEffect, useState } from 'react'
import UIElement from '../elementUi/UIElement'
import './style.scss'

const logo = require('./logo.ico') as any;

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    document.body.style.overflow = showMobileMenu && isMobile ? "hidden" : "auto";
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };        
    }, []);

    return (
        <>
            <div className="Header">
                <div className="header-itens">
                    <UIElement text='header' />
                    <div className="nav-bar">
                        <div className="icon">
                            <img src={logo} alt="Icone Nav" />
                        </div>
                        <div className="nav">
                            <a href="/portifolio/#Sobre" className="nav-item">Sobre</a>
                            <a href="/portifolio/#Projetos" className="nav-item">Projetos</a>
                            <a href="/portifolio/#Contatos" className="nav-item">Contatos</a>
                        </div>
                        <div className="nav-mobile">
                            <div className="wrapper">
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" id="toggle" onChange={() => setShowMobileMenu(!showMobileMenu)} checked={showMobileMenu} />
                                    <label className="checkbox" htmlFor="toggle">
                                        <div className="trace"></div>
                                        <div className="trace"></div>
                                        <div className="trace"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isMobile && (
                        <div id="menu-mobile" className={`nav-mobile ${showMobileMenu ? 'show' : 'hide'}`}>
                            <div className="itens-mobile">
                                <a onClick={() => setShowMobileMenu(false)} href="/portifolio/#Sobre" className="nav-item">Sobre</a>
                                <a onClick={() => setShowMobileMenu(false)} href="/portifolio/#Projetos" className="nav-item">Projetos</a>
                                <a onClick={() => setShowMobileMenu(false)} href="/portifolio/#Contatos" className="nav-item">Contatos</a>
                            </div>
                        </div>
                    )}
                    <UIElement text='header' fechar={true} />
                </div>
            </div>
            <div className="header-fake"></div>
        </>
    )
}

export default Header
