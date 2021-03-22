import React from "react";
import PropTypes from "prop-types";

import "./button.less";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="custom-button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
