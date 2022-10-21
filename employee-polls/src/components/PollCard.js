import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const PollCard = ({ question }) => {
  const navigate = useNavigate();

  const showPoll = () => {
    navigate(`/question/${question.id}`);
  };

  return (
    <div>
      <h3>{question.author}</h3>
      <div>
        <span>{new Date(question.timestamp).toLocaleString()}</span>
      </div>
      <div>
        <button onClick={showPoll}>Show</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions }, { id }) => {
  return {
    question: questions[id],
  };
};

export default connect(mapStateToProps)(PollCard);
