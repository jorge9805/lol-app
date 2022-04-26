import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth/authContext";
import useGetChampionsByTags from "../../hooks/useGetChampionsByTags";
import { types } from "../../types/types";
const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const { data: championList, loading } = useGetChampionsByTags("all", "");
  console.log("user", user);
  const location = localStorage.getItem("currentLocation") || "/";
  const handleLogin = (e, user, champion) => {
    {
      e.preventDefault();
      console.log("userinbotooon", user);
      if (user === "") {
        alert("Please enter a username");
      } else if (user.length > 15) {
        alert("Username must be less than 10 characters");
      } else {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: {
            name: user,
            img: `https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/${champion.id}.png`,
          },
        });
        navigate(location, { replace: true });
      }
    }
  };
  return (
    <div className="animate-fade bg-fill sm:bg-cover sm:bg-left-top bg-[url('https://img.blogs.es/anexom/wp-content/uploads/2021/08/LEAGUE-OF-LEGENDS-WILD-RIFT.jpg')] opacity-90 font-lato h-max w-screen flex flex-col justify-center items-center">
      <img
        className=" h-16 w-auto object-fit absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-7 top-7"
        src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-1.png"
        alt="LolApp"
      />
      <div className=" mt-14 font-lato max-w-6xl p-12 flex flex-col gap-14  items-center justify-around bg-opacity-30 ">
        <h1 className="font-lol font-lolBold italic ml-7 sm:ml-0 self-center text-5xl sm:text-7xl text-black tracking-normal p-4">
          CREATE PROFILE
        </h1>

        <div className="flex flex-shrink justify-center gap-2 flex-wrap">
          <label
            for="nickname"
            className="font-lol font-bold italic mb-1 text-xl tracking-wide text-slate-800"
          >
            NICK NAME
          </label>

          <input
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            id="nickname"
            name="nickname"
            className="text-sm sm:text-base placeholder-gray-500 w-5/6 pl-3 pr-1 sm:pl-7 sm:pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
            placeholder="choose your nickname"
          />
        </div>
        <div>
          <h2 className="pl-9 sm:pl-11 pb-2 font-lol font-bold italic  mb-5 text-2xl tracking-wide text-slate-800">
            Choose your profile icon:
          </h2>
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 w-screen px-7 sm:px-0 sm:w-full sm:gap-3 flex-wrap">
              {championList.map((champion) => (
                <img
                  key={champion.id}
                  onClick={(e) => handleLogin(e, user, champion)}
                  src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/${champion.id}.png`}
                  alt={champion.name}
                  className="w-12 sm:w-20 hover:cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
//https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-1.png
