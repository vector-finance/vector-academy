import * as React from "react";
import { Link, PageProps } from "gatsby";
import { Normalize } from "styled-normalize";
import styled from "styled-components";

import Footer from "./Footer";

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Normalize />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
