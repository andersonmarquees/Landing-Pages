import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Home from "./templates/App/index.jsx";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme.js";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
