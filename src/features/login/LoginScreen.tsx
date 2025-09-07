import { Box, Button, TextField, Typography } from "@mui/material";

export default function LoginScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "white",
        px: 3,
      }}
    >
      <Typography variant="h4" mb={3}>
        Iniciar Sesión
      </Typography>

      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
      />

      <Button variant="contained" color="primary" fullWidth>
        Ingresar
      </Button>
    </Box>
  );
}
