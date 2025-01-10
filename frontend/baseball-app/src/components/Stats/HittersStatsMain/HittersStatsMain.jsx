import './HittersStatsMain.css';
import Stats from '../Stats/Stats';
import { useEffect, useState } from 'react';

function HittersStatsMain({hitterData, modalOpened}) {
    const [organizedByHits, setOrganizedByHits] = useState([]);
    const [organizedByAb, setOrganizedByAb] = useState([]);
    const [organizedByHr, setOrganizedByHr] = useState([]);
    const [organizedByRbi, setOrganizedByRbi] = useState([]);
    const [organizedBySb, setOrganizedBySb] = useState([]);
    const [organizedByR, setOrganizedByR] = useState([]);
    const [organizedByDoubles, setOrganizedByDoubles] = useState([]);
    const [organizedByTriples, setOrganizedByTriples] = useState([]);
    const [organizedByAverage, setOrganizedByAverage] = useState([]);

    useEffect(() => {
        setOrganizedByHits(hitterData.slice(0).sort((a, b) => b.H - a.H));
        setOrganizedByAb(hitterData.slice(0).sort((a, b) => b.AB - a.AB));
        setOrganizedByHr(hitterData.slice(0).sort((a, b) => b.HR - a.HR));
        setOrganizedByRbi(hitterData.slice(0).sort((a, b) => b.RBI - a.RBI));
        setOrganizedBySb(hitterData.slice(0).sort((a, b) => b.SB - a.SB));
        setOrganizedByR(hitterData.slice(0).sort((a, b) => b.R - a.R));
        setOrganizedByDoubles(hitterData.slice(0).sort((a, b) => b.Doubles - a.Doubles));
        setOrganizedByTriples(hitterData.slice(0).sort((a, b) => b.Triples - a.Triples));
        setOrganizedByAverage(hitterData.slice(0).sort((a, b) => (b.H * 1000 / b.AB) - (a.H * 1000 / a.AB)))
    }, [hitterData, modalOpened])

    organizedByAverage.map(player=>{
        player['AVG'] = Math.round(player.H * 1000 / player.AB)!==NaN ? `.${Math.round(player.H * 1000 / player.AB)}` : '.000'
    })

    return (
        <ul className="hitters-stats">
            <li>
                <Stats category="AVG" leaders={organizedByAverage} heading="Average"></Stats>
            </li>
            <li>
                <Stats category="AB" leaders={organizedByAb} heading="At Bats"></Stats>
            </li>
            <li>
                <Stats category="H" leaders={organizedByHits} heading="Hits"></Stats>
            </li>
            <li>
                <Stats category="HR" leaders={organizedByHr} heading="Home runs"></Stats>
            </li>
            <li>
                <Stats category="RBI" leaders={organizedByRbi} heading="Runs batted in"></Stats>
            </li>
            <li>
                <Stats category="R" leaders={organizedByR} heading="Runs"></Stats>
            </li>
            <li>
                <Stats category="SB" leaders={organizedBySb} heading="Stolen bases"></Stats>
            </li>
            <li>
                <Stats category="Doubles" leaders={organizedByDoubles} heading="Doubles"></Stats>
            </li>
            <li>
                <Stats category="Triples" leaders={organizedByTriples} heading="Triples"></Stats>
            </li>
        </ul>
    )
}

export default HittersStatsMain;