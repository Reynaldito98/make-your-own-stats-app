import './NewsMain.css';
import Card from '../Card/Card';

function NewsMain() {
    return (
        <main className="news-main">
            <div className="news-main__background">

            </div>

            <h3 className="news-main__heading">Kansas City Royals' Current News</h3>

            <ul className="news-main__list">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </ul>

            <button className="news-main__show-more">Show more</button>
        </main>
    )
}

export default NewsMain