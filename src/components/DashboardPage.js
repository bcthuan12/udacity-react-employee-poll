import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import PollPanel from "./PollPanel";
import TopBar from "./TopBar";
import { Card, CardBody, Container, Row } from "react-bootstrap";

const DashboardPage = ({ userId, questions }) => {
  const doneQuestions = questions.filter(
    (question) =>
      question.optionOne.votes.includes(userId) ||
      question.optionTwo.votes.includes(userId),
  );

  const newQuestions = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(userId) &&
      !question.optionTwo.votes.includes(userId),
  );

  return (
    <div>
      <TopBar />
      <Container className="mt-lg-5">
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
        <Card className="mt-5">
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
      </Container>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser, questions }) => ({
  userId: authorizedUser?.id,
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(DashboardPage);
