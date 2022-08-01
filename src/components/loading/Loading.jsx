import React from "react";
import "./Loading.scss";

const loading = () => {
  return (
    <div className="gpt3__loading">
      <h1 className="gpt3__gradient--text">GPT3 Modern UI/UX Website</h1>
      <div className="loader"></div>
    </div>
  );
};

export default loading;
