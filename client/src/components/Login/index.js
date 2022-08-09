import React, {useState} from "react";
import {useMutation} from '@apollo/client'
import { LOGIN } from "../../utils/mutations";
import Auth from '../../utils/auth'



function Login() {
    const [formState, setFormState] = useState({email: '', password: ''})
    console.log(formState)
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await login({
            variables: {...formState}
          });
            const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e);
        }
      };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
    return (
        <form onSubmit={handleFormSubmit} className="m-4 is-flex is-flex-direction-column is-align-items-center form-login" id="#login-form">
            <div className="">
                <h1>LOGIN</h1>
            </div>
            <p className="m-1 error">error message</p>
            <div className="m-3">
                <label>Username</label>
                <input type="text" name="email" placeholder="John1234" id="username-login" onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" name="password" placeholder="*******" id="password-login" onChange={handleChange}></input>
            </div>
            <button className="m-0 mt-4 full-width no-round" type="submit">Log In</button>
        </form>
    );
}

export default Login;