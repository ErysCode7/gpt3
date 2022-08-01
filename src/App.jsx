import React, { useState } from "react";
import "./App.scss";
//containers
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers/index";
//components
import { Brand, CTA, Loading, Navbar } from "./components/index";

const App = () => {
  const [loading, setLoading] = useState(true);

  console.log("component render");

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return <Loading />;
  }

  return (
    <div className="gpt3__app">
      <div className="gpt3__gradient--bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
