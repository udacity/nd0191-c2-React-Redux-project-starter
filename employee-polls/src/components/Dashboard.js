import { connect } from "react-redux";
import PollCard from "./PollCard";

const Dashboard = (props) => {
  const { unansweredQids, answeredQids } = props;

  return (
    <div>
      <section>
        <h1>New Questions</h1>
        <ul>
          {unansweredQids.map((unansweredQid) => (
            <li key={unansweredQid}>
              <PollCard id={unansweredQid} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1>Done</h1>
        <ul>
          {answeredQids.map((answeredQid) => (
            <li key={answeredQid}>
              <PollCard id={answeredQid} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => ({
  authedUser,
  answeredQids: Object.keys(questions)
    .filter((qid) => Object.keys(users[authedUser].answers).includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  unansweredQids: Object.keys(questions)
    .filter((qid) => !Object.keys(users[authedUser].answers).includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
});

export default connect(mapStateToProps)(Dashboard);
