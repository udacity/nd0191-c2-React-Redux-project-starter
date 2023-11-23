import { LOGOUT_AUTHED_USER, LOGIN_AUTHENTICATED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case LOGIN_AUTHENTICATED_USER:
            return action.authedUser;
        case LOGOUT_AUTHED_USER:
            return null;
        default:
            return state;
    }
}
