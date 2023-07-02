import React from 'react';
import PropTypes from 'prop-types';
import noImage from 'images/no-image.jpg';

export default function ImageGalleryItem({
  webURL,
  tags,
  largeURL,
  onImageClick,
}) {
  return (
    <li>
      <a onClick={onImageClick} href={largeURL}>
        <img src={webURL ? webURL : noImage} alt={tags} />
      </a>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
