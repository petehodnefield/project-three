import React from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ShortCard(props) {
  let cultureCSS = "p-4 culture-tag "

  switch (props.eventData.culture) {
    case 'Christian':
      cultureCSS = cultureCSS + "christian"
      break;
    case 'Muslim':
      cultureCSS = cultureCSS + "muslim"
      break;
    case 'Jewish':
      cultureCSS = cultureCSS + "jewish"
      break;
    case 'Hindu':
      cultureCSS = cultureCSS + "hindu"
      break;
    case 'Buddhist':
      cultureCSS = cultureCSS + "buddhist"
      break;
    case 'African American':
      cultureCSS = cultureCSS + "african"
      break;
    case 'Asian American':
      cultureCSS = cultureCSS + "asian"
      break;
    case 'Mexican American':
      cultureCSS = cultureCSS + "mexican"
      break;
    case 'Native American':
      cultureCSS = cultureCSS + "native"
      break;
    case 'Special Months':
      cultureCSS = cultureCSS + "special"
      break;
    default:
  }


  return (
    <form className="m-4 is-flex is-flex-direction-column is-align-items-center short-card-width shadow">
      <div className="short-card full-width">
        <div className="p-2">
          <h1 className="p-0 cream">{new Date(props.eventData.date).toLocaleDateString('en-us', { weekday: "long" })}</h1>
          <h1 className="p-0 big white no-space">{new Date(props.eventData.date).getDate()}</h1>
          <h3 className="big">{months[new Date(props.eventData.date).getMonth()]}</h3>
        </div>





        <div className="is-flex is-flex-direction-column is-align-items-center cream-back">
          <h3 className={cultureCSS}
          >{props.eventData.culture}</h3>
          <h1>{props.eventData.name}</h1>
        </div>
      </div>
      {/* <button className="m-0 full-width no-round" type="submit">
        + Add / - Remove Event
      </button> */}
    </form >
  );
}

export default ShortCard;
