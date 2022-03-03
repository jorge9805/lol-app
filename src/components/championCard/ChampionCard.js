import React from "react";
import { Link } from "react-router-dom";

const ChampionCard = ({ id, name, title, tags, info, blurb }) => {
  return (
    <Link
      to={`/champion/${id}`}
      key={id}
      className="group relative block h-[32rem] rounded-3xl overflow-hidden max-w-xs"
    >
      <img
        className="w-full h-auto"
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
        alt={name}
      />
      <div className="group absolute -bottom-1 left-0 right-0 z-10 bg-gray-800 translate-y-full ease-in-out duration-200 group-hover:translate-y-0">
        <div className=" relative flex items-center gap-5 p-5 rounded-l-3xl bg-gray-800 -translate-y-full ease-in-out duration-200 group-hover:translate-y-0">
          <div className="text-2xl font-extrabold text-slate-100 mt-3 font-lato">
            {name}
            <br />
            {title}
          </div>
        </div>
        <p className="p-5 font-sans text-slate-100 overflow-hidden">{blurb}</p>
      </div>
    </Link>
  );
};

export default ChampionCard;
