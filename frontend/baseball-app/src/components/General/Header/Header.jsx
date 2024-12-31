import "./Header.css";
import mlb from '../../../images/mlb.png';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header({isLoggedIn, handleModalOpened, handleRegisterModalOpened, handleLogoutModalOpened, teamData, handleCreateTeamModalOpened}) {
    const location = useLocation();

    const handleOpen = () => {
        handleModalOpened();
        handleRegisterModalOpened();
    }

    return (
        <header className="header">
            <img src={mlb} className="header__logo"/>
            
            <div className="header__link-list">
                {
                    isLoggedIn ?
                        <>
                            {
                                teamData.length > 0 ?
                                <>
                                    <Link to="/" className={`header__link ${location.pathname==='/'?'header__link_active':''}`}>Home</Link>
                                    <Link to="/news" className={`header__link ${location.pathname==='/news'?'header__link_active':''}`}>News</Link>
                                    <Link to="/bats" className={`header__link ${location.pathname==='/bats'?'header__link_active':''}`}>Hitters</Link>
                                    <Link to="/pitchers" className={`header__link ${location.pathname==='/pitchers'?'header__link_active':''}`}>Pitchers</Link>
                                    <Link to="/stats" className={`header__link ${location.pathname==='/stats' || location.pathname==='/stats/pitchers'?'header__link_active':''}`}>Stats</Link>
                                </>
                                :
                                <button className="header__link header__link_logout" onClick={handleCreateTeamModalOpened}>Create Team</button>  
                            }
                            <button className="header__link header__link_logout" onClick={handleLogoutModalOpened}>Log out</button>
                        </>
                        :
                        <Link to="/login" className={`header__link`} onClick={handleOpen}>Log in</Link>
                }
            </div>
        </header>
    )
}

export default Header;