import '../../General/Player/Player.css';
import Player from '../../General/Player/Player';

function Hitter({name, position, imageUrl}) {
    return (
        <Player name={name} position={position} imageUrl={imageUrl}>
            <p className="player__stats">AVG <p className="player__number">.326</p></p>
            <p className="player__stats">H <p className="player__number">198</p></p>
            <p className="player__stats">HR <p className="player__number">22</p></p>
            <p className="player__stats">RBI <p className="player__number">87</p></p>
            <p className="player__stats">SB <p className="player__number">27</p></p>
        </Player>
    )
}

export default Hitter;