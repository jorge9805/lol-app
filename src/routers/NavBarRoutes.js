import React from "react";
import AllScreen from "../components/all/AllScreen";
import AssasinsScreen from "../components/assasins/AssasinsScreen";
import FigthersScreen from "../components/figthers/FigthersScreen";
import MagesScreen from "../components/mages/MagesScreen";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
const NavBarRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="assasins" element={<AssasinsScreen />} />
        <Route path="figthers" element={<FigthersScreen />} />
        <Route path="mages" element={<MagesScreen />} />
        <Route path="/" element={<AllScreen />} />
      </Routes>
    </>
  );
};

export default NavBarRoutes;
