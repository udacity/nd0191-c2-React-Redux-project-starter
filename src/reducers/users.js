import { RECEIVE_USERS, ADD_QUESTION_USER, ADD_ANSWER_USER} from "../actions/users.js";


export default function users(state={},action){
  switch(action.type){
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_USER:
      return{
        ...state,
        [action.authedUser]:{
          ...state[action.authedUser],
          answers:{
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION_USER:
      return{
        ...state,
        [action.author]:{
          ...state[action.author],
          questions:state[action.author].questions.concat([action.qid]),
        },
      };
    default:
      return state;
  }
}
