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
  const { authedUser, authorUser, question, dispatch } = props;

  if (!question) {
    return (
      <div>
        <h1>404 Question Not Found</h1>
      </div>
    );
  }

  const answeredOptionOne = question.optionOne.votes.includes(authedUser);
  const answeredOptionTwo = question.optionTwo.votes.includes(authedUser);

  const unansweredPoll = !answeredOptionOne && !answeredOptionTwo;

  const selectOptionOne = () => {
    dispatch(handleAnswerQuestion(question.id, "optionOne"));
  };

  const selectOptionTwo = () => {
    dispatch(handleAnswerQuestion(question.id, "optionTwo"));
  };

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOneVotePercentage = Math.round(
    (optionOneVotes / totalVotes) * 100
  );

  const optionTwoVotePercentage = Math.round(
    (optionTwoVotes / totalVotes) * 100
  );

  return (
    <div>
      <div>
        <h1>{`Poll by ${question.author}`}</h1>
        <img
          src={authorUser.avatarURL}
          alt={`Avatar of ${authorUser.name}`}
          className="avatar-large"
        />
      </div>
      <h3>Would You Rather</h3>
      <div>
        <span
          style={{
            backgroundColor: answeredOptionOne ? "#00ff00" : "#ffffff",
          }}
        >
          {question.optionOne.text}
        </span>
        {!unansweredPoll && (
          <>
            <span style={{ paddingLeft: "10px" }}>
              {optionOneVotes} Vote{optionOneVotes > 1 ? "s" : ""}
            </span>
            <span style={{ paddingLeft: "10px" }}>
              {optionOneVotePercentage}%
            </span>
          </>
        )}
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
          {!unansweredPoll && (
            <>
              <span style={{ paddingLeft: "10px" }}>
                {optionTwoVotes} Vote{optionTwoVotes > 1 ? "s" : ""}
              </span>
              <span style={{ paddingLeft: "10px" }}>
                {optionTwoVotePercentage}%
              </span>
            </>
          )}
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

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];

  return {
    authedUser,
    question,
    authorUser: !question ? null : users[question.author],
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
