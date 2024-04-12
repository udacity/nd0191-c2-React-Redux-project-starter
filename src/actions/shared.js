import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {getInitialData} from "../util/api";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}
