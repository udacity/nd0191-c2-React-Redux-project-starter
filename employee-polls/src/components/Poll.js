import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Poll = (props) => {
  const { authedUser, question, dispatch } = props;

  const answeredOptionOne = question.optionOne.votes.includes(authedUser);
  const answeredOptionTwo = question.optionTwo.votes.includes(authedUser);

  const unansweredPoll = !answeredOptionOne && !answeredOptionTwo;

  const selectOptionOne = () => {
    dispatch(handleAnswerQuestion(question.id, "optionOne"));
  };

  const selectOptionTwo = () => {
    dispatch(handleAnswerQuestion(question.id, "optionTwo"));
  };

  return (
    <div>
      <h1>{`Poll by ${question.author}`}</h1>
      <h3>Would You Rather</h3>
      <div>
        <span
          style={{
            backgroundColor: answeredOptionOne ? "#00ff00" : "#ffffff",
          }}
        >
          {question.optionOne.text}
        </span>
      </div>
      {unansweredPoll && (
        <div>
          <button onClick={selectOptionOne}>Click</button>
        </div>
      )}
      <div>
        <div>
          <span
            style={{
              backgroundColor: answeredOptionTwo ? "#00ff00" : "#ffffff",
            }}
          >
            {question.optionTwo.text}
          </span>
        </div>
        {unansweredPoll && (
          <div>
            <button onClick={selectOptionTwo}>Click</button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, props) => {
  const { id } = props.router.params;
  const question = questions[id];

  return {
    authedUser,
    question,
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
