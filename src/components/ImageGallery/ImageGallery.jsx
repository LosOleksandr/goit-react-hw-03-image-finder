import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webURL={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </ul>
  );
}