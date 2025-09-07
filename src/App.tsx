import {useEffect, useState} from 'react'
import SplashScreen from "./features/splash/SplashScreen";
import LoginScreen from "./features/login/LoginScreen";
import './App.css'

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Mostrar la pantalla de splash por 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <LoginScreen />;
}
