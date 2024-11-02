import { saveQuestion, saveQuestionAnswer } from "../utils/apis";
import { addUserAnswer, addUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE_POLL = "VOTE_POLL";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const createNewQuestion = (question) => {
  return (dispatch, getState) => {
    const { authorizedUser } = getState();

    return saveQuestion(question).then((q) => {
      dispatch(addQuestion(q));
      dispatch(addUserQuestion(authorizedUser.id, q.id));
    });
  };
};

const votePoll = (userId, questionId, answer) => {
  return {
    type: VOTE_POLL,
    userId,
    questionId,
    answer,
  };
};

export const handleVote = (questionId, answer) => {
  return (dispatch, getState) => {
    const { authorizedUser } = getState();
    return saveQuestionAnswer(authorizedUser.id, questionId, answer).then(
      () => {
        dispatch(votePoll(authorizedUser.id, questionId, answer));
        dispatch(addUserAnswer(authorizedUser.id, questionId, answer));
      },
    );
  };
};
