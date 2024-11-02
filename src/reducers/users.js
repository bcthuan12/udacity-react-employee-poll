import {
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
  RECEIVE_USERS,
} from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.authorizedUser]: {
          ...state[action.authorizedUser],
          answers: {
            ...state[action.authorizedUser].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.questionId),
        },
      };
    default:
      return state;
  }
};

export default users;
