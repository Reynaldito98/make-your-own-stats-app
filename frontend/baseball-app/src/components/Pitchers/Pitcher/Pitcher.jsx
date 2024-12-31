import Player from "../../General/Player/Player";
import '../../General/Player/Player.css';
import altuve from '../../../images/altuve.png';

function Pitcher({handleEditPlayerOpen, handleConfirmationOpen, pitcher, handleSelectedPlayer}) {
    const handleClick = () => {
        handleEditPlayerOpen();
        handleSelectedPlayer(pitcher);
    }

    const handleRelease = () => {
        handleConfirmationOpen();
        handleSelectedPlayer(pitcher);
    }

    return (
        <Player handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen}>
            <img src={pitcher.imageUrl} alt={pitcher.name} className="player__image" onClick={handleClick}></img>
            <p className="player__name">{pitcher.name}</p>
            <p className="player__position">{pitcher.position}</p>
            <p className="player__stats">ERA <p className="player__number">{(Number(pitcher.IP)>0?(((pitcher.ER * 9) / pitcher.IP).toFixed(2)) : '0.00')}</p></p>
            <p className="player__stats">IP <p className="player__number">{pitcher.IP.toFixed(1)}</p></p>
            <p className="player__stats">ER <p className="player__number">{pitcher.ER}</p></p>
            <p className="player__stats">W <p className="player__number">{pitcher.W}</p></p>
            <p className="player__stats">L <p className="player__number">{pitcher.L}</p></p>
            <p className="player__stats">SV <p className="player__number">{pitcher.SV}</p></p>
            <p className="player__stats">K <p className="player__number">{pitcher.K}</p></p>
            <p className="player__stats">BB <p className="player__number">{pitcher.BB}</p></p>
            <button className="player__release" onClick={handleRelease}>Release</button>
        </Player>
    )
}

export default Pitcher;