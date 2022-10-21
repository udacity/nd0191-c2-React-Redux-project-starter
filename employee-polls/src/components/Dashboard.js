import { connect } from "react-redux";
import PollCard from "./PollCard";

const Dashboard = (props) => {
  const { unansweredQids, answeredQids } = props;

  return (
    <div>
      <section>
        <h1>New Questions</h1>
        <ul>
          {unansweredQids.map((unansweredQids) => (
            <li key={unansweredQids}>
              <PollCard id={unansweredQids} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1>Done</h1>
        <ul>
          {answeredQids.map((answeredQids) => (
            <li key={answeredQids}>
              <PollCard id={answeredQids} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => ({
  authedUser,
  answeredQids: Object.keys(questions).filter((qid) =>
    Object.keys(users[authedUser].answers).includes(qid)
  ),
  unansweredQids: Object.keys(questions).filter(
    (qid) => !Object.keys(users[authedUser].answers).includes(qid)
  ),
});

export default connect(mapStateToProps)(Dashboard);
