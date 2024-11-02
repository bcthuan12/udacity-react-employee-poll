import { connect } from "react-redux";
import PollPanel from "./PollPanel";
import TopBar from "./TopBar";
import { Card, CardBody, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

const DashboardPage = ({ userId, questions }) => {
  const [showNews, setShowNews] = useState(true);

  const doneQuestions = questions
    .filter(
      (question) =>
        question.optionOne.votes.includes(userId) ||
        question.optionTwo.votes.includes(userId),
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const newQuestions = questions
    .filter(
      (question) =>
        !question.optionOne.votes.includes(userId) &&
        !question.optionTwo.votes.includes(userId),
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div>
      <TopBar />
      <Container className="mt-lg-5">
        <Card className="mt-2">
          <CardBody>
            <Form>
              <Form.Check
                type="switch"
                label={
                  showNews ? "Showing New Question" : "Showing Done Question"
                }
                checked={showNews}
                onChange={() => setShowNews(!showNews)}
              ></Form.Check>
            </Form>
          </CardBody>
        </Card>
        {showNews ? (
          <Card className="mt-2">
            <Card.Title className="text-center mt-4">
              <h2>New Question</h2>
            </Card.Title>
            <CardBody>
              <Row>
                {newQuestions.map((question) => (
                  <PollPanel key={question.id} question={question} />
                ))}
              </Row>
            </CardBody>
          </Card>
        ) : (
          <Card className="mt-2">
            <Card.Title className="text-center mt-4">
              <h2>Done</h2>
            </Card.Title>
            <Card.Body>
              <Row>
                {doneQuestions.map((question) => (
                  <PollPanel key={question.id} question={question} />
                ))}
              </Row>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser, questions }) => ({
  userId: authorizedUser?.id,
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(DashboardPage);
