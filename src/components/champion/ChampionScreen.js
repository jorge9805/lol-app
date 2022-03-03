import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useGetChampionsById from "../../hooks/useGetChampionById";

const ChampionScreen = () => {
  const [counter, setCounter] = useState(0);
  const { championId } = useParams();
  const { data: champion, loading } = useGetChampionsById(championId);
  const navigate = useNavigate();
  console.log("championId", championId);
  console.log("champion", champion);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("champion", champion);
  const url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
  return (
    <div className="w-full flex-col justify-around relative bg-gradient-to-br from-slate-700 to-slate-900">
      <div className="relative p-0 sm:p-14 xl:px-72 xl:py-14 ">
        <img className="w-full h-auto" src={url} alt={champion.name} />
        <h1 className="italic text-zinc-50 absolute bottom-7 left-1/2 -translate-x-1/2 sm:-translate-y-1/2  font-lato font-extrabold ">
          <span className="text-5xl sm:text-7xl md:text-9xl  ">
            {champion.name}
          </span>
          <br />
          <span className="text-xl sm:text-2xl md:text-4xl  ">
            {champion.title}
          </span>
        </h1>
      </div>
      <div className="relative p-0 sm:p-14 xl:px-72 xl:py-14 ">
        
      <div/>


    </div>
  );
};

export default ChampionScreen;
