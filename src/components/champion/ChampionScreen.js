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
  return (
    <div>
      <h1>{champion.name}</h1>
      <div className="flex justify-around">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt={champion.name}
        />
        <div className="flex flex-col justify-around">
          <p className="p-7 text-lg from-neutral-900 text-justify">
            <b className="font-extrabold text-5xl">Lore:</b> {champion.lore}
          </p>
          <p className="p-7 text-lg from-neutral-900 text-justify">
            <b className="font-extrabold text-5xl">Blurb:</b> {champion.blurb}
          </p>
          <p className="p-7 text-lg from-neutral-900 text-justify">
            <b className="font-extrabold text-5xl">Tags:</b> {champion.tags}
          </p>
          <p className="p-7 text-lg from-neutral-900 text-justify">
            <b className="font-extrabold text-5xl">Partype:</b>{" "}
            {champion.partype}
          </p>
        </div>
        );
      </div>
      <div className="flex justify-around m-4">
        {champion.spells.map((spell) => (
          <div key={spell.id}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/spell/${spell.image.full}`}
              alt={spell.name}
            />
            <p className="p-7 text-lg from-neutral-900 text-left">
              <b className="font-extrabold text-5xl">{spell.name}:</b>{" "}
              {spell.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionScreen;
