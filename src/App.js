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
import Interceptor from "./components/Interceptor";

const App = ({ dispatch, loggedIn }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/" element={<Interceptor><DashboardPage /></Interceptor>} />
        <Route path="/add" exact element={<Interceptor><PollCreationPage /></Interceptor>}></Route>
        <Route path="/questions/:id" element={<Interceptor><PollPage /></Interceptor>}></Route>
        <Route path="/leaderboard" exact element={<Interceptor><LeaderBoardPage /></Interceptor>}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser }) => ({
  loggedIn: !!authorizedUser,
});

export default connect(mapStateToProps)(App);
