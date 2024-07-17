import React from 'react'
import UIElement from '../elementUi/UIElement'
import './style.scss'

function Header() {
    return (
        <div className="Header">
            <UIElement text='header' />
            <div className="nav-bar">
                <div className="icon">
                    <img src="" alt="Icone Nav" />
                </div>
                <div className="nav">
                    <a href="#Sobre" className="nav-item">Sobre</a>
                    <a href="#Projetos" className="nav-item">Projetos</a>
                    <a href="#Contatos" className="nav-item">Contatos</a>
                </div>
            </div>
            <UIElement text='header' fechar={true} />
        </div>
    )
}

export default Header
