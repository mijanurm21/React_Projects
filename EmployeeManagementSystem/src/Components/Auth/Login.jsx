import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 p-4">
      <div className="border-2 border-emerald-600 rounded-lg bg-white shadow-lg w-full max-w-md p-16">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            required
            className="p-3 rounded-full w-full border-2 outline-none border-gray-300 focus:border-emerald-500 placeholder:px-2"
            type="email"
            placeholder="Enter Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="p-3  rounded-full w-full border-2 outline-none border-gray-300 focus:border-emerald-500 placeholder:px-2"
            type="password"
            placeholder="Enter Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 rounded-full w-full bg-emerald-500 text-white hover:bg-emerald-600 transition duration-200"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
