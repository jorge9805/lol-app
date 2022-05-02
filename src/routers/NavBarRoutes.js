import React from "react";
import AllScreen from "../components/all/AllScreen";
import AssasinsScreen from "../components/assasins/AssasinsScreen";
import FigthersScreen from "../components/figthers/FigthersScreen";
import MagesScreen from "../components/mages/MagesScreen";
import TanksScreen from "../components/tanks/TanksScreen";
import SupportsScreen from "../components/supports/SupportsScreen";
import MarksmenScreen from "../components/marksmen/MarksmenScreen";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ChampionScreen from "../components/champion/ChampionScreen";
const NavBarRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/champion/:championId" element={<ChampionScreen />} />
        <Route path="assasins" element={<AssasinsScreen />} />
        <Route path="figthers" element={<FigthersScreen />} />
        <Route path="mages" element={<MagesScreen />} />
        <Route path="tanks" element={<TanksScreen />} />
        <Route path="supports" element={<SupportsScreen />} />
        <Route path="marksmen" element={<MarksmenScreen />} />
        <Route path="/lol-app" element={<AllScreen />} />
        <Route path="/" element={<AllScreen />} />
      </Routes>
    </>
  );
};

export default NavBarRoutes;
