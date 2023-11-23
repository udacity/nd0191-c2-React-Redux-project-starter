import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";

const Navigation = ({ dispatch, authedUserId, users }) => {

    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };
    const imageURL = users[authedUserId]?.avatarURL;

    return (

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/leaderboard" className="nav-link" >Leaderboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/new" className="nav-link">New Poll</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md-4">
                    <span className="nav nav-tabs" data-testid="user-information" style={{ alignItems: 'center' }}>
                        <img src={imageURL} className="rounded" style={{ width: '30px', height: '30px', marginRight: '5px' }} alt={authedUserId} />
                        {authedUserId}
                        <a onClick={logout}
                            className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout
                        </a>
                    </span>
                </div>
            </div>
        </div>

    );
};

const mapStateToProps = ({ authedUser, users }) => ({
    authedUserId: authedUser.id,
    users
    // authedAvaterURL: authedUser.
});


export default connect(mapStateToProps)(Navigation);
