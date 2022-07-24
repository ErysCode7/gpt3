import React from "react";
import "./Article.scss";

const Article = ({ imageUrl, date, title }) => {
  return (
    <article className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="Blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a href="#blog">Read Full Article</a>
      </div>
    </article>
  );
};

export default Article;
