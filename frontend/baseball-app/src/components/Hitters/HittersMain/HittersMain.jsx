import '../../General/PlayersMain/PlayersMain.css';
import PlayersMain from '../../General/PlayersMain/PlayersMain';
import Hitter from '../Hitter/Hitter';

function HittersMain({handleOpen, handleEditPlayerOpen, handleConfirmationOpen, hitterData, handleSelectedPlayer, handleDeleteHitter}) {
    return (
        <PlayersMain>
            <div className="players-main__background-image-hitter">

            </div>

            <header className="players-main__header">
                <h3 className="players-main__heading">Batting Order</h3>
                <button className="players-main__add-player" onClick={handleOpen}>Add player</button>
            </header>

            <ul className="players-main__list">
                {
                    hitterData.slice(0, 9).map((hitter, index) => {
                        return <Hitter key={index} handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen} hitter={hitter} handleSelectedPlayer={handleSelectedPlayer} handleDeleteHitter={handleDeleteHitter}></Hitter>
                    })
                }
            </ul>

            <header className="players-main__header">
                <h3 className="players-main__heading">Pinch Hitters</h3>
            </header>

            <ul className="players-main__list">
                {
                    hitterData.slice(9).map((hitter, index) => {
                        return <Hitter key={index} handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen} hitter={hitter} handleSelectedPlayer={handleSelectedPlayer}></Hitter>
                    })
                }
            </ul>
        </PlayersMain>
    )
}

export default HittersMain;