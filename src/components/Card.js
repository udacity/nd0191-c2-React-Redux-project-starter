import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question, author, hasVoted }) => {

    return (
        <Link to={'questions/' + question.id}>
            <div className="card" style={{ textAlign: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                {
                    hasVoted ?
                        <div className="card-header bg-success text-white">
                            Voted: {question.optionOne.votes.length + question.optionTwo.votes.length}
                        </div>
                        :
                        <div className="card-header bg-info text-dark">
                            New Question
                        </div>
                }
                <img src={author?.avatarURL} style={{ height: '100px', width: '100px', marginTop: '10px' }} className="card-img-top" alt="Author" />
                <div className="card-body">
                    <h5 className="card-title">{question.author}</h5>
                    <p className="text-truncate">{question.optionOne.text}</p>
                    <p className="fw-bolder">OR</p>
                    <p className="text-truncate">{question.optionTwo.text}</p>
                    <p className="fw-light">{new Date(question.timestamp).toDateString()}</p>
                    {
                        hasVoted ?
                            <button className="btn btn-primary">Show</button>
                            :
                            <button className="btn btn-primary">Vote</button>
                    }
                </div>
            </div>
        </Link>
    );
}

export default connect()(Card);
