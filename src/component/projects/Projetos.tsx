import React from 'react'
import UIElement from '../elementUi/UIElement';
import "./style.scss"

const Projetos: React.FC = () => {
    return (
        <div id='Projetos'>
            <UIElement text='project' />
            <div className="container">
                <div className="lista">
                    <div className="item-lista"></div>
                    <div className="item-lista"></div>
                    <div className="item-lista"></div>
                    <div className="item-lista"></div>
                </div>
            </div>
            <UIElement text='project' fechar={true} />
        </div>
    )
}

export default Projetos;