import React from "react";
import PropTypes from "prop-types";

import "./modal.less";

const Modal = ({ active, setActive, children }) => {
  return (
    <>
      <div
        className={active ? "custom-modal active" : "custom-modal"}
        onClick={() => setActive(false)}
      >
        <div
          className={
            active ? "custom-modal__content active" : "custom-modal__content"
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            onClick={() => setActive(false)}
            className={
              active
                ? "custom-modal__close-button active"
                : "custom-modal__close-button"
            }
          ></button>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Modal;
