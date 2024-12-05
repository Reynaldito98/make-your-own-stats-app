import "./Header.css";
import mlb from '../../../images/mlb.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src={mlb} className="header__logo"/>
            
            <div className="header__link-list">
                <Link to="/" className="header__link">Home</Link>
                <Link to="/news" className="header__link">News</Link>
                <Link to="/bats" className="header__link">Hitters</Link>
                <Link to="/pitchers" className="header__link">Pitchers</Link>
                <Link to="/stats" className="header__link">Stats</Link>
            </div>
        </header>
    )
}

export default Header;