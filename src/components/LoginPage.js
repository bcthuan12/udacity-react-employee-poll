import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { authorize } from "../actions/authorizedUser";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import login from "../res/login.png";

const LoginPage = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("mtsamis");
  const [password, setPassword] = useState("xyz123");

  if (loggedIn) {
    const redirectUrl = new URLSearchParams(window.location.search).get(
      "redirectTo",
    );

    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const inputUsername = (e) => setUsername(e.target.value);
  const inputPassword = (e) => setPassword(e.target.value);
  const submit = (e) => {
    e.preventDefault();
    dispatch(authorize(username, password));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="text-center">
          <h1>Employee Polls</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={6}>
          <Image src={login} roundedCircle />
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col className="text-center mt-5">
          <h3>Login</h3>
        </Col>
      </Row>
      <Form onSubmit={submit}>
        <Form.Group as={Row} className="mt-3">
          <Col sm="2">
            <Form.Label htmlFor="username">Username</Form.Label>
          </Col>
          <Col sm="10">
            <Form.Control
              value={username}
              onChange={inputUsername}
              type="text"
              name="username"
              id="username"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mt-3">
          <Col sm="2">
            <Form.Label htmlFor="password">Password</Form.Label>
          </Col>
          <Col sm="10">
            <Form.Control
              value={password}
              onChange={inputPassword}
              type="password"
              name="password"
              id="password"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mt-3">
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

const mapStateToProps = ({ authorizedUser }) => ({
  loggedIn: !!authorizedUser,
});

export default connect(mapStateToProps)(LoginPage);
