import { saveQuestion, saveAnswer } from "../utils/api.js";
import { hideLoading,showLoading } from "./loading.js";
import { addAnswerUser, addQuestionUser } from "./users.js";
export const RECEIVE_QUESTIONS="RECEIVE_QUESTIONS";
export const ADD_QUESTION="ADD_QUESTION";
export const ADD_ANSWER="ADD_ANSWER";

export function receiveQuestions(questions){
  return {
    type:RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question){
  return {
    type:ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText){
  return (dispatch, getState)=>{
     const {authedUser}=getState();

    dispatch(showLoading());

    return saveQuestion({optionOneText, optionTwoText,author:authedUser}).then((question)=>{
      dispatch(addQuestion(question));
      dispatch(addQuestionUser({author: authedUser,id: question.id}))
    }).then(()=> dispatch(hideLoading()));
  };
}

export function addAnswer({authedUser, qid, answer}){
  return {
    type:ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddAnswer(questionId,answer){
  return (dispatch,getState)=>{
    const {authedUser}= getState();
    dispatch(showLoading());

    return saveAnswer({authedUser,qid: questionId,answer}).then(()=>{
      dispatch(addAnswer({authedUser,qid: questionId,answer}))
      dispatch(addAnswerUser({qid: questionId, answer, authedUser}))
    }).then(()=> dispatch(hideLoading()));

  }
}