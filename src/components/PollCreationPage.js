import { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createNewQuestion } from "../actions/questions";

const PollCreationPage = ({ loggedIn, dispatch, userId }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const inputFirstOption = (e) => setFirstOption(e.target.value);
  const inputSecondOption = (e) => setSecondOption(e.target.value);

  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    dispatch(
      createNewQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: userId,
      })
    );
    navigate("/");
  };

  return loggedIn ? (
    <div>
      <h2>Would you rather</h2>
      <h4>Create Your Own Poll</h4>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstOption">First Option</label>
          <input
            value={firstOption}
            onChange={inputFirstOption}
            name="firstOption"
            id="firstOption"
          ></input>
        </div>
        <div>
          <label htmlFor="secondOption">Second Option</label>
          <input
            value={secondOption}
            onChange={inputSecondOption}
            name="secondOption"
            id="firstOption"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser }) => {
  return {
    loggedIn: !!authorizedUser,
    userId: authorizedUser?.id,
  };
};

export default connect(mapStateToProps)(PollCreationPage);
