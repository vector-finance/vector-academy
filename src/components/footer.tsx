import * as React from "react";
import styled from "styled-components";
import Body2 from "./Body2";

const Container = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Footer: React.FC = () => (
  <Container>
    <Body2>
      ©2021 <a href="https://vector.finance/">Vector Academy. </a>Published by{" "}
      <a href="https://vector.finance/">Vector Finance.</a>
    </Body2>
  </Container>
);

export default Footer;
