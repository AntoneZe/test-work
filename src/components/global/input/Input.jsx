import React from "react";
import PropTypes from "prop-types";

import "./input.less";

const Input = ({ type, id }) => {
  return <input type={type} id={id} className="custom-input" />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
