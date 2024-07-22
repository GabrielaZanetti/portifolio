import React from 'react'
import Header from '../component/header/Header'
import "../global.scss"
const curriculo = require('./Profile.pdf') as any

const MaisSobre: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="titulo">Sou a Gabriela da Rosa Zanetti</div>
                <div className="container-card">
                    <div className="card">
                        <div className="card-title">Habilidades Técnicas<span className='sub-titulo'>(Hard Skills)</span></div>
                        <ul className="card-list">
                            <li className="item-card">
                                <b>HTML, CSS, Sass:</b> Experiência em desenvolvimento front-end, criação de layouts responsivos e estilização de páginas web.
                            </li>
                            <li className="item-card">
                                <b>PHP, Smarty PHP:</b> Desenvolvimento de back-end, criação de sistemas dinâmicos e gestão de conteúdo usando PHP e Smarty.
                            </li>
                            <li className="item-card">
                                <b>React, React Native:</b> Desenvolvimento de aplicações web e móveis, incluindo a implementação de componentes reutilizáveis e gerenciamento de estado.
                            </li>
                            <li className="item-card">
                                <b>Bootstrap, NextUI:</b> Uso de framework CSS para design responsivo e desenvolvimento ágil.
                            </li>
                            <li className="item-card">
                                <b>Figma:</b> Design de interfaces e prototipagem para projetos de UI/UX.
                            </li>
                            <li className="item-card">
                                <b>Python:</b> Conhecimento básico em programação Python.
                            </li>
                            <li className="item-card">
                                <b>Next.js:</b> Experiência inicial com framework para React, focado em renderização do lado do servidor e otimização de desempenho.
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-title">Habilidades Comportamentais<span className='sub-titulo'>(Soft Skills)</span></div>
                        <ul className="card-list">
                            <li className="item-card">
                                <b>Curiosidade e Aprendizado:</b> Interesse em continuar aprendendo e se atualizando sobre as tendências e melhores práticas em front-end e UI/UX.
                            </li>
                            <li className="item-card">
                                <b>Trabalho em Equipe:</b> Habilidade para colaborar com designers, desenvolvedores e outros profissionais para criar soluções integradas e coesas.
                            </li>
                            <li className="item-card">
                                <b>Gerenciamento de Projetos:</b> Capacidade de priorizar tarefas, gerenciar múltiplos projetos simultaneamente e cumprir prazos de entrega.
                            </li>
                            <li className="item-card">
                                <b>Flexibilidade:</b> Habilidade para se adaptar rapidamente a novas tecnologias, ferramentas e mudanças nas necessidades do projeto.
                            </li>
                            <li className="item-card">
                                <b>Comunicação Eficaz:</b> Capacidade de explicar conceitos técnicos complexos de forma clara para membros da equipe e partes interessadas não técnicas.
                            </li>
                        </ul>
                    </div>
                </div>
                <a href={curriculo} download="example-file.pdf" className="btn-purple btn-download">
                    <svg className='item-btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 270.1-95-95c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 369c9.4 9.4 24.6 9.4 33.9 0L409 233c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95L280 24zM128.8 304L64 304c-35.3 0-64 28.7-64 64l0 80c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-80c0-35.3-28.7-64-64-64l-64.8 0-48 48L448 352c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16l112.8 0-48-48zM432 408a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>
                    Baixar o Currículo Lattes
                </a>
            </div>
        </>
    )
}

export default MaisSobre
