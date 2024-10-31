import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary text-start">
      <Container>
        <Nav className="me-auto" variant={"underline"}>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/leaderboard">
            Leaderboard
          </Nav.Link>
          <Nav.Link as={Link} to="/new">
            New
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default TopBar;
