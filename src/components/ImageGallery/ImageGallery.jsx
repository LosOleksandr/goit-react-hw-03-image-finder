import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { fetchImages } from 'api/finder-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { GalleryList, Message } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    isFirstSearch: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.props;

    if (prevProps.value !== value) {
      if (!value) {
        return;
      }
      this.setState({
        images: [],
      });
      await this.getImages();
    }

    if (prevProps.page !== page) {
      await this.getImages();
    }
  }

  getImages = async () => {
    const { value, page, handleLoader, handleButtonVisibility } = this.props;
    try {
      handleLoader();
      handleButtonVisibility(true);

      const fetchedData = await fetchImages(value, page);
      if (!fetchedData.hits.length) {
        toast.error(`No images by value ${value} were found`);
        throw new Error('No matches!');
      }
      this.setState(
        prevState => ({
          images:
            page === 1
              ? fetchedData.hits
              : [...prevState.images, ...fetchedData.hits],
          isFirstSearch: false,
          error: null,
        }),
        () => {
          if (fetchedData.total <= this.state.images.length) {
            toast.success("You've watched all images");
          } else {
            handleButtonVisibility(false);
          }
        }
      );
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      handleLoader();
    }
  };

  render() {
    const { images, error } = this.state;
    return (
      <>
        <GalleryList>
          {error ? (
            <Message>{error}</Message>
          ) : (
            images.map(image => (
              <ImageGalleryItem
                key={image.id}
                webURL={image.webformatURL}
                largeURL={image.largeImageURL}
                tags={image.tags}
                onImageClick={this.props.onImageClick}
              />
            ))
          )}
        </GalleryList>

        <ToastContainer />
      </>
    );
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  handleLoader: PropTypes.func.isRequired,
  handleButtonVisibility: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
