import './LogoutModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm'

function LogoutModal({modalOpened, handleClose, handleLoggedOut}) {
    const handleClick = () => {
        handleLoggedOut();
        handleClose();
    }

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <h1 className="modal__title">Are you sure you want to log out</h1>
            <button type="submit" className="modal__button" onClick={handleClick}>Yes, I am</button>
        </ModalWithForm>
    )
}

export default LogoutModal;