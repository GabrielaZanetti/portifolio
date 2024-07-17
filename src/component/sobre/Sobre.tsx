import React from 'react'
import UIElement from '../elementUi/UIElement';
import "./style.scss"
const eu = require('./eu.png') as any;

const Sobre: React.FC = () => {
    return (
        <div id='Sobre'>
            <UIElement text='about' />
            <div className="container">
                <div className="mensagem-sobre">
                    <div className="titulo">
                        Ola, sou a Gabi
                    </div>
                    <div className="mensagem">
                        Sou Desenvolvedora Front-End, com experiência em UI/UX
                    </div>
                    <div className="mensagem">
                        Crio Sites e Aplicativos
                    </div>
                    <div className="mensagem">
                        Desenvolvi sites de e-commerce, um aplicativo institucional para a Unijuí, e alguns projetos de automação em Python.
                    </div>
                    <div className="mensagem">
                        Além dessas habilidades, tenho experiência em UI/UX e estou continuamente aprimorando meus conhecimentos nessa área. Também estou explorando o design e desenvolvendo projetos básicos de back-end.
                    </div>
                </div>
                <div className="foto">
                    <img src={eu} alt="Olá, sou a Gabriela" />
                </div>
            </div>
            <UIElement text='about' fechar={true} />
        </div>
    )
}

export default Sobre;