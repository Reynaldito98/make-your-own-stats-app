import './PlayersMain.css';

function PlayersMain({children}) {
    return (
        <main className="players-main">
            {children}

            <button className="players-main__change-order">Change Order</button>
        </main>
    )
}

export default PlayersMain;