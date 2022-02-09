import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login </h2>
      <button
        onClick={() => navigate("/", { replace: true })}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </div>
  );
};

export default LoginScreen;
