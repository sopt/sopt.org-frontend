import { css } from '@emotion/react';
import reset from 'emotion-reset';
export const global = css`
  ${reset}

  h1, h2, h3, h4, h5, h6, p {
    color: #fcfcfc;
  }

  body {
    background-color: #181818;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
