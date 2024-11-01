import "./App.css";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import PollCreationPage from "./components/PollCreationPage";
import PollPage from "./components/PollPage";
import LeaderBoardPage from "./components/LeaderBoardPage";

const App = ({ dispatch, loggedIn }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/add" exact element={<PollCreationPage />}></Route>
        <Route path="/questions/:id" element={<PollPage />}></Route>
        <Route path="/leaderboard" exact element={<LeaderBoardPage />}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser }) => ({
  loggedIn: !!authorizedUser,
});

export default connect(mapStateToProps)(App);
