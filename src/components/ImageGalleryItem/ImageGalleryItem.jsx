import React from 'react';

export default function ImageGalleryItem({ webURL, tags }) {
  return (
    <li>
      <img src={webURL} alt={tags} width={640} />
    </li>
  );
}
