import React, { useEffect } from 'react';
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import { connect } from "react-redux";
import Login from "./components/Login";
import { handleInitialData } from "./actions/shared";
import Leaderboard from "./components/Leaderboard";
import PageNotFound from "./components/PageNotFound";
import LoginValid from "./components/LoginValid";
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ dispatch, loggedIn }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="container mx-auto py-4">
      {loggedIn && <Navigation />}
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<LoginValid><Dashboard /></LoginValid>} />
        <Route path="/leaderboard" exact element={<LoginValid><Leaderboard /></LoginValid>} />
        <Route path="/questions/:id" element={<LoginValid><PollPage /></LoginValid>} />
        <Route path="/new" exact element={<LoginValid><NewPoll /></LoginValid>} />
        <Route path="/404" exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);