import React from "react";

function Login() {
    return (
        <form className="m-4 is-flex is-flex-direction-column is-align-items-center form-login" id="#login-form">
            <div className="">
                <h1>LOGIN</h1>
            </div>
            <p className="m-1 error">error message</p>
            <div className="m-3">
                <label>Username</label>
                <input type="text" placeholder="John1234" id="username-login"></input>
                <label>Password</label>
                <input type="password" placeholder="*******" id="password-login"></input>
            </div>
            <button className="m-0 mt-4 full-width no-round" type="submit">Log In</button>
        </form>
    );
}

export default Login;