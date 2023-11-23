import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";

const PollPage = ({ dispatch, authedUser, question, author }) => {

    const navigate = useNavigate();
    if (!authedUser || !question || !author) {
        return <Navigate to="/404" />;
    }

    const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;
    const imageURL = `.${author?.avatarURL}`;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };

    const calcPercentage = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
            default:
                return "";
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex flex-column" style={{ textAlign: 'center' }}>
                    <div className="p-2">
                        <h4>Poll by {author.id}</h4>
                    </div>
                    <div className="p-2">
                        <img src={imageURL} style={{ height: '250px', width: '250px', marginTop: '10px' }} className="card-img-top" alt="Profile" />
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-6">
                    <div className="card text-center">
                        <div className="card-header">
                            <p className="font-bold mb-2">{question.optionOne.text}</p>
                        </div>
                        <div className="card-body">
                            <div className="d-grid gap-1">
                                <button onClick={handleOptionOne} disabled={hasVoted} className="btn btn-primary">
                                    {!hasVoted &&
                                        <p style={{ margin: '0px' }}>Click</p>
                                    }
                                    {hasVoted &&
                                        <p style={{ margin: '0px' }}>Votes: {question.optionOne.votes.length} ({calcPercentage("optionOne", question)})</p>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            hasVoted && question.optionOne.votes.length > 0 &&
                            <div className="card-footer text-muted">
                                {question.optionOne.votes.map((item) => {
                                    return <p key={item}>{item}</p>;
                                })}
                            </div>
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card text-center">
                        <div className="card-header">
                            <p className="font-bold mb-2">{question.optionTwo.text}</p>
                        </div>
                        <div className="card-body">
                            <div className="d-grid gap-1">
                                <button className="btn btn-primary" onClick={handleOptionTwo} disabled={hasVoted}>
                                    {
                                        !hasVoted && <p style={{ margin: '0px' }}>Click</p>
                                    }

                                    {
                                        hasVoted && <p style={{ margin: '0px' }}>Votes: {question.optionTwo.votes.length} ({calcPercentage("optionTwo", question)})</p>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            hasVoted && question.optionTwo.votes.length > 0 &&
                            <div className="card-footer text-muted">
                                {question.optionTwo.votes.map((item) => {
                                    return <p key={item}>{item}</p>;
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return { authedUser, question, author };
    } catch (e) {
        return <Navigate to="/404" />;
    }
};

export default connect(mapStateToProps)(PollPage);
