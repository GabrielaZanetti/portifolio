import React from 'react'
import UIElement from '../elementUi/UIElement'
import './style.scss'

const logo = require('./logo.ico') as any;

function Header() {
    return (
        <div className="Header">
            <UIElement text='header' />
            <div className="header-itens">
                <div className="nav-bar">
                    <div className="icon">
                        <img src={logo} alt="Icone Nav" />
                    </div>
                    <div className="nav">
                        <a href="#Sobre" className="nav-item">Sobre</a>
                        <a href="#Projetos" className="nav-item">Projetos</a>
                        <a href="#Contatos" className="nav-item">Contatos</a>
                    </div>
                    <div className="nav-mobile">
                        <div className="wrapper">
                            <div className="checkbox-wrapper">
                                <input type="checkbox" id="toggle" />
                                <label className="checkbox" htmlFor="toggle">
                                    <div className="trace"></div>
                                    <div className="trace"></div>
                                    <div className="trace"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-mobile">
                    <div className="itens-mobile">
                        <a href="#Sobre" className="nav-item">Sobre</a>
                        <a href="#Projetos" className="nav-item">Projetos</a>
                        <a href="#Contatos" className="nav-item">Contatos</a>
                    </div>
                </div>
            </div>
            <UIElement text='header' fechar={true} />
        </div>
    )
}

export default Header
