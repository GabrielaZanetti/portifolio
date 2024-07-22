import React, { useEffect, useState } from 'react'
import './style.scss'
import Modal from '../modal/modal'
import { LOADIPHLPAPI } from 'dns'

interface Props {
    title: string
    linkImg: string
    link: string
    repositorio?: boolean
    tecnologias?: string[]
    resumo: string
    sobre: string[]
}

const ItemLista: React.FC<Props> = ({
    title,
    linkImg,
    link,
    repositorio = true,
    resumo,
    sobre,
    tecnologias
}) => {
    const [imagem, setImagem] = useState<string | null>(null)
    const tipoLink = repositorio ? 'Repósitorio' : 'Link'
    const linkView = repositorio
        ? `https://github.com/GabrielaZanetti${link}`
        : link
    const [modalOpen, setModal] = useState(false)
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto'
    const [listTecnologias, setListTecnologias] = useState([]);

    useEffect(() => {
        import(`./image/${linkImg}`)
            .then((img) => setImagem(img.default))
            .catch((err) => console.error(err))

        let lista = [];
        tecnologias.forEach(element => {
            import(`./image/${element}.png`)
            .then((img) => {
                lista.push(img.default)
            })
            .catch((err) => console.error(err));
        });
        setListTecnologias(lista);
          
    }, [linkImg])

    return (
        <>
            <div className="item-lista">
                {imagem ? (
                    <div className="card-img">
                        <img
                            className="img-projeto"
                            src={imagem}
                            alt={`View ${title}`}
                        />
                    </div>
                ) : (
                    <div>Carregando...</div>
                )}
                <div className="titulo-projeto"> {title} </div>
                <div className="card-acoes">
                    <button className="btn-purple" title='Ver Mais' onClick={() => setModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 24c0 13.3 10.7 24 24 24l102.1 0L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223L464 184c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24L328 0c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104L0 440c0 39.8 32.2 72 72 72l336 0c39.8 0 72-32.2 72-72l0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 128c0 13.3-10.7 24-24 24L72 464c-13.3 0-24-10.7-24-24l0-336c0-13.3 10.7-24 24-24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 32z"/></svg>
                    </button>
                </div>
            </div>
            {modalOpen ? (
                <Modal titulo={`View ${title}`} onClose={() => setModal(false)}>
                    <div className="infos-projeto">
                        <div className="img-projeto">
                            <img
                                src={imagem}
                                alt={`View ${title}`}
                            />
                        </div>
                        <div className="infos-projetos">
                            <div className="titulo">{ title }</div>
                            <div className="resumo">{ resumo }</div>
                            <ul className="sobre">
                                {sobre.map((el, index) => (
                                    <li key={index}>{el}</li>
                                ))}
                            </ul>
                            <div className="tecnologias">
                                {listTecnologias.map((img, index) => (
                                    <div className="item-tecnologia" key={index}>
                                        <img src={img}/>
                                    </div>
                                ))}
                            </div>
                            <div className="links">
                                <a href={linkView} target="_blank" className="btn-acessar" rel="noreferrer">Acessar o {tipoLink}</a>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) : ''}
        </>
    )
}

export default ItemLista
