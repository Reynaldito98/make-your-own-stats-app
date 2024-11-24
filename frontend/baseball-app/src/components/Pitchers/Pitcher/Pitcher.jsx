import Player from "../../General/Player/Player";
import '../../General/Player/Player.css';

function Pitcher() {
    return (
        <Player>
            <p className="player__stats">IP <p className="player__number">133.1</p></p>
            <p className="player__stats">ER <p className="player__number">25</p></p>
            <p className="player__stats">W <p className="player__number">10</p></p>
            <p className="player__stats">L <p className="player__number">6</p></p>
            <p className="player__stats">SV <p className="player__number">0</p></p>
            <p className="player__stats">K <p className="player__number">127</p></p>
            <p className="player__stats">BB <p className="player__number">33</p></p>
        </Player>
    )
}

export default Pitcher;