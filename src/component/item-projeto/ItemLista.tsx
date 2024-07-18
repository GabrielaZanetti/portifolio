import React, { useEffect, useState } from "react"
import './style.scss'

interface Props {
    title: string
    linkImg: string
    link: string
    repositorio?: boolean
}

const ItemLista: React.FC<Props> = ({ title, linkImg, link, repositorio = true }) => {
    const [imagem, setImagem] = useState<string | null>(null);
    const tipoLink = repositorio ? "Repósitorio" : "Link";
    const linkView = repositorio ? `https://github.com/GabrielaZanetti${link}` : link;

    useEffect(() => {
        import(`./image/${linkImg}`)
            .then((img) => setImagem(img.default))
            .catch((err) => console.error(err));
    }, [linkImg]);

    return (
        <div className="item-lista">
            {imagem ? (
                <div className="card-img">
                    <img className="img-projeto" src={imagem} alt={`View ${title}`} />
                </div>
            ) : (
                <div>Carregando...</div>
            )}
            <div className="titulo-projeto"> { title } </div>
            <a href={linkView} target="_blank" className="btn-purple" rel="noreferrer" title={`Acessar o ${tipoLink}`}>Acessar</a>
        </div>
    )
}

export default ItemLista
