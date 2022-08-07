import React from "react";

function QuickSearches() {
    return (
      <div class="m-3 is-flex is-flex-direction-column is-align-items-center">
      <h3>QUICK SEARCHES</h3>
      <button class="full-width m-1" type=" submit" id="search-btn">
        American</button>
      <button class="full-width m-1" type=" submit" id="search-btn">
        African American</button>
      <button class="full-width m-1" type=" submit" id="search-btn">
        Asian</button>
      <button class="full-width m-1" type=" submit" id="search-btn">
        Hispanic/Latino</button>
      <button class="full-width m-1" type=" submit" id="search-btn">
        Native American</button>
    </div>
    );
}

export default QuickSearches;