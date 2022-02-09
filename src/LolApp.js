import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./LolApp.css";
import AppRouter from "./routers/AppRouter";
function LolApp() {
  return (
    <div>
      <AppRouter />
      <p className="text-blue-500 hover:text-blue-800 font-sans">My LoL App</p>
    </div>
  );
}

export default LolApp;
