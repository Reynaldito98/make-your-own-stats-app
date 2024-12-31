import ModalWithForm from "../ModalWithForm/ModalWithForm";
import '../ModalWithForm/ModalWithForm.css';
import { useState, useEffect } from "react";

function AddHitterModal({modalOpened, handleClose, handleCreateHitter}) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [nameError, setNameError] = useState('');
    const [positionError, setPositionError] = useState('');
    const [imageError, setImageError] = useState('');
    const [nameValid, setNameValid] = useState(false);
    const [positionValid, setPositionValid] = useState(false);
    const [imageValid, setImageValid] = useState(false);

    const handleSubmitForm = evt => {
        evt.preventDefault();
        handleCreateHitter(name, position, imageUrl);
    }

    const handleName = (evt) => {
        setName(evt.target.value);

        if(evt.target.checkValidity()) {
            setNameError('');
            setNameValid(true);
        } else {
            setNameError(evt.target.validationMessage);
            setNameValid(false);
        }
    }

    const handlePosition = (evt) => {
        setPosition(evt.target.value);

        if(evt.target.checkValidity()) {
            setPositionError('');
            setPositionValid(true);
        } else {
            setPositionError(evt.target.validationMessage);
            setPositionValid(false);
        }
    }

    const handleImageUrl = (evt) => {
        setImageUrl(evt.target.value);

        if(evt.target.checkValidity()) {
            setImageError('');
            setImageValid(true);
        } else {
            setImageError(evt.target.validationMessage);
            setImageValid(false);
        }
    }

    useEffect(() => {
        setName("");
        setPosition("");
        setImageUrl("");
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <h1 className="modal__title">New hitter</h1>

            <form className="modal__form" onSubmit={handleSubmitForm}>
                <fieldset className="modal__fieldset">
                    <label htmlFor="name" className="modal__label">Name: </label>
                    <input type="text" id="name" className="modal__input" placeholder="Derek Jeter" value={name} onChange={handleName} required minLength="4"></input>
                    <span className="modal__error-message">{nameError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="position" className="modal__label">Position: </label>
                    <input type="text" id="position" className="modal__input" maxLength="2" placeholder="SS" value={position} required onChange={handlePosition}></input>
                    <span className="modal__error-message">{positionError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="url" className="modal__label">Image URL: </label>
                    <input type="url" id="url" className="modal__input" placeholder="https://derekjeterpicture.com" value={imageUrl} required onChange={handleImageUrl}></input>
                    <span className="modal__error-message">{imageError}</span>
                </fieldset>

                <button type="submit" className="modal__button" disabled={!(nameValid && positionValid && imageValid)}>Sign</button>
            </form>
        </ModalWithForm>
    )
}

export default AddHitterModal;