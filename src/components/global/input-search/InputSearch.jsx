import React from "react";
import PropTypes from "prop-types";

import "./input-search.less";

const useSearch = (callback) => {
  const searchCallback = (e) => {
    e.preventDefault();
    callback();
  };

  return [searchCallback];
};

const InputSearch = ({ callback }) => {
  const [searchCallback] = useSearch(callback);

  return (
    <div className="custom-input-search">
      <form>
        <div>
          <div className="custom-input-search__form-wrapper">
            <input
              type="search"
              id="mySearch"
              name="q"
              placeholder="Search the site..."
            />
          </div>
          <button onClick={(e) => searchCallback(e)}>
            <img src="public/img/icons-search.svg" alt="альтернативный текст" />
          </button>
        </div>
      </form>
    </div>
  );
};

InputSearch.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default InputSearch;
