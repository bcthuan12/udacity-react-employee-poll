import { Button, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthorizedUser } from "../actions/authorizedUser";

const TopBar = ({ dispatch, user }) => {
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setAuthorizedUser(null));
    navigate("/");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Row className="m-lg-2">
        <Nav className="me-auto" variant={"underline"}>
          <Nav.Link as={Link} to="/" data-testid="homeMenu">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/leaderboard" data-testid="leaderboardMenu">
            Leaderboard
          </Nav.Link>
          <Nav.Link as={Link} to="/add" data-testid="newMenu">
            New
          </Nav.Link>
        </Nav>
      </Row>
      <div>
        <Image src={user.image} style={{ width: 60 }} />
        <span className="mb-1 text-muted m-lg-2" style={{ fontSize: 20 }}>
          {user.id}
        </span>
        <Button variant={"warning"} className="p-1 m-lg-2" onClick={logout}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
};

const mapStateToProps = ({ authorizedUser }) => {
  return {
    user: authorizedUser,
  };
};

export default connect(mapStateToProps)(TopBar);
