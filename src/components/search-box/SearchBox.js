import React from 'react';
import './search.css';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className='search-container'>
      <input
        className='searchbox'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
