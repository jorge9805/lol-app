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
  return (
    <div>
      <h1>{champion.name}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {/* // onClick={() => {
        //   navigate(-1);
        // }} */}
        return{counter}
      </button>
    </div>
  );
};

export default ChampionScreen;
