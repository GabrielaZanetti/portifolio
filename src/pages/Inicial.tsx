import React, { useEffect } from 'react'
import Header from '../component/header/Header'
import Sobre from '../component/sobre/Sobre'
import Projetos from '../component/projects/Projetos'
import Contatos from '../component/contatos/Contato'

function App() {
    useEffect(() => {
        const select = window.location.hash;
        if (select) {
            setTimeout(() => {
                const idElement = select.replace("#", "");
                const element = document.getElementById(idElement)
                if (element) {
                    window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    return (
        <div className="App">
            <Header />
            <Sobre />
            <Projetos />
            <Contatos />
        </div>
    )
}

export default App
