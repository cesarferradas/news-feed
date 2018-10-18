import React from 'react';

const SingleArticle = ({article}) => (
  <div className="col s12 m6 l4 fixed-height">
    <div className="card hoverable">
      <div className="card-image">
        <img className="responsive-img" src={article.urlToImage} alt={article.title} />
        <span className="card-title">{article.source.name}</span>
      </div>
      <div className="card-content">
        <p>{article.title}</p>
      </div>
      <div className="card-action">
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more ></a>
      </div>
    </div>
  </div>
)

export default SingleArticle;
