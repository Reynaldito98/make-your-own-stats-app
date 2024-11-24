import '../../General/PlayersMain/PlayersMain.css';
import PlayersMain from '../../General/PlayersMain/PlayersMain';
import Hitter from '../Hitter/Hitter';

function HittersMain() {
    return (
        <PlayersMain>
            <div className="players-main__background-image-hitter">

            </div>

            <header className="players-main__header">
                <h3 className="players-main__heading">Batting Order</h3>
                <button className="players-main__add-player">Add player</button>
            </header>

            <ul className="players-main__list">
                <Hitter></Hitter>
                <Hitter></Hitter>
                <Hitter></Hitter>
            </ul>

            <header className="players-main__header">
                <h3 className="players-main__heading">Pinch Hitters</h3>
            </header>

            <ul className="players-main__list">
                <Hitter></Hitter>
                <Hitter></Hitter>
                <Hitter></Hitter>
            </ul>
        </PlayersMain>
    )
}

export default HittersMain;