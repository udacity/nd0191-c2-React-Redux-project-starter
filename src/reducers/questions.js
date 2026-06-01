import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/questions.js";

export default function questions(state={}, action){
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return{
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return{
        ...state,
        [action.question.id]:action.question,
      };
    case ADD_ANSWER:
      return{
        ...state,
        [action.qid]:{
          ...state[action.qid],
          [action.answer]:{
            ...state[action.qid][action.answer],
            votes:state[action.qid][action.answer].votes.concat(action.authedUser),
          },
        },
      }
    default:
      return state;
  }
}