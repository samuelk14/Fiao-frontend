import { Box, Button, TextField, Typography, Link, Avatar, Card, CardContent, Stack} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Logo from "../../assets/fiao.svg";

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
      <img src={Logo} alt="fiaó" style={{ width: 120 }} />

      {/* Título */}
      <Typography
        variant="h6"
        fontWeight={800}
        fontFamily="Lato"
        mb={3}
        sx={{ fontSize: "24px" }}
      >
        Iniciar sesión
      </Typography>
      
       {/* Formulario */}
      <Box width="100%" maxWidth={360}>

        {/* Correo / Usuario */}
        <TextField
          fullWidth
          label="Correo / Usuario"
          placeholder="Ingresa tu usuario"
          variant="outlined"
          InputLabelProps={{
            sx: { backgroundColor: "#FEF7FF", px: 0.5 },
          }}
          sx={{
            mb: 2,
            height: 56,
            "& .MuiOutlinedInput-root": {
              height: 56,
            },
          }}
        />

        {/* Contraseña */}
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
          variant="outlined"
          InputLabelProps={{
            sx: { backgroundColor: "#FEF7FF", px: 0.5 },
          }}
          sx={{
            mb: 3,
            height: 56,
            "& .MuiOutlinedInput-root": {
              height: 56,
            },
          }}
        />

        {/* ¿Olvidaste tu contraseña? */}
        <Typography
          variant="body2"
          sx={{
            color: "rgba(28,28,28,0.64)",
            mb: 3,
          }}
        >
          ¿Olvidaste tu contraseña?{" "}
          <Link href="#" underline="none" sx={{ color: "#1C1C1C", fontWeight: 600 }}>
            Ingresa aquí
          </Link>
        </Typography>

        {/* Botón Iniciar */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#1C1C1C",
            color: "white",
            textTransform: "none",
            fontWeight: 600,
            height: 52,
            mb: 2,
            "&:hover": {
              backgroundColor: "#333333",
            },
            borderRadius: "14px",
          }}
        >
          Iniciar
        </Button>

        {/* Botón Google */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            textTransform: "none",
            color: "#1C1C1C",
            borderColor: "#e0e0e0",
            backgroundColor: "#FAFAFA",
            mb: 3,
            height: 52,
            borderRadius: "14px",
          }}
        >
          Iniciar con Google
        </Button>

        {/* Patrocinador */}
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            backgroundColor: "#FEF7FF",
            borderRadius: "12px",
          }}
        >
          <Avatar sx={{ bgcolor: "#E0D7FF", mr: 2 }}>P</Avatar>
          <CardContent sx={{ flex: "1 0 auto", py: 1 }}>
            <Typography sx={{ fontWeight: 600 }}>Patrocinador</Typography>
            <Typography variant="body2" color="text.secondary">
              Descripción
            </Typography>
          </CardContent>
          {/* Espacio para íconos a la derecha */}
          <Stack direction="row" spacing={1} pr={1}>
            <Box sx={{ width: 24, height: 24, bgcolor: "#D8D0DD", borderRadius: "6px" }} />
            <Box sx={{ width: 24, height: 24, bgcolor: "#D8D0DD", borderRadius: "6px" }} />
            <Box sx={{ width: 24, height: 24, bgcolor: "#D8D0DD", borderRadius: "6px" }} />
          </Stack>
        </Card>
      </Box>
      
    </Box>
  );
}
