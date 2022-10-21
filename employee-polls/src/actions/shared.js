import { _getUsers, _getQuestions } from "../_DATA";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { receiveQuestions } from "./questions";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  const getInitialData = () => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => ({
        users,
        questions,
      })
    );
  };

  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
