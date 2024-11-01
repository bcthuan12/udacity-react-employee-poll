import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleVote } from "../actions/questions";
import TopBar from "./TopBar";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

const PollPage = ({ dispatch, loggedIn, question, userAvatar, userId }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  const navigate = useNavigate();

  const isSelectedVote = (votes) => {
    console.log("check", votes);
    return votes.includes(userId);
  };

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
  return loggedIn ? (
    <div>
      <TopBar />
      <Container>
        <Row className="text-center mt-3">
          <h4>Poll by {question.author}</h4>
        </Row>
        <Row className="text-center">
          <Col>
            <Image src={userAvatar} style={{ width: 300 }} />
          </Col>
        </Row>
        <Row className="text-center">
          <h5>Would you rather?</h5>
        </Row>
        <Row>
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
              </Card.Text>{" "}
              <CardBody style={{ display: "flex" }}>
                <Button
                  size={"lg"}
                  variant={
                    isSelectedVote(question.optionOne.votes)
                      ? "success"
                      : "warning"
                  }
                  as={Col}
                  onClick={(e) => voteOne(e)}
                >
                  Click
                </Button>
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
              <CardBody style={{ display: "flex" }}>
                <Button
                  size={"lg"}
                  variant={
                    isSelectedVote(question.optionTwo.votes)
                      ? "success"
                      : "warning"
                  }
                  as={Col}
                  onClick={(e) => voteTwo(e)}
                >
                  Click
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authorizedUser, questions }) => {
  return {
    loggedIn: !!authorizedUser,
    question: Object.values(questions).find((q) => q.id === useParams().id),
    userAvatar: authorizedUser?.image,
    userId: authorizedUser?.id,
  };
};

export default connect(mapStateToProps)(PollPage);
