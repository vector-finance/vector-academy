import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Body1 from "../components/body1";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;

const BackButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.5px solid;
  font-size: 14px;
  outline: none;
  color: ${(props) => props.theme.global.text};

  &:hover {
    color: white;
    background-color: black;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <h1>404 - Page not found</h1>
        <Body1>
          Something went wrong! We can't seem to find the page you are looking
          for.
        </Body1>
        <BackButton onClick={() => window.history.back()}>Go Back</BackButton>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
