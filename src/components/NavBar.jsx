import { handleLogout } from "../actions/authedUser";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar=({authedUser,dispatch})=>{

  const navigate=useNavigate();
  const logout=(e)=>{
    e.preventDefault();
    dispatch(handleLogout());
    navigate("/login");
  }
  return(
    <div>
      <nav className="w-full bg-gray-800 text-gray-200 px-8 py-7 shadow-md rounded-2xl border border-gray-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between ">
          
          <div className="flex items-center space-x-8 text-lg">
            <span
            className="text-white font-medium">{authedUser?.name}</span>
            <Link className="hover:text-white transition" to="/">Home</Link>
            <Link className="hover:text-white transition" to="/add">NewPoll</Link>
            <Link className="hover:text-white transition"to="/LeaderBoard">Leader Board</Link>
            <button 
            onClick={logout}
            className="hover:text-white transition">Logout</button>
          </div>
    
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps=({authedUser, users})=>({
  authedUser: users[authedUser],
});

export default connect(mapStateToProps)(NavBar);
