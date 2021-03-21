import React from 'react';
import './input-search.less';

const useSearch = () => {
  const searchCallback = (e) => {
    e.preventDefault();
    console.log('test');
  };

  return [searchCallback];
};

const InputSearch = () => {
  const [searchCallback] = useSearch();

  return (
    <div className='custom-input-search'>
      <form>
        <div>
          <div className='custom-input-search__form-wrapper'>
            <input
              type='search'
              id='mySearch'
              name='q'
              placeholder='Search the site...'
            />
          </div>
          <button onClick={(e) => searchCallback(e)}>
            <img src='public/img/icons-search.svg' alt='альтернативный текст' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSearch;
