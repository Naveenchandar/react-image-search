import React from 'react';

const SearchBar = (props) => {
  const { handleChange, handleSubmit } = props
  return (
    <div className="container search">
      <form onSubmit={handleSubmit}>
        <input type="search" aria-label="Search" placeholder=" &nbsp;Search images here..." onChange={handleChange} />&ensp;
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar