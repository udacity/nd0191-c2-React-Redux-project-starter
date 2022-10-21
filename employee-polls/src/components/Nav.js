import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ currentUser }) => {
  const location = useLocation();

  const homeSelected = location.pathname === "/";
  const leaderboardSelected = location.pathname === "/leaderboard";
  const newSelected = location.pathname === "/add";

  return (
    <nav className="nav">
      <ul>
        <li style={{ borderBottom: homeSelected ? "2px solid black" : "" }}>
          <Link to="/">Home</Link>
        </li>
        <li
          style={{ borderBottom: leaderboardSelected ? "2px solid black" : "" }}
        >
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li style={{ borderBottom: newSelected ? "2px solid black" : "" }}>
          <Link to="/add">New</Link>
        </li>
        {currentUser && (
          <li>
            <div>
              <img
                src={currentUser.avatarURL}
                alt={`Avatar of ${currentUser.name}`}
                className="avatar"
              />
            </div>
            <div>{currentUser.id}</div>
          </li>
        )}
        {currentUser && <li></li>}
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  currentUser: users[authedUser],
});

export default connect(mapStateToProps)(Nav);
