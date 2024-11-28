import './Stats.css';

function Stats() {
    return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="table__name">NAME</th>
                        <th>AVG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table__name">Jose Altuve</td>
                        <td>.327</td>
                    </tr>
                    <tr>
                        <td>Jose Abreu</td>
                        <td>.319</td>
                    </tr>
                    <tr>
                        <td>Luis Arraez</td>
                        <td>.316</td>
                    </tr>
                    <tr>
                        <td>Bobby Witt Jr.</td>
                        <td>.313</td>
                    </tr>
                    <tr>
                        <td>Shohei Ohthani</td>
                        <td>.305</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default Stats;