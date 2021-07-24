import * as React from "react";
import styled from "styled-components";
import Body1 from "./body1";

const Container = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Footer: React.FC = () => (
  <Container>
    <Body1>
      ©2021 <a href="https://vector.finance/">Vector Academy. </a>Published by{" "}
      <a href="https://vector.finance/">Vector Finance.</a>
    </Body1>
  </Container>
);

export default Footer;
