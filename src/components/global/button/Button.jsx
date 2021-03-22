import React from "react";
import "./button.less";

const Button = ({ onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="custom-button"
    >
      Добавить
    </button>
  );
};

export default Button;
