export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const addUserAnswer = (authorizedUser, questionId, answer) => {
  return {
    type: ADD_USER_ANSWER,
    authorizedUser,
    questionId,
    answer,
  };
};

export const addUserQuestion = (author, questionId) => {
  return {
    type: ADD_USER_QUESTION,
    author,
    questionId,
  };
};
