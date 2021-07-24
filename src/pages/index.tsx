import * as React from "react";
import { PageProps, Link, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import { darkTheme, GlobalStyle, lightTheme } from "../styles/Theme";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Nav from "../components/nav";
import Toggle from "../components/toggle";

const IndexPage: React.FC = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav>
        <Toggle
          theme={isDarkMode}
          toggleTheme={() => {
            setDarkMode(!isDarkMode);
          }}
        />
      </Nav>
      <Layout>
        <Banner />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
