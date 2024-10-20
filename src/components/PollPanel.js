import { Link } from "react-router-dom";

const PollPanel = ({ question }) => {
  return (
    <div>
      <h2>{question.author}</h2>
      <h5></h5>
      <Link to={"/question/"}>Show</Link>
    </div>
  );
};

export default PollPanel;
