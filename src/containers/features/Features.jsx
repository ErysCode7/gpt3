import React from "react";
import "./Features.scss";

const FeaturesArticleData = [
  {
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const FeaturesArticle = ({ title, text }) => {
  return (
    <article className="gpt3__features-contents_container">
      <div className="gpt3__features-contents_container-title">
        <div></div>
        <h2>{title}</h2>
      </div>
      <div className="gpt3__features-contents-container_text">
        <p>{text}</p>
      </div>
    </article>
  );
};

const Features = () => {
  return (
    <section className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-title">
        <h2 className="gpt3__gradient--text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <a href="#featues">Request Early Access to Get Started</a>
      </div>
      <div className="gpt3__features-contents">
        {FeaturesArticleData.map((articles, index) => (
          <FeaturesArticle key={index} {...articles} />
        ))}
      </div>
    </section>
  );
};

export default Features;
