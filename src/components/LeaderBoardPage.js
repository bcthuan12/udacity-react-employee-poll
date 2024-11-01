import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import TopBar from "./TopBar";
import { Container, Table } from "react-bootstrap";

const LeaderBoardPage = ({ loggedIn, users }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];
  return loggedIn ? (
    <div>
      <TopBar />
      <Container className="mt-5">
        <Table
          bordered
          hover
          className="table table-bordered border-success border-opacity-25"
        >
          <thead>
            <tr>
              <th>
                <h3>Users</h3>
              </th>
              <th>
                <h3>Answered</h3>
              </th>
              <th>
                <h3>Created</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  <div>
                    <h5>{u.name}</h5>
                    <h6>{u.id}</h6>
                  </div>
                </td>
                <td>{Object.keys(u.answers).length}</td>
                <td>Questions: {Object.keys(u.questions).length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser, users }) => {
  return {
    loggedIn: !!authorizedUser,
    users: Object.values(users).sort(
      (a, b) => Object.keys(b.answers).length - Object.keys(a.answers),
    ),
  };
};
export default connect(mapStateToProps)(LeaderBoardPage);
