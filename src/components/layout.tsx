import * as React from "react";
import { Link, PageProps } from "gatsby";
import styled from "styled-components";
import { LayoutProps } from "../types";

const Container = styled.div`
  margin: 4rem auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout: React.FC = ({ children }) => <Container>{children}</Container>;

export default Layout;
