//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Container, Typography, Button } from "@mui/material";
import './App.css'

function App() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a Fiao 📲
      </Typography>
      <Button variant="contained" color="primary">
        Iniciar
      </Button>
    </Container>
  );
}

export default App;
