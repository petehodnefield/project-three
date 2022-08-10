import React from "react";
import auth from "../../utils/auth";
import { Link } from "react-router-dom";

function NavButtons(props) {
  function logOut() {
    auth.logout();
  }
  return (
    <>
      {props.isUserLoggedIn ? (
        <div className="mb-3 is-flex is-flex-direction-column is-align-content-center">
          <Link to={`/`}>
            <button className="m-1 nav-btn full-width" onClick={() => ""}>
              HOME
            </button>
          </Link>
          {/* <button className="m-1 nav-btn" onClick={() => ""}>
            DASHBOARD
          </button> */}
          <button className="m-1 nav-btn full-width" onClick={logOut}>
            LOGOUT
          </button>
        </div>
      ) : (
        <button className="m-1 nav-btn" onClick={() => ""}>
          LOGIN
        </button>
      )}
    </>
  );
}

export default NavButtons;

