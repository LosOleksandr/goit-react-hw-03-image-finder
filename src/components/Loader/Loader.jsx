import React from 'react';
import { StyledLoader } from './Loader.styled';
import { Puff } from 'react-loader-spinner';

export default function Loader() {
  return (
    <StyledLoader>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4ad2eb"
        ariaLabel="puff-loading"
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
}
