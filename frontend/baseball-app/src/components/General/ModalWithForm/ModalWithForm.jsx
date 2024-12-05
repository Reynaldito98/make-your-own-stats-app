import './ModalWithForm.css';
import closeButton from "../../../images/close.png";
import { useEffect } from 'react';

function ModalWithForm({modalOpened, handleClose, children}) {
    const handleClick = (evt) => {
        evt.preventDefault();
        handleClose();
    }

    const handleRemoteClick = (evt) => {
        if(evt.target===evt.currentTarget) {
            handleClick(evt);
        }   
    }

    useEffect(() => {
        if (!modalOpened) return;
        const handleEscClose = (evt) => {
            if(evt.key === 'Escape') {
                handleClick(evt);    
            }
        }

        window.addEventListener('keydown', handleEscClose);
        return () => {
            window.removeEventListener("keydown", handleEscClose);
        };
    }, [modalOpened])

    return (
        <div className={`modal ${modalOpened?"modal_opened":""}`} onMouseDown={handleRemoteClick}>
            <div className="modal__container">
                {children}

                <button className="modal__close-btn" onClick={handleClick}><img src={closeButton}></img></button>
            </div>
        </div>
    )
}

export default ModalWithForm;