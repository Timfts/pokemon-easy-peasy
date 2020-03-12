import React from "react";
import HeaderStyle from './header.module.scss'

const Header = () => {
  return (
    <header className={HeaderStyle.root}>
      <h2 className={HeaderStyle.brand}>Pokemon app</h2>
    </header>
  );
};

export default Header;
