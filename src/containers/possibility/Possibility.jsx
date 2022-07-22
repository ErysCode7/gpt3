import React from "react";
import PossibilityImage from "../../assets/images/possibility.png";
import "./Possibility.scss";

const Possibility = () => {
  return (
    <section className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h2 className="gpt3__gradient--text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#home">Request Early Access to Get Started</a>
      </div>
    </section>
  );
};

export default Possibility;
