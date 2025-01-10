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
            <p className="player__name player__number_avg">{pitcher.name}</p>
            <p className="player__position player__number_avg">{pitcher.position}</p>
            <p className="player__stats">ERA <p className="player__number">{(Number(pitcher.IP)>0?(((pitcher.ER * 9) / pitcher.IP).toFixed(2)) : '0.00')}</p></p>
            <p className="player__stats player__number_avg">IP <p className="player__number player__number_avg">{pitcher.IP.toFixed(1)}</p></p>
            <p className="player__stats player__number_avg">ER <p className="player__number player__number_avg">{pitcher.ER}</p></p>
            <p className="player__stats player__number_avg">W <p className="player__number player__number_avg">{pitcher.W}</p></p>
            <p className="player__stats player__number_avg">L <p className="player__number player__number_avg">{pitcher.L}</p></p>
            <p className="player__stats player__number_avg">SV <p className="player__number player__number_avg">{pitcher.SV}</p></p>
            <p className="player__stats player__number_avg">K <p className="player__number player__number_avg">{pitcher.K}</p></p>
            <p className="player__stats player__number_avg">BB <p className="player__number player__number_avg">{pitcher.BB}</p></p>
            <button className="player__release" onClick={handleRelease}>Release</button>
        </Player>
    )
}

export default Pitcher;