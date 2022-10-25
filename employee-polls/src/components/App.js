import "../App.css";
import { handleInitialData } from "../actions/shared";
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Poll from "./Poll";
import Dashboard from "./Dashboard";
import PollCreate from "./PollCreate";
import Leaderboard from "./Leaderboard";

function App(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const onLoginPage = location.pathname.includes("login");

  useEffect(() => {
    props.dispatch(handleInitialData());

    console.log("app use effect");

    if (!onLoginPage && props.authedUser === null) {
      navigate("/login");
    }
  }, []);

  console.log(props.loading);
  console.log(props.authedUser);

  return (
    <Fragment>
      <LoadingBar />
      <div className="App">
        {!onLoginPage && <Nav />}
        {props.loading ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/question/:id" element={<Poll />} />
            <Route path="/add" element={<PollCreate />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  loading: users === null,
  authedUser,
});

export default connect(mapStateToProps)(App);
