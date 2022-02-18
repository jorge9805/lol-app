import React from "react";
import AllScreen from "../components/all/AllScreen";
import AssasinsScreen from "../components/assasins/AssasinsScreen";
import FigthersScreen from "../components/figthers/FigthersScreen";
import MagesScreen from "../components/mages/MagesScreen";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ChampionScreen from "../components/champion/ChampionScreen";
const NavBarRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="px-7 py-3">
        <Routes>
          <Route path="/champion/:championId" element={<ChampionScreen />} />
          <Route path="assasins" element={<AssasinsScreen />} />
          <Route path="figthers" element={<FigthersScreen />} />
          <Route path="mages" element={<MagesScreen />} />
          <Route path="/" element={<AllScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default NavBarRoutes;
