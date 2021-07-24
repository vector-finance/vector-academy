import * as React from "react";
import { Link, PageProps } from "gatsby";
import styled from "styled-components";

import LogoSVG from "../assets/logo.svg";

const Container = styled.div`
  width: 100%;
  padding-bottom: 0.75rem;
  position: relative;
`;

const Navigation = styled.nav`
  justify-content: space-between;
`;

const Logo = styled.div`
  flex-shrink: 0;
  align-items: center;
  align-self: flex-start;
  padding: 0.5rem 0.375rem;
  margin-right: 1.25rem;
`;

const Nav: React.FC = () => (
  <Container>
    <Navigation>
      <Logo>
        <Link to="/">
          <LogoSVG />
        </Link>
      </Logo>
    </Navigation>
  </Container>
);

export default Nav;
