import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function RegisterModal({modalOpened, handleClose, handleRegisterUser}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userNameValid, setUsernameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsername = (evt) => {
        setUsername(evt.target.value);

        if(evt.target.checkValidity()) {
            setUsernameValid(true);
            setUsernameError('');
        } else {
            setUsernameValid(false);
            setUsernameError(evt.target.validationMessage);
        }
    }

    const handleEmail = (evt) => {
        setEmail(evt.target.value);

        if(evt.target.checkValidity()) {
            setEmailValid(true);
            setEmailError('');
        } else {
            if(!evt.target.value.includes('@')) {
                setEmailValid(false);
                setEmailError('Please, inlude @ in this email address');
            } else {
                setEmailValid(false);
                setEmailError(evt.target.validationMessage);
            }
        }
    }

    const handlePassword = (evt) => {
        setPassword(evt.target.value);

        if(evt.target.checkValidity()) {
            setPasswordValid(true);
            setPasswordError('');
        } else {
            setPasswordValid(false);
            setPasswordError(evt.target.validationMessage);
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        handleRegisterUser(username, email, password);
    }

    useEffect(() => {
        setUsername('');
        setEmail('');
        setPassword('');
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <h1 className="modal__title">Sign up</h1>

            <form className="modal__form" onSubmit={handleSubmit}>
                <fieldset className="modal__fieldset">
                    <label htmlFor="name" className="modal__label">Username: </label>
                    <input type="text" id="name" className="modal__input" placeholder="Enter username" required value={username} onChange={handleUsername} minLength="3"></input>
                    <span className="modal__error-message">{usernameError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="email" className="modal__label">Email: </label>
                    <input type="email" id="email" className="modal__input" placeholder="Enter email" required value={email} onChange={handleEmail}></input>
                    <span className="modal__error-message">{emailError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="password" className="modal__label">Password: </label>
                    <input type="password" id="password" className="modal__input" placeholder="Enter password" minLength="8" required value={password} onChange={handlePassword}></input>
                    <span className="modal__error-message">{passwordError}</span>
                </fieldset>

                <button type="submit" className="modal__button" disabled={!(userNameValid && emailValid && passwordValid)}>Register</button>
                <p>I have an account already. <Link to="/login">Log in</Link></p>
            </form>
        </ModalWithForm>
    )
}

export default RegisterModal;