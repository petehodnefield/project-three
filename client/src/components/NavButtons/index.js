import React from "react";

function NavButtons(props) {
    return (
        <div className="is-flex is-flex-direction-column">
            {!props.isUserLoggedIn ?<button className="m-1 nav-btn" onClick={()=> ""}>HOME</button>:<></>}
            {props.iLoveCake ?<button className="m-1 nav-btn" onClick={()=> ""}>CAKE</button>:<></>}
            <button className="m-1 nav-btn" onClick={()=> ""}>DASHBOARD</button>
            <button className="m-1 nav-btn" onClick={()=> ""}>LOGIN</button>
            <button className="m-1 nav-btn" onClick={()=> ""}>LOGOUT</button>
          </div>
    );
}

export default NavButtons;