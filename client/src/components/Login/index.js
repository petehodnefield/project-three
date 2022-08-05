import React from "react";

function Login() {
    return (
        <form class="m-4 is-flex is-flex-direction-column is-align-items-center form-login" id="#login-form">
            <div class="">
                <h1>LOGIN</h1>
            </div>
            <p class="m-1 error">error message</p>
            <div class="m-3">
                <label>Username</label>
                <input type="text" placeholder="John1234" id="username-login"></input>
                <label>Password</label>
                <input type="password" placeholder="*******" id="password-login"></input>
            </div>
            <button class="m-0 mt-4 full-width no-round" type="submit">Log In</button>
        </form>
    );
}

export default Login;