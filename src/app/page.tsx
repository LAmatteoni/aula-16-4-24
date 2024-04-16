"use client";

import Menu from "./componentes/Menu";
import { useState } from "react";
import GlobalStyle from "./styles/globals"
import { ThemeProvider } from "styled-components";
import { Container } from "./style";
import light from './styles/themes/light'
import dark from './styles/themes/dark'

export default function Home() {

  const [theme,setTheme] = useState(light);

  return (
    <>
      <ThemeProvider theme={ theme }>
        <Container>
          <GlobalStyle/>
          <Menu onChange={ checked => setTheme( checked ? dark : light ) }/>
          <h1>Home</h1>
        </Container>
      </ThemeProvider>
    </>
  );
}
