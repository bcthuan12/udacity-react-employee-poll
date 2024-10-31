import { Button, Card, CardBody, CardText, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PollPanel = ({ question }) => {
  const createDate = (timestamp) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "long",
    }).format(new Date(timestamp));
  return (
    <Col>
      <Card style={{ borderStyle: "dashed" }} sm={4}>
        <Card.Title className="text-center mt-2">{question.author}</Card.Title>
        <CardBody className="text-center">
          <CardText>{createDate(question.timestamp)}</CardText>
          <Button size={"lg"} as={Link} to={"/question/" + question.id}>
            Vote
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PollPanel;
