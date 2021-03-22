import React from 'react';
import PropTypes from 'prop-types';

import './input.less';

const Input = ({ type, id, value, handler, errorMessage, lengthRule }) => {
  return (
    <div className='custom-input__wrapper'>
      <input
        maxLength={lengthRule}
        type={type}
        id={id}
        value={value}
        onChange={(e) => handler(e.target.value)}
        className={
          errorMessage ? 'custom-input custom-input--error' : 'custom-input'
        }
      />
      {errorMessage ? <span>{errorMessage}</span> : null}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  lengthRule: PropTypes.number,
};

export default Input;
