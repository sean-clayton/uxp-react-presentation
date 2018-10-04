/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

const Container = styled.main`
  background-color: ${props => props.theme.colors.primary};
`;

const H1 = styled.h1`
  color: ${props => props.theme.colors.secondary};
`;

class CoolApp extends React.Component {
  render() {
    return (
      <Container>
        <H1>Howdy!</H1>
      </Container>
    );
  }
}

const theme = {
  colors: {
    primary: "#0077FF",
    secondary: "#FF7700"
  }
};

export const App = () => (
  <ThemeProvider theme={theme}>
    <CoolApp />
  </ThemeProvider>
);
