import './Card.css';
import news from '../../../images/news.jpg';

function Card() {
    return (
        <li className="card">
            <img src={news} className="card__image"></img>
            <p className="card__heading">Kansas City Royals have won the pennant once more</p>
            <p className="card__date">December 27th, 2024</p>
            <p className="card__description">hdeqhdgwjefgdwehfgwehfgwejhfgjewhfgwhgfheghfgwhgheghfegfhwghehfgehgfhwghfgjwhfwhffhwjehfwjhfgwhegfhhghghvhvhvhvvhvhjhvhjhvjhvkhbhhbjbjh</p>
        </li>
    )
}

export default Card;