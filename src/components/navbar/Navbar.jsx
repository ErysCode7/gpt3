import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Logo from "../../assets/images/logo.svg";
import "./Navbar.scss";

const Menu = () => {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#whatgpt3">What is GPT3?</a>
      </li>
      <li>
        <a href="possibility">Open AI</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#blog">Library</a>
      </li>
    </>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNav = useRef("");

  useEffect(() => {
    /**
     * Perform if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (mobileNav.current && !mobileNav.current.contains(event.target)) {
        setShowMobileNav(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNav]);

  return (
    <nav className="gpt3__navbar">
      <div className="gpt3__navbar-container">
        <div className="gpt3__navbar-logo_links">
          <div className="gpt3__navbar-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="gpt3__navbar-navlinks">
            <Menu />
          </ul>
          <ul
            ref={mobileNav}
            className={
              showMobileNav
                ? "gpt3__navbar-mobile_navlinks show"
                : "gpt3__navbar-mobile_navlinks"
            }
          >
            <Menu />
            <div className="gpt3__navbar-mobile-btn">
              <a href="#">Sign In</a>
              <button className="gpt3__button">Sign up</button>
            </div>
          </ul>
        </div>

        <div className="gpt3__navbar-btn">
          <a href="#">Sign In</a>
          <button type="button" className="gpt3__button">
            Sign up
          </button>
        </div>
        <div className="gpt3__navbar-mobile_hamburger">
          {showMobileNav ? (
            <RiCloseLine
              color="#ffffff"
              className="hamburger"
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            />
          ) : (
            <RiMenu3Line
              color="#ffffff"
              className="hamburger"
              onClick={() => setShowMobileNav((prevState) => !prevState)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
