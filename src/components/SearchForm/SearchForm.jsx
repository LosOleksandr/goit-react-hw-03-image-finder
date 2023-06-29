import React from 'react';
// import PropTypes from 'prop-types';

export default function SearchForm({ onSubmit }) {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <span>Search </span>
        </button>

        <input
          name="searchField"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}