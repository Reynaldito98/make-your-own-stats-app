import ModalWithForm from "../ModalWithForm/ModalWithForm";
import '../ModalWithForm/ModalWithForm.css';

function ConfirmationModal({modalOpened, handleClose, handleDeleteHitter, selectedPlayer, handleDeletePitcher}) {
    const handleRelease = (evt) => {
        evt.preventDefault();
        if(selectedPlayer.position === 'SP' || selectedPlayer.position === 'RP' || selectedPlayer.position === 'CP') {
            handleDeletePitcher(selectedPlayer._id)
        } else {
            handleDeleteHitter(selectedPlayer._id);
        }
        handleClose();
    }

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <h1 className="modal__title">Are you sure you would like to release this player</h1>
            <button type="submit" className="modal__button" onClick={handleRelease}>Yes, release him</button>
        </ModalWithForm>
    )
}

export default ConfirmationModal;