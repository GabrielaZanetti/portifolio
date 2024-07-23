import React from 'react';
import { Link } from 'react-router-dom';
const erro404 = require('./404.png') as any
import './style.scss'

const NotFound = () => {
    return (
        <div className='container-error'>
            <div className="arte-copy">
                <img src={erro404} className='error-404' alt="Olá, sou a Gabriela" />
                <div className="info-autor">
                    <span className='criador-arte'>Designed by Freepik </span>
                    <a href="https://br.freepik.com/vetores-gratis/erro-404-com-ilustracao-do-conceito-de-portais_20602755.htm#fromView=search&page=1&position=3&uuid=b6fb14ad-94f8-48de-8347-82c80d5a1e85" rel="noreferrer">Link</a>
                </div>
            </div>

            <h1 className='info-pagina'>Página não encontrada</h1>
            <p className='alert-error'>A página que você está procurando não existe.</p>
            <Link to="/" className="button" data-text="Awesome">
                <span className="actual-text">&nbsp;Voltar para a página inicial &nbsp;</span>
                <span aria-hidden="true" className="hover-text">&nbsp;Voltar para a página inicial &nbsp;</span>
            </Link>
        </div>
    );
};

export default NotFound;
