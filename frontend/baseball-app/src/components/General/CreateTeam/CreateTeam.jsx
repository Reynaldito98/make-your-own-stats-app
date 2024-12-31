import './CreateTeam.css';
import '../../General/ModalWithForm/ModalWithForm.css';
import ModalWithForm from '../../General/ModalWithForm/ModalWithForm';
import { useState, useEffect } from 'react';

function CreateTeam({modalOpened, handleClose, createTeam}) {
    const [team, setTeam] = useState('');
    const [logo, setLogo] = useState('');
    const [teamValid, setTeamValid] = useState(false);
    const [logoValid, setLogoValid] = useState(false);
    const [teamError, setTeamError] = useState('');
    const [logoError, setLogoError] = useState('');

    const handleTeam = evt => {
        setTeam(evt.target.value);

        if(evt.target.checkValidity()) {
            setTeamValid(true);
            setTeamError('')
        } else {
            setTeamValid(false);
            setTeamError(evt.target.validationMessage);
        }
    }

    const handleLogo = evt => {
        setLogo(evt.target.value);

        if(evt.target.checkValidity()) {
            setLogoValid(true);
            setLogoError('')
        } else {
            setLogoValid(false);
            setLogoError(evt.target.validationMessage);
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        createTeam(team, logo);
    }

    useEffect(() => {
        setTeam('');
        setLogo('');
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <h1 className="modal__title">Create Team</h1>

            <form className="modal__form" onSubmit={handleSubmit}>
                <fieldset className="modal__fieldset">
                    <label htmlFor="team" className="modal__label">Team Name: </label>
                    <input type="text" id="team" className="modal__input" placeholder="Enter team name" minLength="4" required value={team} onChange={handleTeam}></input>
                    <span className="modal__error-message">{teamError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="image" className="modal__label">Team Logo Url: </label>
                    <input type="url" id="image" className="modal__input" placeholder="Enter team logo url" required value={logo} onChange={handleLogo}></input>
                    <span className="modal__error-message">{logoError}</span>
                </fieldset>

                <button type="submit" className="modal__button" disabled={!(teamValid && logoValid)}>Create</button>
            </form>
        </ModalWithForm>
    )
}

export default CreateTeam;