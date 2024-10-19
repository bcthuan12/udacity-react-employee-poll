import { SET_AUTHORIZED_USER, USER_LOGOUT } from "../actions/authorizedUser";

const authorizedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHORIZED_USER:
      return action.authorizedUser;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authorizedUser;
