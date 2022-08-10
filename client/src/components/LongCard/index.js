import React from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function LongCard(props) {
  let cultureCSS = "p-4 corner-tl culture-tag "

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
    <div className="m-5 container is-flex is-flex-direction-column is-align-items-center">
      {/* <button className="m-4 btn-generic " type="submit">
        + Add / - Remove Event
      </button> */}

      <form className="m-4 long-card-size shadow columns">
        <div className="is-flex is-flex-direction-column is-align-items-center column is-one-third long-card-header">
          <h3 className="center big">STARTS</h3>

          <div className="columns full-width dates">
            <div>
              
              <h1 className="p-0 cream">{new Date(props.eventData.date).toLocaleDateString('en-us', { weekday: "long" })}</h1>
              <h1 className="p-0 white big no-space">{new Date (props.eventData.date).getDate()}</h1>
              <h1 className="center green no-space">{months[new Date (props.eventData.date).getMonth()]}</h1>
              
            </div>

            {/* <div>
              <h3>ENDS</h3>
              <h1 className="p-0 white big">06</h1>
              <h3 className="center">JUNE</h3>
            </div> */}
          </div>

          {/* <p className="white">53 People are Participating</p> */}
          {/* <p className="white">5 Colleagues are Interested!</p> */}
        </div>

        <div className="p-0 is-flex is-flex-direction-column is-align-items-center column">
        <h3 className={cultureCSS}>{props.eventData.culture}</h3>
          <h1>{props.eventData.name}</h1>
          
          <p className="m-5 bold">
            {props.eventData.description}
          </p>
        </div>
      </form>
    </div>
  );
}

export default LongCard;
