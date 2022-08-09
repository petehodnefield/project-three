import React from "react";
import auth from "../../utils/auth";
import { Link } from "react-router-dom";

function NavButtons(props) {
  function logOut() {
    auth.logout();
  }
  return (
    <div className="is-flex is-flex-direction-column">
      {props.isUserLoggedIn ? (
        <div className="is-flex is-flex-direction-column">
          <Link to={`/`}>
            <button className="m-1 nav-btn" onClick={() => ""}>
              HOME
            </button>
          </Link>
          {/* <button className="m-1 nav-btn" onClick={() => ""}>
            DASHBOARD
          </button> */}
          <button className="m-1 nav-btn" onClick={logOut}>
            LOGOUT
          </button>
        </div>
      ) : (
        <button className="m-1 nav-btn" onClick={() => ""}>
          LOGIN
        </button>
      )}
    </div>
  );
}

export default NavButtons;

