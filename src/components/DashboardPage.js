import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import PollPanel from "./PollPanel";
import TopBar from "./TopBar";
import { Card, CardBody, Container, Row } from "react-bootstrap";

const DashboardPage = ({ loggedIn, userId, questions }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];
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

  return loggedIn ? (
    <div>
      <TopBar />
      <Container>
        <Card className="mt-2">
          <Card.Title className="text-center mt-2">New Question</Card.Title>
          <CardBody>
            <Row>
              {newQuestions.map((question) => (
                <PollPanel key={question.id} question={question} />
              ))}
            </Row>
          </CardBody>
        </Card>
        <Card className="mt-2">
          <Card.Title className="text-center mt-2">Done</Card.Title>
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
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser, questions }) => ({
  loggedIn: !!authorizedUser,
  userId: authorizedUser?.id,
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(DashboardPage);
