import React from 'react'
import UIElement from '../elementUi/UIElement';
import "./style.scss"
import ItemLista from '../item-projeto/ItemLista';

const Projetos: React.FC = () => {
    const arrayProjetos = [
        {
            title: "automatização",
            linkImg: "automatizacao.gif",
            link: "/curso-python/tree/main/aula1",
            repositorio: true
        }, {
            title: "chat",
            linkImg: "chat.gif",
            link: "/curso-python/tree/main/aula4",
            repositorio: true
        }
    ]
    
    return (
        <div id='Projetos'>
            <UIElement text='project' />
            <div className="container">
                <div className="lista">
                    {arrayProjetos.map(({ title, linkImg, link, repositorio }, index) => (
                        <ItemLista key={index} title={title} linkImg={linkImg} link={link} repositorio={repositorio} />
                    )
                    )}
                </div>
            </div>
            <UIElement text='project' fechar={true} />
        </div>
    )
}

export default Projetos;