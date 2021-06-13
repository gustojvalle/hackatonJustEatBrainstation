import "./header.scss";
import React, { Component, useState } from "react";

const Header = (history) => {
  const [page, setPage] = useState("");

  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list-item ">
          <a href="/home">Home</a>
        </li>
        <li className="header__list-item header__list-item--margin">
          <a href="/about">About</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
