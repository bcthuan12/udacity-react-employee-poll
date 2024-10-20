import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import PollPanel from "./PollPanel";

const DashboardPage = ({ loggedIn, userId, questions }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];
  const doneQuestions = questions.filter(
    (question) =>
      question.optionOne.votes.includes(userId) ||
      question.optionTwo.votes.includes(userId)
  );

  const newQuestions = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(userId) &&
      !question.optionTwo.votes.includes(userId)
  );

  return loggedIn ? (
    <div>
      <div>Dashboard</div>
      <div>
        <h2>New Questions</h2>
        <ul>
          {newQuestions.map((question) => (
            <li key={question.id}>
              <PollPanel question={question} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Done</h2>
        <ul>
          {doneQuestions.map((question) => (
            <li key={question.id}>
              <PollPanel question={question} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser, questions }) => ({
  loggedIn: !!authorizedUser,
  userId: authorizedUser?.id,
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(DashboardPage);
