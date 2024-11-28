import './ModalWithForm.css';
import closeButton from "../../../images/close.png";
import { useEffect } from 'react';

function ModalWithForm({modalOpened, handleClose}) {
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
                <h1 className="modal__title">New hitter</h1>

                <form className="modal__form">
                    <fieldset className="modal__fieldset">
                        <label htmlFor="name" className="modal__label">Name: </label>
                        <input type="text" id="name" className="modal__input" placeholder="Derek Jeter"></input>
                    </fieldset>

                    <fieldset className="modal__fieldset">
                        <label htmlFor="position" className="modal__label">Position: </label>
                        <input type="text" id="position" className="modal__input" maxLength="2" placeholder="SS"></input>
                    </fieldset>

                    <fieldset className="modal__fieldset">
                        <label htmlFor="url" className="modal__label">Image URL: </label>
                        <input type="url" id="url" className="modal__input" placeholder="https://derekjeterpicture.com"></input>
                    </fieldset>

                    <button type="submit" className="modal__button">Sign</button>
                </form>

                <button className="modal__close-btn" onClick={handleClick}><img src={closeButton}></img></button>
            </div>
        </div>
    )
}

export default ModalWithForm;