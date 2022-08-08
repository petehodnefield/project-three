import React from "react";

function SignUp() {
    return (
        <form className="m-4 is-flex is-flex-direction-column is-align-items-center form-login" id="#sign-up">
            <div className="">
                <h1>SIGN UP</h1>
            </div>
            <p className="m-1 error">[error message]</p>
            <div className="m-3">
                <label>Full Name</label>
                <input type="text" placeholder="John H. Smith" id="fullname-signup"></input>
                <label>Username</label>
                <input type="text" placeholder="John1234" id="username-signup"></input>
                <label>Email Address</label>
                <input type="email" placeholder="john1234@example.com" id="email-signup"></input>
                <label>Password</label>
                <input type="password" placeholder="*******" id="password-signup"></input>
            </div>
            <button className="m-0 mt-4 full-width no-round" type="submit">Sign Up!</button>
        </form>
    );
}

export default SignUp;