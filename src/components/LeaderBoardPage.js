import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LeaderBoardPage = ({ loggedIn, users }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];
  return loggedIn ? (
    <div>
      <h1>Leader board</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <span>
              Name: {u.name}/{u.id}
            </span>
            <span>Answered: {Object.keys(u.answers).length}</span>
            <span>Questions: {Object.keys(u.questions).length}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser, users }) => {
  return {
    loggedIn: !!authorizedUser,
    users: Object.values(users).sort(
      (a, b) => Object.keys(b.answers).length - Object.keys(a.answers)
    ),
  };
};
export default connect(mapStateToProps)(LeaderBoardPage);
