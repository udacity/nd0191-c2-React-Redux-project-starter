import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login= ({dispatch, loggedIn})=>{
  const [username, setUsername]=useState("sarahedo");
  const [password, setPassword]=useState("password123");
  const [error, setError]=useState("");

  if(loggedIn){
    const urlParams=new URLSearchParams(window.location.search);
    const redirectUrl=urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
  }

  const handleUsername=(e)=>{
    const value=e.target.value;
    setUsername(value);
  };

  const handlePassword=(e)=>{
    const value=e.target.value;
    setPassword(value);
  };

  const handleSubmit=async(e)=>{
      e.preventDefault();
      setError("");
      try{
        await dispatch(handleLogin(username, password))}catch(err){
        setError(err);}
      
  };

  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-900 py-16 px-4">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-20 w-full border border-gray-700">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-200">LOGING</h3>
        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
          value={username}
          onChange={handleUsername}
          type="text"
          name="username"
          id="username"
          data-testid="username"
          className="mt-2 p-3 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-2 resize-none "/>
          <input
          value={password}
          onChange={handlePassword}
          type="password"
          name="password"
          id="password"
          data-testid="password"
          className="mt-2 p-3 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-2 resize-none"/>

          <button
          type="submit"
          data-testid="submit"
          className="bg-blue-600 w-full mt-3 py-3 text-sm leading-5 rounded-md font-semibold text-white hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
  
};
const mapStateToProps=({authedUser})=>({
    loggedIn:!!authedUser,
});

export default connect(mapStateToProps)(Login);