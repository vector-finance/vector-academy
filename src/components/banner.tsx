import * as React from "react";
import styled from "styled-components";
import Body1 from "./body1";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: linear-gradient(
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary}
  );
  border-radius: 8px;
  min-height: 168px;
`;

const Content = styled.div`
  max-width: 32em;
  margin: 32px;
  text-align: left;
  color: white;
`;

const Banner: React.FC = () => (
  <Container>
    <Content>
      <h5>Welcome to Vector Academy</h5>
      <Body1>Your end-to-end learning hub for all things Crypto and DeFi</Body1>
    </Content>
  </Container>
);

export default Banner;
