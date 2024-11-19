import "./Header.css";
import mlb from '../../images/mlb.png';

function Header() {
    return (
        <header className="header">
            <img src={mlb} className="header__logo"/>
            
            <ul className="header__link-list">
                <a href="/" className="header__link">Home</a>
                <a href="/" className="header__link">Hitters</a>
                <a href="/" className="header__link">Pitchers</a>
                <a href="/" className="header__link">Stats</a>
            </ul>
        </header>
    )
}

export default Header;