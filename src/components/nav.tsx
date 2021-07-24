import * as React from "react";
import { Link, PageProps } from "gatsby";
import styled from "styled-components";

import LogoSVG from "../assets/logo.svg";

const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1200px;
  width: 100%;
  padding-bottom: 0.75rem;
  position: relative;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  flex-shrink: 0;
  align-items: baseline;
  align-self: flex-end;
  padding: 0.5rem 0.375rem;
  margin-right: 1.25rem;
`;

const SubMenu = styled.div`
  position: absolute;
  padding: 8px;
  right: 0px;
`;

const Nav: React.FC = ({ children }) => (
  <Container>
    <Navigation>
      <Logo>
        <Link to="/">
          <LogoSVG />
        </Link>
      </Logo>
      <SubMenu>{children}</SubMenu>
    </Navigation>
  </Container>
);

export default Nav;
