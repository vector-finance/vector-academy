import * as React from "react";
import { PageProps, Link, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import GlobalStyle from "../styles/Global";
import Theme from "../styles/Theme";
import Banner from "../components/banner";

import { Normalize } from "styled-normalize";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  <ThemeProvider theme={Theme}>
    <Normalize />
    <GlobalStyle />
    <Layout>
      <Banner />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
