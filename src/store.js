import {configureStore} from '@reduxjs/toolkit';
import authedUser from "./reducers/authedUser";
import users from "./reducers/users";
import questions from "./reducers/questions";

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions,
  },
});
