import './NewsMain.css';
import Card from '../Card/Card';
import EmptyList from '../../General/EmptyList/EmptyList';
import {useState} from 'react';

function NewsMain({newsData, visibleCards, handleVisibleCards, teamData}) {
    return (
        <main className="news-main">
            <div className="news-main__background">

            </div>

            <h3 className="news-main__heading">{teamData[0].name}' Current News</h3>

            <ul className="news-main__list">
                {
                    newsData.length>0 ? newsData.filter(item => item.title!=="[Removed]").slice(0, visibleCards).map((news, index) => {
                        return (
                            <Card key={index} news={news}></Card>
                        )
                    }):<EmptyList message="No news at the moment"></EmptyList>
                }
            </ul>

            {visibleCards<(newsData.filter(item => item.title!=="[Removed]").length)?<button className="news-main__show-more" onClick={handleVisibleCards}>Show more</button>:""}
        </main>
    )
}

export default NewsMain