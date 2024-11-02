import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import PollCreationPage from "./PollCreationPage";
import PollPage from "./PollPage";
import LeaderBoardPage from "./LeaderBoardPage";
import Interceptor from "./Interceptor";
import NotFoundPage from "./NotFoundPage";

const App = ({ dispatch, loggedIn }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/404" exact element={<NotFoundPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route
          path="/"
          element={
            <Interceptor>
              <DashboardPage />
            </Interceptor>
          }
        />
        <Route
          path="/add"
          exact
          element={
            <Interceptor>
              <PollCreationPage />
            </Interceptor>
          }
        ></Route>
        <Route
          path="/questions/:id"
          element={
            <Interceptor>
              <PollPage />
            </Interceptor>
          }
        ></Route>
        <Route
          path="/leaderboard"
          exact
          element={
            <Interceptor>
              <LeaderBoardPage />
            </Interceptor>
          }
        ></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser }) => ({
  loggedIn: !!authorizedUser,
});

export default connect(mapStateToProps)(App);
