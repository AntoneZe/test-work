import React from "react";
import PropTypes from "prop-types";

import "./button.less";

const Button = ({ onClick, type, children }) => {
  return (
    <button
      type={type}
      onClick={() => {
        onClick ? onClick() : null;
      }}
      className="custom-button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
