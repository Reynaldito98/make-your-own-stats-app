import './StatsMain.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function StatsMain() {
    return (
        <main className="stats">
            <div className="stats__background">

            </div>

            <div className="stats__link-container">
                <Link to="/stats" className="stats__link">Hitters</Link>
                <Link to="/stats/pitchers" className="stats__link">Pitchers</Link>
            </div>

            <Routes>
                <Route path="/stats" element={'rey'}></Route>
                <Route path="/stats/pitchers" element={'rey'}></Route>
            </Routes>
        </main>
    )
}

export default StatsMain;