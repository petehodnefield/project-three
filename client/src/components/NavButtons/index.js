import React from "react";

function NavButtons() {
    return (
        <div className="is-flex is-flex-direction-column">
            <button className="m-1 nav-btn" onclick="">HOME</button>
            <button className="m-1 nav-btn" onclick="">DASHBOARD</button>
            <button className="m-1 nav-btn" onclick="">LOGIN</button>
            <button className="m-1 nav-btn" onclick="">LOGOUT</button>
          </div>
    );
}

export default NavButtons;