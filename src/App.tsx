import React from 'react'
import Header from './component/header/Header'
import Sobre from './component/sobre/Sobre'
import Projetos from './component/projects/Projetos'
import Contatos from './component/contatos/Contato'

function App() {
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
