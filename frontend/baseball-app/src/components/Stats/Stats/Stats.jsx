import './Stats.css';

function Stats({category, leaders}) {
    return (
            <>
                <h2 className="table__title">{category}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table__name">NAME</th>
                            <th>{category}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaders.slice(0, 5).map(player => {
                                return (
                                    <tr key={player._id}>
                                        <td className="table__name">{player.name}</td>
                                        <td>{player[category] || '0'}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
    )
}

export default Stats;