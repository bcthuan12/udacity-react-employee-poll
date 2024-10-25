import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  VOTE_POLL,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case VOTE_POLL:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat(
              action.userId
            ),
          },
        },
      };
    default:
      return state;
  }
};

export default questions;
