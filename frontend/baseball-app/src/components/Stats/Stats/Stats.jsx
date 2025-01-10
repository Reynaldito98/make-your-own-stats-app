import './Stats.css';

function Stats({category, leaders, heading}) {
    return (
            <div className="table__container">
                <h2 className="table__title">{heading}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table__name">NAME</th>
                            <th>{category}</th>
                        </tr>
                    </thead>
                    {
                        leaders.length>0 ?
                            <tbody>
                                {
                                    leaders.slice(0, 5).map(player => {
                                        return (
                                            <tr key={player._id}>
                                                <td className="table__name">{player.name}</td>
                                                <td>{player[category]!==".NaN" ? player[category]!=="NaN" ? player[category]: '0.00' : '.000'}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            :
                            <p className="table__empty-list">No players in the team</p>
                    }
                </table>
            </div>
    )
}

export default Stats;