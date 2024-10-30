import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary text-start">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
          <Nav.Link href="/new">New</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopBar;
