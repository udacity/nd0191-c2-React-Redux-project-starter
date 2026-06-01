 export const RECEIVE_USERS="RECEIVE_USERS";
 export const ADD_ANSWER_USER="ADD_ANSWER_USER";
 export const ADD_QUESTION_USER="ADD_QUESTION_USER";

 export function receiveUsers(users){
  return {
    type:RECEIVE_USERS,
    users,
  };
 }
export function addAnswerUser({qid,answer,authedUser}){
  return {
    type:ADD_ANSWER_USER,
    qid,
    answer,
    authedUser,
  };
}

export function addQuestionUser({author,id}){
  return {
    type:ADD_QUESTION_USER,
    qid:id,
    author,
  };
}