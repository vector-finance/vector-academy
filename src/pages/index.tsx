import * as React from "react";
import { PageProps, Link, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import GlobalStyle from "../styles/Global";
import Theme from "../styles/Theme";
import { IndexProps } from "../types";

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
    <GlobalStyle />
    <Layout>
      <h1>hello</h1>
      <h6>checkout</h6>
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
