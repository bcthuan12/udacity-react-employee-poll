import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleVote } from "../actions/questions";
import TopBar from "./TopBar";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";

const PollPage = ({ dispatch, question, userAvatar, userId }) => {
  const navigate = useNavigate();

  const hasVoted = () => {
    return (
      question?.optionOne?.votes.includes(userId) ||
      question?.optionTwo?.votes.includes(userId)
    );
  };

  const optionOneVoted = () => question?.optionOne?.votes.includes(userId);
  const optionTwoVoted = () => question?.optionTwo?.votes.includes(userId);

  const optionOnePercent = () =>
    (question.optionOne.votes.length /
      ((question.optionOne?.votes?.length
        ? question.optionOne.votes.length
        : 0) +
        (question.optionTwo?.votes?.length
          ? question.optionTwo.votes.length
          : 0))) *
    100;

  const optionTwoPercent = () =>
    (question?.optionTwo?.votes?.length /
      ((question.optionOne?.votes?.length
        ? question.optionOne.votes.length
        : 0) +
        (question.optionTwo?.votes?.length
          ? question.optionTwo.votes.length
          : 0))) *
    100;

  const voteOne = (e) => {
    e.preventDefault();
    dispatch(handleVote(question.id, "optionOne"));
    navigate("/");
  };

  const voteTwo = (e) => {
    e.preventDefault();
    dispatch(handleVote(question.id, "optionTwo"));
    navigate("/");
  };
  return (
    <div>
      <TopBar />
      <Container>
        <Row className="text-center mt-3">
          <h4>Poll by {question?.author}</h4>
        </Row>
        <Row className="text-center mt-2">
          <Col>
            <Image src={userAvatar} style={{ width: 300 }} />
          </Col>
        </Row>
        <Row className="text-center mt-2">
          <h5>Would you rather?</h5>
        </Row>
        <Row className="mt-2">
          <Col>
            <Card>
              <Card.Text
                style={{
                  margin: 20,
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                {question?.optionOne?.text}
              </Card.Text>
              <CardBody>
                {hasVoted() ? (
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className={"justify-content-center"}
                  >
                    <h5>
                      <Badge bg="primary">
                        {optionOnePercent()} % people chose this
                      </Badge>
                    </h5>
                    {optionOneVoted() ? (
                      <h5>
                        <Badge bg="success">You chose this!</Badge>
                      </h5>
                    ) : (
                      <span></span>
                    )}
                  </Stack>
                ) : (
                  <Button
                    size={"lg"}
                    variant={"outline-success"}
                    as={Col}
                    onClick={(e) => voteOne(e)}
                    style={{ display: "block" }}
                  >
                    Click
                  </Button>
                )}
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Text
                style={{
                  margin: 20,
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                {question?.optionTwo?.text}
              </Card.Text>
              <CardBody>
                {hasVoted() ? (
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className={"justify-content-center"}
                  >
                    <h5>
                      <Badge bg="primary">
                        {optionTwoPercent()} % people chose this
                      </Badge>
                    </h5>
                    {optionTwoVoted() ? (
                      <h5>
                        <Badge bg="success">You chose this!</Badge>
                      </h5>
                    ) : (
                      <span></span>
                    )}
                  </Stack>
                ) : (
                  <Button
                    size={"lg"}
                    variant={"outline-success"}
                    as={Col}
                    onClick={(e) => voteTwo(e)}
                    style={{ display: "block" }}
                  >
                    Click
                  </Button>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser, questions, user }) => {
  return {
    question: Object.values(questions).find((q) => q.id === useParams().id),
    userAvatar: authorizedUser?.image,
    userId: authorizedUser?.id,
  };
};

export default connect(mapStateToProps)(PollPage);
