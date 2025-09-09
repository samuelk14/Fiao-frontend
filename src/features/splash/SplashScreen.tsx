import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
        src="/src/assets/fiao.svg"
        alt="Fiaó Logo"
        sx={{ width: 120, height: "auto", mb: 1 }}
      />
      <Typography variant="subtitle1" color="text.secondary">
        Fía y confía
      </Typography>
    </Box>
  );
}
