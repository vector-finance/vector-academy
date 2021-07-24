import { createGlobalStyle } from "styled-components";

const colorPalette = {
  primary: "#9055A2",
  primary50: "#F2EBF4",
  secondary: "#56B4D3",
  secondary50: "#EBF6FA",
  gray300: "#E0E0E0",

  success: "#007C4D",
  error: "#E12C3F",
};

const baseTheme = {
  actions: {
    error: colorPalette.error,
    success: colorPalette.success,
  },
  palette: {
    primary: colorPalette.primary,
    primary50: colorPalette.primary50,
    secondary: colorPalette.secondary,
    secondary50: colorPalette.secondary50,
  },
};

export const darkTheme = {
  ...baseTheme,
  global: {
    background: "#121212",
    text: "#ffffff",
  },
};

export const lightTheme = {
  ...baseTheme,
  global: {
    background: "#ffffff",
    text: "#000000",
  },
};

export const GlobalStyle = createGlobalStyle`
font-family: 'IBM Plex Sans', sans-serif;
html body{
  height: 100vh;
}

body {
    background-color: ${(props) => props.theme.global.background};
    color: ${(props) => props.theme.global.color};
}

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
    color: ${(props) => props.theme.global.text};

    &:hover {
      text-decoration: underline;
    }
  }
`;
