import './Main.css';
import court from "../../../images/baseball.jpg";
import logo from "../../../images/kansas.png";

function Main({handleOpen, teamData, handleSelectedPlayer}) {
    const handleEdit = () => {
        handleOpen();
        handleSelectedPlayer(teamData);
    }

    return (
        <main className="main">
            <div className="main__background-image">

            </div>
            <p className="main__welcome">Welcome to this incredible team. Hope they have a great outing today!!</p>
            <h1 className="main__name">{teamData.name}</h1>
            <img src={teamData.logo} className="main__image"></img>
            <button className="main__button" onClick={handleEdit}>Edit</button>
            <div className="main__container">
                <p className="main__stats">W {teamData.wins}</p>
                <p className="main__stats">L {teamData.losses}</p>
                <p className="main__stats">PCT .{Math.round(teamData.wins * 1000 / (teamData.wins + teamData.losses)) || '000'}</p>
            </div>
        </main>
    )
}

export default Main