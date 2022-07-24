import React from "react";
import Logo from "../../assets/images/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gpt3__gradient--text">
          Do you want to step in to the future before others
        </h2>
      </div>
      <div className="gpt3__footer-btn">
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={Logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <ul className="gpt3__footer-links_div">
          <h4>Links</h4>
          <li>Overons</li>
          <li>Social Media</li>
          <li>Counters</li>
          <li>Contact</li>
        </ul>
        <ul className="gpt3__footer-links_div">
          <h4>Company</h4>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
        <ul className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <li>Crechterwoord K12 182 DK Alknjkcb</li>
          <li>085-132567</li>
          <li>info@payme.net</li>
        </ul>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
