import React from "react";

function ColleaguesSearch() {
  const colleagues = [
    
  ]
    return (
      <div className="m-3 quarter-width">
      <h3>COLLEAGUES SEARCH</h3>
      <div className="m-2 columns ">
        <input className="m-1 column" type="text" id="input" placeholder="Enter name..."></input>
        <button type="submit" className="m-1 column is-one-quarter" id="search-btn">
          ></button>
      </div>
      <ul className="my-5 full-width">
        <li className="cream"><button className= "my-1">+</button> Anna Marie</li>
        <li className="cream"><button className= "my-1">+</button> Andrew Walker</li>
        <li className="cream"><button className= "my-1">+</button> Bianca Fortier</li>
        <li className="cream"><button className= "my-1">+</button> Bala Kay</li>
        <li className="cream"><button className= "my-1">+</button> Dennis Johnson</li>
        <li className="cream"><button className= "my-1">+</button> Sam Newman</li>
        <li className="cream"><button className= "my-1">+</button> Mark Roberts</li>
      </ul>
    </div>
        
    );
}

export default ColleaguesSearch;