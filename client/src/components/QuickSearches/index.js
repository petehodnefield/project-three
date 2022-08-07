import React from "react";

function QuickSearches() {
    return (
        <div>
        <h3>Quick Searches</h3>
        <button className="full-width my-3" type=" submit" id="search-btn">
          American</button>
        <button className="full-width my-3" type=" submit" id="search-btn">
          African American</button>
        <button className="full-width my-3" type=" submit" id="search-btn">
          Asian</button>
        <button className="full-width my-3" type=" submit" id="search-btn">
          Hispanic/Latino</button>
        <button className="full-width my-3" type=" submit" id="search-btn">
          Native American</button>
      </div>
    );
}

export default QuickSearches;