import '../../General/PlayersMain/PlayersMain.css';
import PlayersMain from '../../General/PlayersMain/PlayersMain';
import Hitter from '../Hitter/Hitter';
import EmptyList from '../../General/EmptyList/EmptyList';

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
                    hitterData.length>0 ? hitterData.slice(0, 9).map((hitter, index) => {
                        return <Hitter key={index} handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen} hitter={hitter} handleSelectedPlayer={handleSelectedPlayer} handleDeleteHitter={handleDeleteHitter}></Hitter>
                    }) : <EmptyList message="No hitters yet added"></EmptyList>
                }
            </ul>

            <header className="players-main__header">
                <h3 className="players-main__heading">Pinch Hitters</h3>
            </header>

            <ul className="players-main__list">
                {
                    hitterData.length>9 ? hitterData.slice(9).map((hitter, index) => {
                        return <Hitter key={index} handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen} hitter={hitter} handleSelectedPlayer={handleSelectedPlayer}></Hitter>
                    }) : <EmptyList message="No hitters yet added"></EmptyList>
                }
            </ul>
        </PlayersMain>
    )
}

export default HittersMain;