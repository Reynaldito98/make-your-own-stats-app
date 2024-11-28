import './StatsMain.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HittersStatsMain from '../HittersStatsMain/HittersStatsMain';

function StatsMain({children}) {
    return (
        <main className="stats">
            <div className="stats__background">

            </div>

            <div className="stats__link-container">
                <Link to="/stats" className="stats__link">Hitters</Link>
                <Link to="/stats/pitchers" className="stats__link">Pitchers</Link>
            </div>

            {children}
        </main>
    )
}

export default StatsMain;