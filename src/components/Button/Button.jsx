import React from 'react';
import { LoadMore } from './Button.styled';

export default function Button({ onClick }) {
  return <LoadMore onClick={onClick}>Load More</LoadMore>;
}
