import './Player.css';
import altuve from '../../../images/altuve.png';

function Player({handleEditPlayerOpen, handleConfirmationOpen, children}) {
    return (
        <li className="player">
            {children}
        </li>
    )
}

export default Player;