//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/lato/400.css";   // regular
import "@fontsource/lato/700.css";   // bold
import "@fontsource/lato/900.css";   // extrabold

const theme = createTheme({
  typography: {
    fontFamily: "Lato, Arial, sans-serif",
  },
  palette: {
    mode: "light", // o "dark"
    primary: {
      main: "#1976d2", // color azul MUI por defecto
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);