import './PitchersStatsMain.css';
import Stats from '../Stats/Stats';
import { useEffect, useState } from 'react';

function PitchersStatsMain({pitcherData, modalOpened}) {
    const [organizedByIp, setOrganizedByIp] = useState([]);
    const [organizedByEr, setOrganizedByEr] = useState([]);
    const [organizedByW, setOrganizedByW] = useState([]);
    const [organizedByL, setOrganizedByL] = useState([]);
    const [organizedBySv, setOrganizedBySv] = useState([]);
    const [organizedByK, setOrganizedByK] = useState([]);
    const [organizedByBb, setOrganizedByBb] = useState([]);
    const [organizedByEra, setOrganizedByEra] = useState([]);
    
    useEffect(() => {
        setOrganizedByIp(pitcherData.slice(0).sort((a, b) => b.IP - a.IP));
        setOrganizedByEr(pitcherData.slice(0).sort((a, b) => a.ER - b.ER));
        setOrganizedByW(pitcherData.slice(0).sort((a, b) => b.W - a.W));
        setOrganizedByL(pitcherData.slice(0).sort((a, b) => a.IP - b.IP));
        setOrganizedBySv(pitcherData.slice(0).sort((a, b) => b.SV - a.SV));
        setOrganizedByK(pitcherData.slice(0).sort((a, b) => b.K - a.K));
        setOrganizedByBb(pitcherData.slice(0).sort((a, b) => b.BB - a.BB));
        setOrganizedByEra(pitcherData.slice(0).sort((a, b) => (a.ER * 9 / a.ER) - (b.ER * 9 / b.ER)));
    }, [pitcherData, modalOpened])

    organizedByEra.map(player => {
        player['ERA'] = player.ER * 9 / player.IP !== NaN ? (player.ER * 9 / player.IP).toFixed(2) : '0.00'
    })

    return (
        <ul className="pitchers-stats">
            <li>
                <Stats category="ERA" leaders={organizedByEra} heading="Earned runs average"></Stats>
            </li>
            <li>
                <Stats category="IP" leaders={organizedByIp} heading="Innings pitched"></Stats>
            </li>
            <li>
                <Stats category="ER" leaders={organizedByEr} heading="Earned runs"></Stats>
            </li>
            <li>
                <Stats category="W" leaders={organizedByW} heading="Wins"></Stats>
            </li>
            <li>
                <Stats category="L" leaders={organizedByL} heading="Losses"></Stats>
            </li>
            <li>
                <Stats category="K" leaders={organizedByK} heading="Strikeouts"></Stats>
            </li>
            <li>
                <Stats category="BB" leaders={organizedByBb} heading="Base on balls"></Stats>
            </li>
            <li>
                <Stats category="SV" leaders={organizedBySv} heading="Saves"></Stats>
            </li> 
        </ul>
    )
}

export default PitchersStatsMain;