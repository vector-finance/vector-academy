import * as React from "react";
import { Link, PageProps } from "gatsby";
import styled from "styled-components";
import Nav from "./nav";
import Footer from "./Footer";

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout: React.FC = ({ children }) => (
  <Container>
    <Nav />
    {children}
    <Footer />
  </Container>
);

export default Layout;
