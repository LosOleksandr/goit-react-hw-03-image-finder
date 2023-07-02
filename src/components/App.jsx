import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import Modal from './Modal/Modal';
import noImage from 'images/no-image.jpg';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    value: '',
    page: 1,
    loading: false,
    isButtonHidden: true,
    isModalOpen: false,
    largeImage: null,
  };

  onSearchSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchField.value;
    if (!searchValue) {
      toast.info('Please, enter the value');
    }
    this.setState({
      value: searchValue.toLowerCase().trim(),
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleButtonVisibility = isHidden => {
    this.setState({ isButtonHidden: isHidden });
  };

  handleLoader = () => {
    this.setState(prevState => ({
      loading: !prevState.loading,
    }));
  };

  handleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  onImageClick = evt => {
    evt.preventDefault();
    this.handleModal();
    this.setState({
      largeImage: evt.currentTarget.href ? evt.currentTarget.href : noImage,
    });
  };

  render() {
    const { page, value, isButtonHidden, loading, isModalOpen, largeImage } =
      this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSearchSubmit} />
        <Container>
          {loading && <Loader />}
          <ImageGallery
            page={page}
            value={value}
            handleLoader={this.handleLoader}
            handleButtonVisibility={this.handleButtonVisibility}
            onImageClick={this.onImageClick}
          />

          {!isButtonHidden && <Button onClick={this.loadMore} />}
          {isModalOpen && (
            <Modal largeImage={largeImage} handleModal={this.handleModal} />
          )}
          <ToastContainer />
        </Container>
      </>
    );
  }
}
