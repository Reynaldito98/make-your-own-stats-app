import './Card.css';
import newsImage from '../../../images/news.jpg';

function Card({news}) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const formattedDate = new Date(news.publishedAt.slice(0, 10)).toLocaleDateString('en-US', options);
    console.log(news);

    return (
        <li className="card">
            <img src={news.urlToImage} alt={news.title} className="card__image"></img>
            <p className="card__heading">{news.title}</p>
            <p className="card__date">{formattedDate}</p>
            <p className="card__description">{news.description}</p>
        </li>
    )
}

export default Card;