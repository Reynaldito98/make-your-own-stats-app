import './Player.css';
import altuve from '../../../images/altuve.png';

function Player({children, name, position, imageUrl}) {
    return (
        <li className="player">
            <img src={altuve} className="player__image"></img>
            <p className="player__name">Jose Altuve</p>
            <p className="player__position">2B</p>
            
            {children}

            <button className="player__release">Release</button>
        </li>
    )
}

export default Player;