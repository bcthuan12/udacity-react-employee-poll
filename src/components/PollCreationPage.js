import { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createNewQuestion } from "../actions/questions";
import TopBar from "./TopBar";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

const PollCreationPage = ({dispatch, userId }) => {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const inputFirstOption = (e) => setFirstOption(e.target.value);
  const inputSecondOption = (e) => setSecondOption(e.target.value);

  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    dispatch(
      createNewQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: userId,
      }),
    );
    navigate("/");
  };

  return (
    <div>
      <TopBar />
      <Container>
        <Row className="text-center">
          <h2>Would you rather</h2>
        </Row>
        <Row className="text-center">
          <h6 style={{ color: "grey", fontWeight: 700 }}>
            Create Your Own Poll
          </h6>
        </Row>
        <Form onSubmit={submit}>
          <Form.Group className="mt-3 text-center justify-content-center">
            <FormLabel htmlFor="firstOption">First Option</FormLabel>
            <FormControl
              value={firstOption}
              onChange={inputFirstOption}
              name="firstOption"
              id="firstOption"
              style={{ width: 900, justifySelf: "center" }}
            ></FormControl>
          </Form.Group>
          <FormGroup className="mt-3 text-center">
            <FormLabel htmlFor="secondOption">Second Option</FormLabel>
            <FormControl
              value={secondOption}
              onChange={inputSecondOption}
              name="secondOption"
              id="firstOption"
              style={{ width: 900, justifySelf: "center" }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mt-3 text-center">
            <Button
              variant={"outline-success"}
              type="submit"
              size={"lg"}
              style={{ width: 300 }}
              disabled={firstOption?.length === 0 || secondOption?.length === 0}
            >
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ authorizedUser }) => {
  return {
    userId: authorizedUser?.id,
  };
};

export default connect(mapStateToProps)(PollCreationPage);
