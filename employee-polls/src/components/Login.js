import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const navigate = useNavigate();
  const [userText, setUserText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  useEffect(() => {
    props.dispatch(setAuthedUser(null));
  }, []);

  const handleUserTextChange = (e) => {
    const text = e.target.value;

    setUserText(text);
  };

  const handlePasswordTextChange = (e) => {
    const text = e.target.value;

    setPasswordText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedUser = props.users[userText];

    if (selectedUser && selectedUser.password === passwordText) {
      props.dispatch(setAuthedUser(selectedUser.id));

      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="User"
          value={userText}
          onChange={handleUserTextChange}
        />
        <input
          placeholder="Password"
          value={passwordText}
          onChange={handlePasswordTextChange}
        />
        <button type="submit" disabled={userText === "" || passwordText === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);
