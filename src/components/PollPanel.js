import { Button, Card, CardBody, CardText, Col } from "react-bootstrap";

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
          <Button size={"lg"} href={"/question/" + question.id}>
            Vote
          </Button>
        </CardBody>
        {/*<div>*/}
        {/*  <h4>{question.author}</h4>*/}
        {/*  <h4>{question.optionOne.text}</h4>*/}
        {/*  <h4>{question.optionTwo.text}</h4>*/}
        {/*  <h6>{createDate(question.timestamp)}</h6>*/}
        {/*  <Link to={"/question/" + question.id}>Show</Link>*/}
        {/*</div>*/}
      </Card>
    </Col>
  );
};

export default PollPanel;
