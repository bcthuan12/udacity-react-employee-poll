import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { authorize } from "../actions/authorizedUser";

const LoginPage = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("mtsamis");
  const [password, setPassword] = useState("xyz123");

  if (loggedIn) {
    const redirectUrl = new URLSearchParams(window.location.search).get(
      "redirectTo"
    );

    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const inputUsername = (e) => setUsername(e.target.value);
  const inputPassword = (e) => setPassword(e.target.value);
  const submit = (e) => {
    e.preventDefault();
    dispatch(authorize(username, password));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={inputUsername}
              type="text"
              name="username"
              id="username"
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={inputPassword}
              type="password"
              name="password"
              id="password"
            ></input>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser }) => ({
  loggedIn: !!authorizedUser,
});

export default connect(mapStateToProps)(LoginPage);
