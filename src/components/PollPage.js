import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const PollPage = ({ loggedIn, question, userId }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  return loggedIn ? (
    <div>
      <h1>Poll by {question.author}</h1>
      <h2>Would you rather?</h2>
      <div>
        <h6>{question?.optionOne?.text}</h6>
        <button>Click</button>
      </div>
      <div>
        <h6>{question?.optionTwo?.text}</h6>
        <button>Click</button>
      </div>
    </div>
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser, questions }) => {
  return {
    loggedIn: !!authorizedUser,
    question: Object.values(questions).find((q) => q.id === useParams().id),
    userId: authorizedUser?.id,
  };
};

export default connect(mapStateToProps)(PollPage);
