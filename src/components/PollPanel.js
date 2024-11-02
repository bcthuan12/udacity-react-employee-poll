import { Button, Card, CardBody, CardText, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PollPanel = ({ question }) => {
  const createDate = (timestamp) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "medium",
    }).format(new Date(timestamp));
  return (
    <Col sm={4} className="mt-3">
      <Card style={{ borderStyle: "dashed" }} sm={4}>
        <Card.Title className="text-center mt-2">{question.author}</Card.Title>
        <CardBody className="text-center">
          <CardText>{createDate(question.timestamp)}</CardText>
          <Button
            style={{ display: "block" }}
            size={"lg"}
            as={Link}
            to={"/questions/" + question.id}
            variant={"outline-success"}
          >
            Show
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PollPanel;
