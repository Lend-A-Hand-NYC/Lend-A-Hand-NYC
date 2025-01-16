
// homelessness: https://www.coalitionforthehomeless.org/the-latest/news/
// environmental conservation: https://dec.ny.gov/


import React from 'react';


export default function NewsPage() {
  const articles = [
    {
      title: 'News on Homelesness in NYC',
      description: 'Get informed on the ongoing housing crisis.',
      url: 'https://www.coalitionforthehomeless.org/the-latest/news/',
      imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2019/04/homelessnewss-nyc-better-way.jpg?quality=75&strip=all',

    },
    {
      title: 'News on Enviormental Conservation in NYC',
      description: 'Explore how communities are coming together to make a difference.',
      url: 'https://dec.ny.gov/',
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/2010s_New_York_State_DEC_logo.png"
    },
  ];

  return (
    <div className="page-container">
      <h1 className="heading">Latest News</h1>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-link"

              >
                Read Full Article
              </a>
            </div>
            <img src={article.imageUrl} alt={article.title} className="article-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
