import { useState } from "react";
import {connect} from "react-redux";
import { handleAddQuestion } from "../actions/questions.js";
import {useNavigate} from "react-router-dom";
const NewPoll= ({dispatch})=>{
  const navigate = useNavigate();
  const [firstOpt, setFirstOpt]=useState("");
  const [secondOpt, setSecondOpt]=useState("");

  const handleFirstOpt=(e)=>{
    const value=e.target.value;
    setFirstOpt(value);
  }
  const handleSecondOpt=(e)=>{
    const value=e.target.value;
    setSecondOpt(value);
  }
  const handleAddbutton=(e)=>{
    e.preventDefault();
    dispatch(handleAddQuestion(firstOpt,secondOpt));
    setFirstOpt("");
    setSecondOpt("");
    navigate("/");
  }
  



  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-900 py-16 px-4">
     <div className="bg-gray-800 shadow-xl rounded-2xl p-10 w-full max-w-5xl border border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-200">Would You Rather</h2>
      <h3 className="text-1xl font-bold text-center mb-6 text-gray-200">ADD YOUR POLL</h3>
      
      <p id="1-opt" className="text-gray-200">First option:</p>
      <textarea className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
      placeholder="text"
      value={firstOpt}
      data-testid="option-one-input"
      onChange={handleFirstOpt}></textarea>

      <p id="2-opt" className="text-gray-200">Second option:</p>
      <textarea className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
      placeholder="text"
      value={secondOpt}
      data-testid="option-two-input"
      onChange={handleSecondOpt}></textarea>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition" data-testid="add"
      onClick={handleAddbutton}>ADD</button>
      </div>
    </div>

  );
}

export default connect()(NewPoll);