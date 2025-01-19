import './Card.css';
import newsImage from '../../../images/news.jpg';

function Card({news}) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const formattedDate = new Date(news.published_at.slice(0, 10)).toLocaleDateString('en-US', options);

    return (
        <li className="card">
            <img src={news.image_url} alt={news.title} className="card__image"></img>
            <p className="card__heading">{news.title}</p>
            <p className="card__date">{formattedDate}</p>
            <p className="card__description">{news.description}</p>
        </li>
    )
}

export default Card;