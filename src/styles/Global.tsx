import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
font-family: 'IBM Plex Sans', sans-serif;

h1 {
    font-size: 99px;
    font-weight: 300;
    margin: 0;
}

h2 {
    font-size: 62px;
    font-weight: 300;
    margin: 0;
}

h3 {
    font-size: 49px;
    font-weight: 400;
    margin: 0;
}

h4 {
    font-size: 35px;
    font-weight: 500;
    margin: 0;
}

h5 {
    font-size: 25px;
    font-weight: 400;
    margin: 0;
}

h6 {
    font-size: 21px;
    font-weight: 500;
    margin: 0;
}

a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
