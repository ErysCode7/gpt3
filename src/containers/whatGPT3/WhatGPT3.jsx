import React from "react";
import { Feature } from "../../components";
import "./WhatGPT3.scss";

const WhatGPT3 = () => {
  return (
    <section className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt3-feature">
        <div></div>
        <h2>What is GPT-3</h2>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gpt3__whatgpt3-heading_h1 gpt3__gradient--text">
          The possibilities are beyond your imagination
        </h1>
        <p className="gpt3__whatgpt3-heading_p">Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </section>
  );
};

export default WhatGPT3;
