import ModalWithForm from '../ModalWithForm/ModalWithForm';
import '../ModalWithForm/ModalWithForm.css';
import { useEffect, useState } from 'react';

function EditHitterModal({modalOpened, handleClose, selectedPlayer, handleUpdateHitter}) {
    const [ab, setAb] = useState(String(selectedPlayer.AB));
    const [h, setH] = useState(String(selectedPlayer.H));
    const [hr, setHr] = useState(String(selectedPlayer.HR));
    const [rbi, setRbi] = useState(String(selectedPlayer.RBI));
    const [sb, setSb] = useState(String(selectedPlayer.SB));
    const [cs, setCs] = useState(String(selectedPlayer.CS));
    const [doubles, setDoubles] = useState(String(selectedPlayer.Doubles));
    const [triples, setTriples] = useState(String(selectedPlayer.Triples));
    const [r, setR] = useState(String(selectedPlayer.R));
    const [abValid, setAbValid] = useState(true);
    const [hValid, setHValid] = useState(true);
    const [hrValid, setHrValid] = useState(true);
    const [rbiValid, setRbiValid] = useState(true);
    const [sbValid, setSbValid] = useState(true);
    const [csValid, setCsValid] = useState(true);
    const [doublesValid, setDoublesValid] = useState(true);
    const [triplesValid, setTriplesValid] = useState(true);
    const [rValid, setRValid] = useState(true);
    let sum = Number(hr) + Number(doubles) + Number(triples);

    const handleKeyDown = evt => {
        evt.preventDefault();
    }


    const handleAb = (evt) => {
        setAb(evt.target.value);

        if(evt.target.checkValidity()) {
            setAbValid(true);
        } else {
            setAbValid(false);
        }

        evt.target.min = Number(h);
    }

    const handleH = (evt) => {
        setH(evt.target.value);

        if(evt.target.checkValidity()) {
            setHValid(true);
        } else {
            setHValid(false);
        }

        if(evt.target.value > h) {
            setAb(Number(ab) + (evt.target.value - h))
        }

        evt.target.min = sum;
    }

    const handleHr = (evt) => {
        setHr(evt.target.value);

        if(evt.target.checkValidity()) {
            setHrValid(true);
        } else {
            setHrValid(false);
        }

        if(evt.target.value > hr) {
            setAb(Number(ab) + (evt.target.value - hr))
            setH(Number(h) + (evt.target.value - hr))
            setR(Number(r) + (evt.target.value - hr))
            setRbi(Number(rbi) + (evt.target.value - hr))
        }
    }

    const handleRbi = (evt) => {
        setRbi(evt.target.value);

        if(evt.target.checkValidity()) {
            setRbiValid(true);
        } else {
            setRbiValid(false);
        }
        evt.target.min = Number(hr);
    }

    const handleSb = (evt) => {
        setSb(evt.target.value);

        if(evt.target.checkValidity()) {
            setSbValid(true);
        } else {
            setSbValid(false);
        }
    }

    const handleCs = (evt) => {
        setCs(evt.target.value);

        if(evt.target.checkValidity()) {
            setCsValid(true);
        } else {
            setCsValid(false);
        }
    }

    const handleDoubles = (evt) => {
        setDoubles(evt.target.value);

        if(evt.target.checkValidity()) {
            setDoublesValid(true);
        } else {
            setDoublesValid(false);
        }

        if(evt.target.value > doubles) {
            setAb(Number(ab) + (evt.target.value - doubles))
            setH(Number(h) + (evt.target.value - doubles))   
        }

    }

    const handleTriples = (evt) => {
        setTriples(evt.target.value);

        if(evt.target.checkValidity()) {
            setTriplesValid(true);
        } else {
            setTriplesValid(false);
        }

        if(evt.target.value > triples) {
            setAb(Number(ab) + (evt.target.value - triples))
            setH(Number(h) + (evt.target.value - triples))   
        }
    }

    const handleR = (evt) => {
        setR(evt.target.value);

        if(evt.target.checkValidity()) {
            setRValid(true);
        } else {
            setRValid(false);
        }
        evt.target.min = hr;
    }

    const handleSubmitForm = evt => {
        evt.preventDefault();
        handleUpdateHitter(selectedPlayer._id, ab, h, hr, rbi, sb, cs, doubles, triples, r);
    }

    useEffect(() => {
        setAb(selectedPlayer.AB);
        setH(selectedPlayer.H);
        setHr(selectedPlayer.HR);
        setRbi(selectedPlayer.RBI);
        setSb(selectedPlayer.SB);
        setCs(selectedPlayer.CS);
        setDoubles(selectedPlayer.Doubles);
        setTriples(selectedPlayer.Triples);
        setR(selectedPlayer.R);
    }, [modalOpened])
 
    return (
        <ModalWithForm modalOpened={modalOpened} handleClose={handleClose}>
            <div className="modal__title-container">
                <img src={selectedPlayer.imageUrl} className="modal__image"></img>
                <h1 className="modal__title">{selectedPlayer.name}</h1>
            </div>

            <form className="modal__form2" onSubmit={handleSubmitForm}>
                <fieldset className="modal__fieldset2">
                    <label htmlFor="ab" className="modal__label">AB: </label>
                    <input type="number" id="ab" className="modal__input2" required onChange={handleAb} value={ab} step="1" onKeyDown={handleKeyDown}></input>
                    <label htmlFor="h" className="modal__label">H: </label>
                    <input type="number" id="h" className="modal__input2" required onChange={handleH} value={h} step="1" onKeyDown={handleKeyDown}></input>
                </fieldset>

                <fieldset className="modal__fieldset2">
                    <label htmlFor="hr" className="modal__label">HR: </label>
                    <input type="number" id="hr" className="modal__input2" min="0" required onChange={handleHr} value={hr} step="1" onKeyDown={handleKeyDown}></input>
                    <label htmlFor="rbi" className="modal__label">RBI: </label>
                    <input type="number" id="rbi" className="modal__input2" min="0" required onChange={handleRbi} value={rbi} step="1" onKeyDown={handleKeyDown}></input>
                </fieldset>

                <fieldset className="modal__fieldset2">
                    <label htmlFor="sb" className="modal__label">SB: </label>
                    <input type="number" id="sb" className="modal__input2" min="0" required onChange={handleSb} value={sb} step="1" onKeyDown={handleKeyDown}></input>
                    <label htmlFor="cs" className="modal__label">CS: </label>
                    <input type="number" id="cs" className="modal__input2" min="0" required onChange={handleCs} value={cs} step="1" onKeyDown={handleKeyDown}></input>
                </fieldset>

                <fieldset className="modal__fieldset2">
                    <label htmlFor="hr" className="modal__label">2B: </label>
                    <input type="number" id="hr" className="modal__input2" min="0" required onChange={handleDoubles} value={doubles} step="1" onKeyDown={handleKeyDown}></input>
                    <label htmlFor="rbi" className="modal__label">3B: </label>
                    <input type="number" id="rbi" className="modal__input2" min="0" required onChange={handleTriples} value={triples} step="1" onKeyDown={handleKeyDown}></input>
                </fieldset>

                <fieldset className="modal__fieldset2_center">
                    <label htmlFor="r" className="modal__label">R: </label>
                    <input type="number" id="r" className="modal__input2" min="0" required onChange={handleR} value={r} step="1" onKeyDown={handleKeyDown}></input>
                </fieldset>

                <button type="submit" className="modal__button" disabled={!(abValid && hValid && hrValid && rbiValid && sbValid && csValid && doublesValid && triplesValid && rValid)}>Apply changes</button>
            </form>
        </ModalWithForm>
    )
}

export default EditHitterModal;