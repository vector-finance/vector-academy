import * as React from "react";
import styled from "styled-components";
import LightMode from "../assets/light_mode.svg";
import DarkMode from "../assets/dark_mode.svg";

const Container = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 30px;
`;

const Toggle: React.FC<{ theme: boolean; toggleTheme: any }> = ({
  theme,
  toggleTheme,
}) => (
  <Container onClick={toggleTheme}>
    {theme ? <DarkMode /> : <LightMode />}
  </Container>
);

export default Toggle;
