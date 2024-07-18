import React from 'react'
import UIElement from '../elementUi/UIElement';
import "./style.scss"
import ItemLista from '../item-projeto/ItemLista';

const Projetos: React.FC = () => {
    return (
        <div id='Projetos'>
            <UIElement text='project' />
            <div className="container">
                <div className="lista">
                    <ItemLista title="automatização" linkImg="automatizacao.gif" link="/curso-python/tree/main/aula1" repositorio={true} />
                    <ItemLista title="chat" linkImg="chat.gif" link="/curso-python/tree/main/aula4" repositorio={true} />
                </div>
            </div>
            <UIElement text='project' fechar={true} />
        </div>
    )
}

export default Projetos;