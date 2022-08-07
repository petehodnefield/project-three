import React from "react";

function ColleaguesSearch() {
    return (
        <div>
        <h3>Colleagues Search</h3>
        <div className="m-2 columns ">
          <input className="column" type="text" id="input" placeholder=" Colleagues Search"/>
          <button type="submit" class="m-1 column is-one-quarter" id="search-btn">
            Submit</button>
        </div>
        <ul class="full-width">
          <li><button className= "my-1">+</button> Anna Marie</li>
          <li><button className= "my-1">+</button> Andrew Walker</li>
          <li><button className= "my-1">+</button> Bianca Fortier</li>
          <li><button className= "my-1">+</button> Bala Kay</li>
          <li><button className= "my-1">+</button> Dennis Johnson</li>
          <li><button className= "my-1">+</button> Sam Newman</li>
          <li><button className= "my-1">+</button> Mark Roberts</li>
        </ul>
      </div>
        
    );
}

export default ColleaguesSearch;