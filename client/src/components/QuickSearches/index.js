import React from "react";
import { Link } from "react-router-dom";

function QuickSearches() {
  const cultureFilter = [
    'Christian',
  'Muslim',
  'Jewish',
  'Hindu',
  'Buddhist',
  'African American',
  'Asian American',
  'Mexican American',
  'Native American',
  'Special Months'
];

  return (
    <div className="m-3 is-flex is-flex-direction-column is-align-items-center full-width">
      <h3>QUICK SEARCHES</h3>
      {cultureFilter.forEach((element) => (
                console.log(element)
                // <Link to={`/events/${element}`}>
                //   <button className="full-width m-1" type="submit" id="search-btn">{element}
                //   </button>
                // </Link>
              ))}
      {/* <button className="full-width m-1" type=" submit" id="search-btn">
        American</button>
      <button className="full-width m-1" type=" submit" id="search-btn">
        African American</button>
      <button className="full-width m-1" type=" submit" id="search-btn">
        Asian</button>
      <button className="full-width m-1" type=" submit" id="search-btn">
        Hispanic/Latino</button>
      <button className="full-width m-1" type=" submit" id="search-btn">
        Native American</button> */}
    </div>
  );
}

export default QuickSearches;