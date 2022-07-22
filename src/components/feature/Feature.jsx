import React from "react";
import "./Feature.scss";

const Feature = ({ title, text }) => {
  return (
    <article className="gpt3__feature-container">
      <div className="gpt3__feature-container__title">
        <div></div>
        <h2>{title}</h2>
      </div>
      <div className="gpt3__feature-container__text">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Feature;
