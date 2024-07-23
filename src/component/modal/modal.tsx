import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    titulo: string;
}

const Modal: React.FC<ModalProps> = ({ titulo, children, onClose }) => {
    const modalRoot = document.getElementById('modal-root') as HTMLElement;

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div className='fundo-modal' onClick={handleBackgroundClick}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-titulo">
                    {titulo}
                    <button className='btn-modal' onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className='btn-purple' onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
