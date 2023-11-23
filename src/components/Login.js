import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";
import "./login.css";


const Login = ({ dispatch, loggedIn }) => {
    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("password123");

    if (loggedIn) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div className=".container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <p className="fs-1 fw-bold">Employee Pool</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <img src="./login.svg" className="img-login" alt="..." />
                </div>

            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <p className="fs-5 fw-bolder" data-testid="login-heading">Login</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="username" className="col-sm-2 col-form-label">User</label>
                            <div className="col-sm-10">
                                <input className="form-control" value={username} onChange={handleUsername} type="text" name="username" id="username" data-testid="username" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input className="form-control" value={password} onChange={handlePassword} type="password" name="password" id="password" data-testid="password" />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary" data-testid="submit">Sign in</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};

const mapStateToProps = ({ authedUser }) => ({
    loggedIn: !!authedUser,
});


export default connect(mapStateToProps)(Login);
