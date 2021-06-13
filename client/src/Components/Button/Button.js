import "./button.scss";
import React from "react";

const Button = ({ toDo, historyA, pathName, text, clickHandler }) => {
  const buttonClickHandler = (e) => {
    clickHandler(e, pathName, historyA, toDo);
  };

  return (
    <button name={text} className="button" onClick={buttonClickHandler}>
      {text}
    </button>
  );
};

export default Button;
