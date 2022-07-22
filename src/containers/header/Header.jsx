import React from "react";
import AI from "../../assets/images/ai.png";
import People from "../../assets/images/people.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gpt3__header-content_title gpt3__gradient--text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="gpt3__header-content_text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button" className="gpt3__button ">
            Get Started
          </button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={People} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={AI} alt="AI" />
      </div>
    </header>
  );
};

export default Header;
