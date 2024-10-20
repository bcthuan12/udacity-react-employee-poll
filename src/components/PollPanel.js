import { Link } from "react-router-dom";

const PollPanel = ({ question }) => {
  const createDate = (timestamp) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "long",
    }).format(new Date(timestamp));
  return (
    <div>
      <h4>{question.author}</h4>
      <h6>{createDate(question.timestamp)}</h6>
      <Link to={"/question/" + question.id}>Show</Link>
    </div>
  );
};

export default PollPanel;
