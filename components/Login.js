import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup, currentUser } = useAuth();

  const submitHandler = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        return await login(email, password);
      } catch (error) {
        setError("Invalid email or password");
      }
    }

    await signup(email, password);
  };

  return (
    <div className=" flex-1  flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className=" font-extrabold text-2xl sm:text-4xl uppercase">
        {isLoggingIn ? "login" : "register"}
      </h1>
      {error && (
        <div className="text-rose-400 w-full max-w-[40ch] border border-solid border-rose-400 text-center py-2 ">
          {error}
        </div>
      )}
      <input
        type="email"
        placeholder="Email Address"
        className=" outline-none w-full max-w-[40ch] text-slate-900 p-2 duration-300 border-b-4 border-solid border-white
        focus:border-cyan-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className=" outline-none w-full max-w-[40ch] text-slate-900 p-2 duration-300 border-b-4 border-solid border-white
        focus:border-cyan-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full max-w-[40ch] border border-solid border-white p-2 duration-300 relative after:absolute
      after:bg-white after:w-full after:h-full after:top-0 after:right-full after:z-10 hover:after:translate-x-full after:duration-300 hover:text-slate-900 overflow-hidden"
        onClick={submitHandler}
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className=" cursor-pointer hover:scale-110 "
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
};

export default Login;
