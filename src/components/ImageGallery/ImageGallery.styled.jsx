import styled from '@emotion/styled';

export const GalleryList = styled.ul`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 10px;
  img {
    width: 100%;
    object-fit: cover;
    height: 240px;
  }
`;
export const Message = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
`;
