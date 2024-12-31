import './Main.css';
import court from "../../../images/baseball.jpg";
import logo from "../../../images/kansas.png";

function Main({handleOpen, teamData, handleSelectedPlayer, username}) {
    const handleEdit = () => {
        handleOpen();
        handleSelectedPlayer(teamData[0]);
    }

    return (
        <main className="main">
            <div className="main__background-image">

            </div>
            <p className="main__welcome">{teamData.length>0 ? `Welcome ${username} to your team. Hope they have a great outing today!!` : `Hi ${username}. Create your team and start winning!!`}</p>
            <h1 className="main__name">{teamData.length>0 ? teamData[0].name:''}</h1>
            <img src={teamData.length>0 ? teamData[0].logo : "https://loodibee.com/wp-content/uploads/MLB_National_League_logo-300x300.png"} className="main__image"></img>
            {teamData.length>0 ? <button className="main__button" onClick={handleEdit}>Edit</button> : ""}
            <div className="main__container">
                <p className="main__stats">W {teamData.length>0 ? teamData[0].wins : '0'}</p>
                <p className="main__stats">L {teamData.length>0 ? teamData[0].losses : '0'}</p>
                <p className="main__stats">PCT .{teamData.length>0 ? Math.round(teamData[0].wins * 1000 / (teamData[0].wins + teamData[0].losses)) : '000'}</p>
            </div>
        </main>
    )
}

export default Main