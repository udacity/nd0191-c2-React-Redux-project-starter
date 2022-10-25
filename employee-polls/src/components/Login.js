import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const navigate = useNavigate();
  const [userText, setUserText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);

  useEffect(() => {
    props.dispatch(setAuthedUser(null));
  }, []);

  const handleUserTextChange = (e) => {
    setInvalidLogin(false);

    const text = e.target.value;

    setUserText(text);
  };

  const handlePasswordTextChange = (e) => {
    setInvalidLogin(false);

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
      setInvalidLogin(true);
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
          data-testid="user-input"
        />
        <input
          placeholder="Password"
          value={passwordText}
          onChange={handlePasswordTextChange}
          data-testid="password-input"
        />
        <button type="submit" disabled={userText === "" || passwordText === ""}>
          Submit
        </button>
      </form>

      {invalidLogin && (
        <div>
          <span data-testid="login-error" style={{ color: "#ff0000" }}>
            Invalid Username or Password
          </span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser,
});

export default connect(mapStateToProps)(Login);
