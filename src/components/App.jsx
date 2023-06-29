import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from 'api/finder-api';

export default class App extends Component {
  state = {
    images: [],
    value: '',
    loading: false,
  };

  onSearchSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchField.value;
    this.setState({
      value: searchValue,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({
        loading: true,
      });

      const fetchedData = await fetchImages(this.state.value);
      this.setState({
        images: fetchedData.hits,
        loading: false,
      });
    }
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.onSearchSubmit} />
        {this.state.loading ? (
          <h1>LOADIND...</h1>
        ) : (
          <ImageGallery images={this.state.images} />
        )}
      </div>
    );
  }
}
