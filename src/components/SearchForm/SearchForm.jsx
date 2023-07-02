import React from 'react';
import PropTypes from 'prop-types';
import { Header, HeaderForm } from './SearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchForm({ onSubmit }) {
  return (
    <Header>
      <HeaderForm onSubmit={onSubmit}>
        <button type="submit">
          <AiOutlineSearch size={20} />
        </button>

        <input
          name="searchField"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </HeaderForm>
    </Header>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
