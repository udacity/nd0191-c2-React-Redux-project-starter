import LoadingBar from "./LoadingBar.js";
import LeaderBoard from "./LeaderBoard.js";
import NewPoll from "./NewPoll.js";
import PollPage from "./PollPage.js";
import NavBar from "./NavBar.js";
import HomePage from "./HomePage.js";
import PrivateRoute from "./PrivateRoute.js";
import Login from "./Login.js";
import Error from "./Error.js";
import {useEffect, Fragment} from "react";
import {Routes, Route} from "react-router-dom";
import {handleInitialData} from "../actions/shared.js";
import { connect } from "react-redux";

function App({dispatch, loggedIn}){
  useEffect(()=>{
    dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar/>
      <div className="container">
        {loggedIn && <NavBar/>}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/"  element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="questions/:id" element={<PrivateRoute><PollPage/></PrivateRoute>} />
          <Route path="/leaderboard" element={<PrivateRoute><LeaderBoard/></PrivateRoute>} />
          <Route path="/add" element={<PrivateRoute><NewPoll/></PrivateRoute>} />
          <Route path="/404" element={<Error/>}/>
        </Routes>
      </div>
     
    </Fragment>
  );
}
const mapStateToProps=({authedUser})=> ({
    loggedIn: !!authedUser,
});
export default connect(mapStateToProps)(App);

