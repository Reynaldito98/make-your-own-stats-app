const apiKey = '183def0c951d4c2b9f084dbf18b3df1c';
const currentDate = new Date();
const sevenDaysDate = new Date(currentDate. getTime() - 7 * 24 * 60 * 60 * 1000);
const today = `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
const dateSevenDaysAgo = `${sevenDaysDate.getFullYear()}-${String(sevenDaysDate.getMonth()+1).padStart(2, '0')}-${String(sevenDaysDate.getDate()).padStart(2, '0')}`;

import {checkResponse} from './utils.js';

const getNews = (teamName) => {
    return fetch(`https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=BlzFiz0ALsWFAnkHTr9t2wUCR0Hmvgl0TieQopbK`)
                .then(checkResponse)
}

export {getNews}

//https://newsapi.org/v2/everything?q="${teamName}"&from=${dateSevenDaysAgo}&to=${today}&sortBy=publishedAt&apiKey=${apiKey}