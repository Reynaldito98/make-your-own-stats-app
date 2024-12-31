import './StatsMain.css';
import { Link } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import HittersStatsMain from '../HittersStatsMain/HittersStatsMain';

function StatsMain({children}) {
    const location = useLocation();

    return (
        <main className="stats">
            <div className="stats__background">

            </div>

            <div className="stats__link-container">
                <Link to="/stats" className={`stats__link ${location.pathname==='/stats'?'stats__link_active':''}`}>Hitters</Link>
                <Link to="/stats/pitchers" className={`stats__link ${location.pathname==='/stats/pitchers'?'stats__link_active':''}`}>Pitchers</Link>
            </div>

            {children}
        </main>
    )
}

export default StatsMain;