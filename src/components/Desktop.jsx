import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset, List, ListItem, AppBar, Toolbar, Button } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const Desktop = ({ children }) => {
  return (
    <ThemeProvider theme={original}>
      <div
        style={{
          fontFamily: 'ms_sans_serif',
          background: '#008080',
          height: '100vh',
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <style>
          {`
            @font-face {
              font-family: 'ms_sans_serif';
              src: url('${ms_sans_serif}') format('woff2');
              font-weight: 400;
              font-style: normal;
            }
            @font-face {
              font-family: 'ms_sans_serif';
              src: url('${ms_sans_serif_bold}') format('woff2');
              font-weight: bold;
              font-style: normal;
            }
            body {
              margin: 0;
              padding: 0;
            }
          `}
        </style>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Desktop; 