import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        ${emotionReset}

        body {
          width: 100%;
          font-family: 'Montserrat', sans-serif;
        }
      `}
    />
    <App />
  </React.StrictMode>
);
