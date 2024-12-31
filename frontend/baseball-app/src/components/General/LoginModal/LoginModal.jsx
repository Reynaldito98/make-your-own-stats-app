import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function LoginModal({modalOpened, handleClose, handleLoginUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmail = evt => {
        setEmail(evt.target.value);

        if(evt.target.checkValidity()) {
            setEmailError('');
            setEmailValid(true);
        } else {
            if(!evt.target.value.includes('@')) {
                setEmailError('Please, include @ in this email address');
                setEmailValid(false)
            } else {
                setEmailError(evt.target.validationMessage);
                setEmailValid(false)
            }
        }
    }

    const handlePassword = evt => {
        setPassword(evt.target.value);

        if(evt.target.checkValidity()) {
            setPasswordError('');
            setPasswordValid(true);
        } else {
            setPasswordError(evt.target.validationMessage);
            setPasswordValid(false);
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        handleLoginUser(email, password)
    }

    useEffect(() => {
        setEmail('');
        setPassword('');
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <h1 className="modal__title">Log in</h1>

            <form className="modal__form" onSubmit={handleSubmit}>
                <fieldset className="modal__fieldset">
                    <label htmlFor="email" className="modal__label">Email: </label>
                    <input type="email" id="email" className="modal__input" placeholder="Enter email" required value={email} onChange={handleEmail}></input>
                    <span className="modal__error-message">{emailError}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor="password" className="modal__label">Password: </label>
                    <input type="password" id="password" className="modal__input" placeholder="Enter password" required value={password} minLength={8} onChange={handlePassword}></input>
                    <span className="modal__error-message">{passwordError}</span>
                </fieldset>

                <button type="submit" className="modal__button" disabled={!(emailValid && passwordValid)}>Login</button>
                <p>I don't have an account. <Link to="/register">Register Here!</Link></p>
            </form>
        </ModalWithForm>
    )
}

export default LoginModal;