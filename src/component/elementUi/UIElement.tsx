import React from "react"
import './style.scss'

interface Props {
    text: string
    fechar?: boolean
}

const UIElement: React.FC<Props> = ({ text, fechar = false }) => {
    const fecharTag = fechar ? "\\" : "";
    
    return (
        <div className="UIElement">
            <span className="element">&lt;{ fecharTag }</span>
                { text }
            <span className="element">&gt;</span>
        </div>
    )
}

export default UIElement
