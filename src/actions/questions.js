import { saveQuestion } from "../utils/apis";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const createNewQuestion = (question) => {
  return (dispatch) => {
    return saveQuestion(question).then((q) => {
      dispatch(addQuestion(q));
    });
  };
};
