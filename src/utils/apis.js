import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions]).then(
    ([users, questions]) => ({ users, questions })
  );
};

const saveQuestion = (question) => {
  return _saveQuestion(question);
};

const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return _saveQuestionAnswer({ authedUser, qid, answer });
};
