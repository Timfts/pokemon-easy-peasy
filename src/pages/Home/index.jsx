import React from "react";
import useHome from "./home.hook";
import HomeStyle from "./home.module.scss";

const HomePage = () => {
  const { name } = useHome();
  return (
    <div className={HomeStyle.root}>
      <h1>teste</h1>
    </div>
  );
};

export default HomePage;
