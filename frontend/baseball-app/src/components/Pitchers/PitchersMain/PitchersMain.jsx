import PlayersMain from "../../General/PlayersMain/PlayersMain";
import Pitcher from "../Pitcher/Pitcher";
import "../../General/PlayersMain/PlayersMain.css";

function PitchersMain() {
    return (
        <PlayersMain>
            <div className="players-main__background-image-pitcher">

            </div>

            <header className="players-main__header">
                <h3 className="players-main__heading">Pitching Rotation</h3>
                <button className="players-main__add-player">Add player</button>
            </header>

            <ul className="players-main__list">
                <Pitcher></Pitcher>
                <Pitcher></Pitcher>
                <Pitcher></Pitcher>
            </ul>

            <header className="players-main__header">
                <h3 className="players-main__heading">Relief Pitchers</h3>
            </header>

            <ul className="players-main__list">
                <Pitcher></Pitcher>
                <Pitcher></Pitcher>
                <Pitcher></Pitcher>
            </ul>
        </PlayersMain>
    )
}

export default PitchersMain