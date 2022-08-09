import React from "react";

function NavButtons(props) {
    return (
        <div className="is-flex is-flex-direction-column">
            {!props.isUserLoggedIn ?<button className="m-1 nav-btn" onclick="">HOME</button>:<></>}
            {props.iLoveCake ?<button className="m-1 nav-btn" onclick="">CAKE</button>:<></>}
            <button className="m-1 nav-btn" onclick="">DASHBOARD</button>
            <button className="m-1 nav-btn" onclick="">LOGIN</button>
            <button className="m-1 nav-btn" onclick="">LOGOUT</button>
          </div>
    );
}

export default NavButtons;