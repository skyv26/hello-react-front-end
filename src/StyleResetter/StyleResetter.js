// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyle } from 'styled-components';

const StyleResetter = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    width: 100%;
    min-height: 100%;
    background-color: #6592b9;
    color: white;
  }

  /* font-family: 'Exo 2', sans-serif;
  font-family: 'Josefin Sans', sans-serif; */
`;

export default StyleResetter;
