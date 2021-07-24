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
    gray300: colorPalette.gray300,
    suface: colorPalette.surface,
  },
};

export const darkTheme = {
  ...baseTheme,
  global: {
    background: "#121212",
    bgPrimary: "#212121",
    bgSecondary: "#121212",
    text: "#ffffff",
    surface: "#424242",
  },
};

export const lightTheme = {
  ...baseTheme,
  global: {
    background: "#E0E0E0",
    bgPrimary: colorPalette.primary50,
    bgSecondary: colorPalette.secondary50,
    text: "#000000",
    surface: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  background: linear-gradient(
    ${(props) => props.theme.global.bgPrimary},
    ${(props) => props.theme.global.bgSecondary}
  );
}

body {
  height: 100%;
    color: ${(props) => props.theme.global.color};
}

h1 {
    font-size: 99px;
    font-weight: 300;
    margin: 0;
    color: ${(props) => props.theme.global.text};
}

h2 {
    font-size: 62px;
    font-weight: 300;
    margin: 0;
    color: ${(props) => props.theme.global.text};
}

h3 {
    font-size: 49px;
    font-weight: 400;
    margin: 0;
    color: ${(props) => props.theme.global.text};
}

h4 {
    font-size: 35px;
    font-weight: 500;
    margin: 0;
    color: ${(props) => props.theme.global.text};
}

h5 {
    font-size: 25px;
    font-weight: 400;
    margin: 0;
    color: ${(props) => props.theme.global.text};
}

h6 {
    font-size: 21px;
    font-weight: 500;
    margin: 0;
    color: ${(props) => props.theme.global.text};
}

a {
    text-decoration: none;
    color: ${(props) => props.theme.global.text};

    &:hover {
      text-decoration: underline;
    }
  }

ul, ol {
  padding: 0;
  margin: 0;
  list-style-position: outside;
  list-style-image: none;

  a {
    &:hover {
      text-decoration: none;
      font-weight: bold;
    }
  }
}
`;
