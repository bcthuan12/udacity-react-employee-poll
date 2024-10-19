import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const DashboardPage = ({ loggedIn }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];
  console.log("Dashboard logged in", loggedIn);
  return loggedIn ? (
    <div>Dashboard</div>
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser }) => ({
  loggedIn: !!authorizedUser,
});

export default connect(mapStateToProps)(DashboardPage);
