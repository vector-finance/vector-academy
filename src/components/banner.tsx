import * as React from "react";
import styled from "styled-components";
import Body1 from "./body1";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: linear-gradient(
    ${(props) => props.theme.palette.primary},
    ${(props) => props.theme.palette.secondary}
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

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0.5rem;
  color: white;
`;

const Banner: React.FC = () => (
  <Container>
    <Content>
      <h5>Welcome to Vector Academy</h5>
      <Subtitle>
        Your end-to-end learning hub for all things Crypto and DeFi
      </Subtitle>
    </Content>
  </Container>
);

export default Banner;
