import React, { useState } from "react";
import PropTypes from "prop-types";

import "./input-search.less";

const useSearch = (callback) => {
  const searchCallback = (e, value) => {
    e.preventDefault();
    callback(value);
  };

  return [searchCallback];
};

const InputSearch = ({ callback }) => {
  const [value, setValue] = useState("");
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
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search the site..."
            />
          </div>
          <button onClick={(e) => searchCallback(e, value)}>
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
