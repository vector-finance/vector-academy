import * as React from "react";
import { Normalize } from "styled-normalize";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../styles/Theme";

import Footer from "./Footer";
import Nav from "./nav";
import Toggle from "./toggle";

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout: React.FC = ({ children }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Nav>
          <Toggle
            theme={isDarkMode}
            toggleTheme={() => {
              setDarkMode(!isDarkMode);
            }}
          />
        </Nav>
        <Normalize />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
