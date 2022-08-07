import React from "react";

function ColleaguesSearch() {
    return (
      <div class="m-3 quarter-width">
      <h3>COLLEAGUES SEARCH</h3>
      <div class="m-2 columns ">
        <input class="m-1 column" type="text" id="input" placeholder="Please enter name..."></input>
        <button type="submit" class="m-1 column is-one-quarter" id="search-btn">
          Submit</button>
      </div>
      <ul class="my-5 full-width">
        <li class="cream"><button class= "my-1">+</button> Anna Marie</li>
        <li class="cream"><button class= "my-1">+</button> Andrew Walker</li>
        <li class="cream"><button class= "my-1">+</button> Bianca Fortier</li>
        <li class="cream"><button class= "my-1">+</button> Bala Kay</li>
        <li class="cream"><button class= "my-1">+</button> Dennis Johnson</li>
        <li class="cream"><button class= "my-1">+</button> Sam Newman</li>
        <li class="cream"><button class= "my-1">+</button> Mark Roberts</li>
      </ul>
    </div>
        
    );
}

export default ColleaguesSearch;