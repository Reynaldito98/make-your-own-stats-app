import PlayersMain from "../../General/PlayersMain/PlayersMain";
import Pitcher from "../Pitcher/Pitcher";
import "../../General/PlayersMain/PlayersMain.css";

function PitchersMain({handleOpen, handleEditPlayerOpen, handleConfirmationOpen, pitcherData, handleSelectedPlayer, handleDeletePitcher}) {
    return (
        <PlayersMain>
            <div className="players-main__background-image-pitcher">

            </div>

            <header className="players-main__header">
                <h3 className="players-main__heading">Pitching Rotation</h3>
                <button className="players-main__add-player" onClick={handleOpen}>Add player</button>
            </header>

            <ul className="players-main__list">
                {
                    pitcherData.slice(0, 5).map(pitcher => {
                        return <Pitcher key={pitcher._id} handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen} pitcher={pitcher} handleSelectedPlayer={handleSelectedPlayer} handleDeletePitcher={handleDeletePitcher}></Pitcher>
                    })
                }
            </ul>

            <header className="players-main__header">
                <h3 className="players-main__heading">Relief Pitchers</h3>
            </header>

            <ul className="players-main__list">
                {
                    pitcherData.slice(5).map(pitcher => {
                        return <Pitcher key={pitcher._id} handleEditPlayerOpen={handleEditPlayerOpen} handleConfirmationOpen={handleConfirmationOpen} pitcher={pitcher} handleSelectedPlayer={handleSelectedPlayer} handleDeletePitcher={handleDeletePitcher}></Pitcher>
                    })
                }
            </ul>
        </PlayersMain>
    )
}

export default PitchersMain