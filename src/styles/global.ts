import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    outline: none;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }


  html {
    font-size: 62.5%;
  }

  body {
  }

  body,
  input,
  textarea,
  button {
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
