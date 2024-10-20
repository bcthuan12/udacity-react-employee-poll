export const SET_AUTHORIZED_USER = "SET_AUTHORIZED_USER";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const setAuthorizedUser = (authorizedUser) => {
  return {
    type: SET_AUTHORIZED_USER,
    authorizedUser,
  };
};

export const authorize = (username, password) => {
  return (dispatch, getState) => {
    const { users } = getState();

    const user = Object.values(users).find(
      (u) => u.id === username && u.password === password
    );

    if (!!user) {
      return dispatch(setAuthorizedUser(user));
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    return dispatch(userLogout());
  };
};
