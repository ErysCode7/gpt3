import React from "react";
import "./Brand.scss";
import { atlassian, dropbox, google, shopify, slack } from "./import";

const Brand = () => {
  return (
    <section className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
    </section>
  );
};

export default Brand;
