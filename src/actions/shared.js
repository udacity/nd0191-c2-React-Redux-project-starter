import {receiveUsers} from "./users.js";
import {receiveQuestions} from "./questions.js";
import {getInitialData} from "../utils/api.js";


export function handleInitialData(){
  return (dispatch)=>{
    return getInitialData().then(({users, questions})=>{
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}