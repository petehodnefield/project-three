import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

var errorHTML = "";

function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
  });
  console.log(formState);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const [addUser, { error }] = useMutation(ADD_USER);

  // submit form (notice the async!)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      errorHTML = "Please fill ALL fields.<br>[Password Length Min. 5]"
      console.error(e.graphQLErrors);
      console.error(error);
    }
  };

  return (
    <form
      className="m-4 is-flex is-flex-direction-column is-align-items-center form-login shadow"
      id="#sign-up"
      onSubmit={handleFormSubmit}
    >
      <div className="log-header full-width corner-t">
        <h1 className="cream">SIGN UP</h1>
      </div>
      {error ? (
      <p className="m-1 error">Please fill ALL fields & Password Length Min. 5!</p>
      ) : (
        <></>
      )}
      <div className="m-3">
        <label>First Name</label>
        <input
          type="text"
          placeholder="John"
          name="firstName"
          id="fullname-signup"
          onChange={handleChange}
        ></input>
        <label>Username</label>
        <input
          type="text"
          placeholder="John1234"
          id="username-signup"
          name="username"
          onChange={handleChange}
        ></input>
        <label>Email Address</label>
        <input
          type="email"
          placeholder="john1234@example.com"
          id="email-signup"
          name="email"
          onChange={handleChange}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="*******"
          id="password-signup"
          name="password"
          onChange={handleChange}
        ></input>
      </div>
      <button className="m-0 mt-4 full-width no-round" type="submit">
        SIGN UP!
      </button>
    </form>
  );
}

export default SignUp;
