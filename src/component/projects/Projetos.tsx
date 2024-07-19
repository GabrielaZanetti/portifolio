import React from 'react'
import UIElement from '../elementUi/UIElement'
import './style.scss'
import ItemLista from '../item-projeto/ItemLista'
import arrayProjetos from './listaProjetos.json'

const Projetos: React.FC = () => {
    return (
        <div id="Projetos">
            <UIElement text="project" />
            <div className="container">
                <div className="lista">
                    {arrayProjetos.map(
                        ({ title, linkImg, link, repositorio }, index) => (
                            <ItemLista
                                key={index}
                                title={title}
                                linkImg={linkImg}
                                link={link}
                                repositorio={repositorio}
                            />
                        )
                    )}
                </div>
            </div>
            <UIElement text="project" fechar={true} />
        </div>
    )
}

export default Projetos
