import users from './users.js' ;
import authedUser from './authedUser.js';
import loading from './loading.js';
import questions from './questions.js';
import { combineReducers } from 'redux';

export default combineReducers({
    users,
    authedUser,
    loading,
    questions,
  });
