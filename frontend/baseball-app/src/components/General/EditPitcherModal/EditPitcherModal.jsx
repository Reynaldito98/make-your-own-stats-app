import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import altuve from '../../../images/altuve.png';
import { useState } from "react";
import { useEffect } from "react";

function EditPitcherModal({modalOpened, handleClose, selectedPlayer, handleUpdatePitcher}) {
    const [ip, setIp] = useState(selectedPlayer.IP);
    const [er, setEr] = useState(selectedPlayer.ER);
    const [k, setK] = useState(selectedPlayer.K);
    const [bb, setBb] = useState(selectedPlayer.BB);
    const [w, setW] = useState(selectedPlayer.W);
    const [l, setL] = useState(selectedPlayer.L);
    const [sv, setSv] = useState(selectedPlayer.SV);
    const [ipValid, setIpValid] = useState(true);
    const [erValid, setErValid] = useState(true);
    const [kValid, setKValid] = useState(true);
    const [bbValid, setBbValid] = useState(true);
    const [wValid, setWValid] = useState(true);
    const [lValid, setLValid] = useState(true);
    const [svValid, setSvValid] = useState(true);

    const handleKeyDown = evt => {
        evt.preventDefault();
    }

    const handleIp = (evt) => {
        if(Number(evt.target.value)===(Math.floor(Number(evt.target.value)) + 0.3)) {
            setIp(Math.ceil(evt.target.value))
        } else if(Number(evt.target.value)===(Math.floor(Number(evt.target.value)) + 0.9)) {
            setIp(Math.ceil(evt.target.value) - 0.8)
        }else {
            setIp(evt.target.value)
        }

        if(evt.target.checkValidity()) {
            setIpValid(true);
        } else {
            setIpValid(false);
        }
    }

    const handleEr = (evt) => {
        setEr(evt.target.value);

        if(evt.target.checkValidity()) {
            setErValid(true);
        } else {
            setErValid(false);
        }
    }

    const handleK = (evt) => {
        setK(evt.target.value);

        if(evt.target.checkValidity()) {
            setKValid(true);
        } else {
            setKValid(false);
        }
    }

    const handleBb = (evt) => {
        setBb(evt.target.value);

        if(evt.target.checkValidity()) {
            setBbValid(true);
        } else {
            setBbValid(false);
        }
    }

    const handleW = (evt) => {
        setW(evt.target.value);

        if(evt.target.checkValidity()) {
            setWValid(true);
        } else {
            setWValid(false);
        }
    }

    const handleL = (evt) => {
        setL(evt.target.value);

        if(evt.target.checkValidity()) {
            setLValid(true);
        } else {
            setLValid(false);
        }
    }

    const handleSv = (evt) => {
        setSv(evt.target.value);

        if(evt.target.checkValidity()) {
            setSvValid(true);
        } else {
            setSvValid(false);
        }
    }

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        handleUpdatePitcher(selectedPlayer._id, ip, er, k, bb, w, l, sv);
    }

    useEffect(() => {
        setIp(selectedPlayer.IP);
        setEr(selectedPlayer.ER);
        setK(selectedPlayer.K);
        setBb(selectedPlayer.BB);
        setW(selectedPlayer.W);
        setL(selectedPlayer.L);
        setSv(selectedPlayer.SV)
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <div className="modal__title-container">
                <img src={selectedPlayer.imageUrl} alt={selectedPlayer.name} className="modal__image"></img>
                <h1 className="modal__title">{selectedPlayer.name}</h1>
            </div>

            <form className="modal__form2" onSubmit={handleSubmitForm}>
                <fieldset className="modal__fieldset2">
                    <label htmlFor="ab" className="modal__label">IP: </label>
                    <input type="number" id="ab" className="modal__input2" required value={ip} onChange={handleIp} onKeyDown={handleKeyDown} step="0.1"></input>
                    <label htmlFor="h" className="modal__label">ER: </label>
                    <input type="number" id="h" className="modal__input2" required value={er} onChange={handleEr} onKeyDown={handleKeyDown}></input>
                </fieldset>

                <fieldset className="modal__fieldset2">
                    <label htmlFor="hr" className="modal__label">K: </label>
                    <input type="number" id="hr" className="modal__input2" required value={k} onChange={handleK} onKeyDown={handleKeyDown}></input>
                    <label htmlFor="rbi" className="modal__label">BB: </label>
                    <input type="number" id="rbi" className="modal__input2" required value={bb} onChange={handleBb} onKeyDown={handleKeyDown}></input>
                </fieldset>

                <fieldset className="modal__fieldset2">
                    <label htmlFor="sb" className="modal__label">W: </label>
                    <input type="number" id="sb" className="modal__input2" required value={w} onChange={handleW} onKeyDown={handleKeyDown}></input>
                    <label htmlFor="cs" className="modal__label">L: </label>
                    <input type="number" id="cs" className="modal__input2" required value={l} onChange={handleL} onKeyDown={handleKeyDown}></input>
                </fieldset>

                <fieldset className="modal__fieldset2_center">
                    <label htmlFor="r" className="modal__label">SV: </label>
                    <input type="number" id="r" className="modal__input2" required value={sv} onChange={handleSv} onKeyDown={handleKeyDown}></input>
                </fieldset>

                <button type="submit" className="modal__button" disabled={!(ipValid && erValid && kValid && bbValid && wValid && lValid && svValid)}>Apply changes</button>
            </form>
        </ModalWithForm>
    )
}

export default EditPitcherModal;