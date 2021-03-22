import React from "react";
import PropTypes from "prop-types";

import "./input.less";

const Input = ({ type, id, handler }) => {
  return (
    <input
      type={type}
      id={id}
      onChange={(e) => handler(e.target.value)}
      className="custom-input"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Input;
