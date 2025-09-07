import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SplashScreen from "./features/splash/SplashScreen";
import LoginScreen from "./features/login/LoginScreen";
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}
