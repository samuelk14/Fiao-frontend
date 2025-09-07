import { Box, Button, TextField, Typography, Link, Divider, Paper, Avatar } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

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
      {/* Logo */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        fiaó
      </Typography>

      {/* Título */}
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Iniciar sesión
      </Typography>

      {/* Campos de usuario y contraseña */}
      <TextField
        label="Correo / Usuario"
        placeholder="Ingresa tu usuario"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 1 }}
      />

      {/* Olvidaste contraseña */}
      <Box sx={{ width: "100%", textAlign: "right", mb: 3 }}>
        <Typography variant="body2">
          ¿Olvidaste tu contraseña?{" "}
          <Link href="#" underline="hover" fontWeight="bold">
            Ingresa aquí
          </Link>
        </Typography>
      </Box>

      {/* Botón Iniciar */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mb: 2,
          bgcolor: "black",
          "&:hover": { bgcolor: "#333" },
          borderRadius: 3,
          py: 1.2,
        }}
      >
        Iniciar
      </Button>

      {/* Iniciar con Google */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{
          mb: 3,
          textTransform: "none",
          bgcolor: "#f5f5f5",
          border: "none",
          borderRadius: 2,
          py: 1.2,
        }}
      >
        Iniciar con Google
      </Button>

      {/* Patrocinador */}
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          p: 2,
          borderRadius: 2,
          bgcolor: "#fafafa",
        }}
      >
        <Avatar sx={{ bgcolor: "purple", mr: 2 }}>P</Avatar>
        <Box>
          <Typography variant="body1" fontWeight="bold">
            Patrocinador
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descripción
          </Typography>
        </Box>
      </Paper>

      
    </Box>
  );
}
