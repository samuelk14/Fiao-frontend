import { Box, Typography } from "@mui/material";
//import logo from "../assets/logo.jpeg"; 

export default function SplashScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "white",
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src="/src/assets/logo.jpeg"
        alt="Fiaó Logo"
        sx={{ width: 120, height: "auto", mb: 1 }}
      />
      <Typography variant="subtitle1" color="text.secondary">
        Fía y confía
      </Typography>
    </Box>
  );
}
