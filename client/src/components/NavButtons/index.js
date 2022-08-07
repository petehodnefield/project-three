import React from "react";

function NavButtons() {
    return (
        <div class="is-flex is-flex-direction-column">
            <button class="m-1 nav-btn" onclick="">HOME</button>
            <button class="m-1 nav-btn" onclick="">DASHBOARD</button>
            <button class="m-1 nav-btn" onclick="">LOGIN</button>
            <button class="m-1 nav-btn" onclick="">LOGOUT</button>
          </div>
    );
}

export default NavButtons;