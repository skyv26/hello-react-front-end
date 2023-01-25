// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyle } from 'styled-components';

const StyleResetter = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;400;700&family=Josefin+Sans:wght@100;300;400;700&display=swap');

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
  }

  /* font-family: 'Exo 2', sans-serif;
  font-family: 'Josefin Sans', sans-serif; */
`;

export default StyleResetter;
