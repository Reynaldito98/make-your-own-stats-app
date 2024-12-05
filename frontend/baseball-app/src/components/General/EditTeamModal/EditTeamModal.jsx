import ModalWithForm from '../ModalWithForm/ModalWithForm';
import '../ModalWithForm/ModalWithForm.css';
import { useState, useEffect } from 'react';

function EditTeamModal({modalOpened, handleClose, handleUpdateTeam, selectedPlayer}) {
    const [name, setName] = useState(selectedPlayer.name);
    const [image, setImage] = useState(selectedPlayer.logo);
    const [wins, setWins] = useState(selectedPlayer.wins);
    const [losses, setLosses] = useState(selectedPlayer.losses);
    const [nameError, setNameError] = useState('');
    const [imageError, setImageError] = useState('');
    const [winsError, setWinsError] = useState('');
    const [lossesError, setLossesError] = useState('');
    const [nameValid, setNameValid] = useState(true);
    const [imageValid, setImageValid] = useState(true);
    const [winsValid, setWinsValid] = useState(true);
    const [lossesValid, setLossesValid] = useState(true);

    const handleKeyPress = evt => {
        evt.preventDefault();
    }

    const handleSubmitForm = evt => {
        evt.preventDefault();
        handleUpdateTeam(selectedPlayer._id, name, image, wins, losses);
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

    const handleImageUrl = (evt) => {
        setImage(evt.target.value);

        if(evt.target.checkValidity()) {
            setImageError('');
            setImageValid(true);
        } else {
            setImageError(evt.target.validationMessage);
            setImageValid(false);
        }
    }

    const handleWins = (evt) => {
        setWins(evt.target.value);

        if(evt.target.checkValidity()) {
            setWinsError('');
            setWinsValid(true);
        } else {
            setWinsError(evt.target.validationMessage);
            setWinsValid(false);
        }
    }

    const handleLosses = (evt) => {
        setLosses(evt.target.value);

        if(evt.target.checkValidity()) {
            setLossesError('');
            setLossesValid(true);
        } else {
            setLossesError(evt.target.validationMessage);
            setLossesValid(false);
        }
    }

    useEffect(() => {
        setName(selectedPlayer.name);
        setImage(selectedPlayer.logo);
        setWins(selectedPlayer.wins);
        setLosses(selectedPlayer.losses)
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <h1 className="modal__title">Update team info</h1>

            <form className="modal__form" onSubmit={handleSubmitForm}>
                <fieldset className="modal__fieldset">
                    <label htmlFor="name" className="modal__label">Name: </label>
                    <input type="text" id="name" className="modal__input" placeholder="New York Yankees" required value={name} onChange={handleName}></input>
                    <span className="modal__error-message">{nameError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="url" className="modal__label">Image URL: </label>
                    <input type="url" id="url" className="modal__input" placeholder="https://newyorkyankeespicture.com" required value={image} onChange={handleImageUrl} max="163"></input>
                    <span className="modal__error-message">{imageError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="wins" className="modal__label">Wins: </label>
                    <input type="number" id="wins" className="modal__input" placeholder="102" required value={wins} onChange={handleWins} max="163" onKeyDown={handleKeyPress}></input>
                    <span className="modal__error-message">{winsError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="losses" className="modal__label">Losses: </label>
                    <input type="number" id="losses" className="modal__input" placeholder="60" required value={losses} onChange={handleLosses} onKeyDown={handleKeyPress}></input>
                    <span className="modal__error-message">{lossesError}</span>
                </fieldset>

                <button type="submit" className="modal__button" disabled={!(nameValid && imageValid && winsValid && lossesValid)}>Update</button>
            </form>
        </ModalWithForm>
    )
}

export default EditTeamModal;