import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Sidebar_one_page.module.css';

const Sidebar_one_page = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
    const apiKey = '9ef2109de84747f0a68a493cb3d4bb4b';
    axios.get(`https://gnews.io/api/v4/top-headlines?country=ua&category=general&apikey=${apiKey}`)
        .then(response => setNews(response.data.articles))
        .catch(error =>console.error('Ошибка при загрузке новостей', error));
    }, []);

    return (
        <div className={styles.news__wrapper}>
            <h1>Новости</h1>
            <ul className={styles.news__list}>
                {news.map((article, index) => (
                <NewsCard key={index} article={article} />
                ))}
            </ul>
        </div>
    );
}

const NewsCard = ({ article }) => {
    return (
        <li className={styles.news__wrapper__item}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Подробнее</a>
        </li>
    );
}

export default Sidebar_one_page;
