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
                        Sou Desenvolvedora <b>Front-End</b>, com experiência em UI/UX.
                    </div>
                    <div className="mensagem">
                        Crio Sites e Aplicativos
                    </div>
                    <div className="mensagem">
                        Desenvolvi Projetos pessoais de chat e automatização em Python.
                        <br />
                        Fiz manutenção do <a href="https://play.google.com/store/apps/details?id=br.edu.unijui.android&hl=pt_BR&gl=US">Aplicativo da Unijuí</a>.
                    </div>
                    <div className="mensagem">
                        Além dessas habilidades, tenho experiência em UI/UX e estou continuamente aprimorando meus conhecimentos nessa área. Também estou explorando o design e desenvolvendo projetos básicos de back-end.
                    </div>
                    <a href='./mais-sobre' className="btn-purple">
                        Mais sobre mim
                    </a>
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