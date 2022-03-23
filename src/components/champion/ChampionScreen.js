import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useGetChampionsById from "../../hooks/useGetChampionById";

const ChampionScreen = () => {
  const { championId } = useParams();
  const { data: champion, loading } = useGetChampionsById(championId);
  const [abilitie, setAbilitie] = useState("passive");
  const navigate = useNavigate();
  console.log("championId", championId);
  console.log("champion", champion);
  console.log("champion", champion);
  const url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
  useEffect(() => {
    if (champion) {
      setAbilitie(champion.passive);
    }
  }, [champion]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="animate-fade w-full flex-col gap-9 justify-around relative bg-gradient-to-br from-slate-700 to-slate-900">
      <div className="w-screen lg:h-screen absolute right-0 top-0 blur-sm bg-gradient-to-b from-slate-700 to-black">
        <img
          className="w-screen lg:object-cover lg:h-screen opacity-30"
          src={url}
          alt={champion.name}
        />
      </div>
      <div className="relative p-0 sm:p-14 xl:px-72 xl:py-14 ">
        <img className="w-full h-auto" src={url} alt={champion.name} />
        <h1 className="italic text-zinc-100 absolute bottom-7 left-1/2 -translate-x-1/2 sm:-translate-y-1/2  font-lato font-bold ">
          <span className=" text-5xl sm:text-6xl md:text-8xl  ">
            {champion.name.toUpperCase()}
          </span>
          <br />
          <span className="text-xl sm:text-2xl md:text-4xl  ">
            {champion.title}
          </span>
        </h1>
      </div>
      <div className="flex relative px-7 p-0 sm:p-14 xl:px-72 xl:py-32 ">
        <section className="flex flex-col gap-4 font-lato text-slate-100 ">
          <h1 className="italic text-5xl font-semibold my-4">Abilities</h1>
          <div className="flex justify-start gap-7 ">
            <img
              className={
                "w-9 h-9 sm:w-20 sm:h-20 rounded-full cursor-pointer hover:-translate-y-1 ease-in duration-100" +
                (abilitie?.name === champion?.passive.name
                  ? " border-4 border-slate-100 border-solid"
                  : "")
              }
              onClick={() => setAbilitie(champion.passive)}
              src={`https://ddragon.leagueoflegends.com/cdn/10.8.1/img/passive/${champion.passive.image.full}`}
              alt={champion.passive.name}
            />

            {champion.spells.map((spell) => (
              <img
                className={
                  "w-9 h-9 sm:w-20 sm:h-20 rounded-full cursor-pointer hover:-translate-y-1 ease-in duration-100" +
                  (abilitie?.id === spell.id
                    ? " border-4 border-slate-100 border-solid"
                    : "")
                }
                src={`https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/${spell.image.full}`}
                alt={spell.name}
                onClick={() => setAbilitie(spell)}
                key={spell.id}
              />
            ))}
          </div>
          <div className="flex flex-col gap-7 tracking-wider font-fira max-w-lg">
            <h3 className="text-xl font-semibold uppercase">
              {abilitie?.name}
            </h3>
            <p className="text-base">{abilitie?.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChampionScreen;
