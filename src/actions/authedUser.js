export const SET_AUTHED_USER="SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER="LOGOUT_AUTHED_USER";

export function setAuthedUser (id){
  return{
    type:SET_AUTHED_USER,
    id,
  };
}
export function logoutAuthedUser(){
  return {
    type:LOGOUT_AUTHED_USER,
  };
}

export function handleLogin(username, password){
  return (dispatch, getState)=>{
    return new Promise((resolve, reject) => {
      const {users}=getState();

      const user =Object.values(users).find((user)=> user.id === username && user.password === password);
      if (user){
        dispatch(setAuthedUser(user.id));
        resolve(user);
      }else{
        reject("Invalid username or password");
      }
    });
  };
}

export function handleLogout(){
    return (dispatch)=>{
        return dispatch(logoutAuthedUser());
    };
}