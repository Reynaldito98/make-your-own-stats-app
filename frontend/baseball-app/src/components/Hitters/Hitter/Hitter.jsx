import '../../General/Player/Player.css';
import Player from '../../General/Player/Player';

function Hitter({handleEditPlayerOpen, handleConfirmationOpen, hitter, handleSelectedPlayer}) {
    const handleClick = () => {
        handleEditPlayerOpen();
        handleSelectedPlayer(hitter);
    }

    const handleRelease = () => {
        handleConfirmationOpen();
        handleSelectedPlayer(hitter);
    }

    return (
        <Player handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen}>
            <img src={hitter.imageUrl} alt={hitter.name} className="player__image" onClick={handleClick}></img>
            <p className="player__name">{hitter.name}</p>
            <p className="player__position">{hitter.position}</p>
            <p className="player__stats player__stats_first">AVG <p className="player__number">.{Math.round(hitter.H * 1000 / hitter.AB) || '000'}</p></p>
            <p className="player__stats">H <p className="player__number"></p>{hitter.H}</p>
            <p className="player__stats">HR <p className="player__number"></p>{hitter.HR}</p>
            <p className="player__stats">RBI <p className="player__number"></p>{hitter.RBI}</p>
            <p className="player__stats">SB <p className="player__number"></p>{hitter.SB}</p>
            <button className="player__release" onClick={handleRelease}>Release</button>
        </Player>
    )
}

export default Hitter;