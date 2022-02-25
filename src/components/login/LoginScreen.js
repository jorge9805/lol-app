import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth/authContext";
import { types } from "../../types/types";
const LoginScreen = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const handleClick = (e, username) => {
    e.preventDefault();
    dispatch({ type: types.LOGIN_SUCCESS, payload: username });
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1 className="text-lg p-5 ">Login </h1>
      <hr />
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="choose your username"
        className="border-2 border-cyan-400 h-7 px-2 pr-5 pl-7 rounded-lg text-sm focus:outline-none m-5"
      />
      <button
        onClick={(e) => {
          handleClick(e, username);
        }}
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded m-5"
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
