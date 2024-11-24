import './Main.css';
import court from "../../../images/baseball.jpg";
import logo from "../../../images/kansas.png";

function Main() {
    return (
        <main className="main">
            <div className="main__background-image">

            </div>
            <p className="main__welcome">Welcome to this incredible team. Hope they have a great outing today!!</p>
            <h1 className="main__name">Kansas City Royals</h1>
            <img src={logo} className="main__image"></img>
            <button className="main__button">Edit</button>
            <div className="main__container">
                <p className="main__stats">W 0</p>
                <p className="main__stats">L 0</p>
                <p className="main__stats">PCT .000</p>
            </div>
        </main>
    )
}

export default Main