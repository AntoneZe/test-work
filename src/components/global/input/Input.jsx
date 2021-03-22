import React from "react";

import "./input.less";

const Input = ({ type, id }) => {
  return <input type={type} id={id} className="custom-input" />;
};

export default Input;
