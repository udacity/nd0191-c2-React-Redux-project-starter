export const LOGIN_AUTHENTICATED_USER = "LOGIN_AUTHENTICATED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function loginAuthenticatedUser(authedUser) {
    return {
        type: LOGIN_AUTHENTICATED_USER,
        authedUser,
    };
}

export function logoutAuthedUser() {
    return {
        type: LOGOUT_AUTHED_USER,
    };
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const { users } = getState();
        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!!user) {
            return dispatch(loginAuthenticatedUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(logoutAuthedUser());
    };
}
