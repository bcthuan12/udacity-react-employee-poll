import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

const TopBar = ({ user }) => {
  console.log(user.image);
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
          <Nav.Link as={Link} to="/new" data-testid="newMenu">
            New
          </Nav.Link>
        </Nav>
      </Row>
      <div>
        <Image src={user.image} style={{ width: 60 }} />
        <span className="mb-1 text-muted m-lg-2" style={{ fontSize: 20 }}>
          {user.id}
        </span>
        <Button variant={"warning"} className="p-1 m-lg-2">
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
