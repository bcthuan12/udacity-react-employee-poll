import { Col, Container, Row } from "react-bootstrap";
import TopBar from "./TopBar";

const NotFoundPage = () => {
  return (
    <div>
      <TopBar />
      <Container className="text-center">
        <Row className="mt-5">
          <Col
            style={{ fontSize: 300, fontWeight: 550 }}
            className="text-muted"
          >
            404
          </Col>
        </Row>
        <Row>
          <Col style={{ fontSize: 35, fontWeight: 550 }} className="text-muted">
            Oops! Page not found
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
