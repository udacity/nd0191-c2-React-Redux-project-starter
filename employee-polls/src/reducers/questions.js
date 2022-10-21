import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          optionOne: {
            votes:
              action.answer === "optionOne"
                ? state[action.qid].optionOne.votes.concat([action.authedUser])
                : state[action.qid].optionOne.votes,
            text: state[action.qid].optionOne.text,
          },
          optionTwo: {
            votes:
              action.answer === "optionTwo"
                ? state[action.qid].optionTwo.votes.concat([action.authedUser])
                : state[action.qid].optionTwo.votes,
            text: state[action.qid].optionTwo.text,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
