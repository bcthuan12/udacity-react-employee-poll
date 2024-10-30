import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleVote } from "../actions/questions";
import TopBar from "./TopBar";

const PollPage = ({ dispatch, loggedIn, question, userId }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  const navigate = useNavigate();

  const voteOne = (e) => {
    e.preventDefault();
    dispatch(handleVote(question.id, "optionOne"));
    navigate("/");
  };

  const voteTwo = (e) => {
    e.preventDefault();
    dispatch(handleVote(question.id, "optionTwo"));
    navigate("/");
  };
  return loggedIn ? (
    <div>
      <TopBar />
      <h1>Poll by {question.author}</h1>
      <h2>Would you rather?</h2>
      <div>
        <h6>{question?.optionOne?.text}</h6>
        <button onClick={(e) => voteOne(e)}>Click</button>
      </div>
      <div>
        <h6>{question?.optionTwo?.text}</h6>
        <button onClick={(e) => voteTwo(e)}>Click</button>
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
