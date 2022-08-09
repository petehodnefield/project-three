import React from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ShortCard(props) {
  console.log(props.eventData.date);
  return (
    <form className="m-4 is-flex is-flex-direction-column is-align-items-center short-card-width">
      <div className="short-card full-width">
        <div className="p-2">
          <h1 className="p-0 big white">{new Date (props.eventData.date).getDate()}</h1>
          <h3 className="big raise">{months[new Date (props.eventData.date).getMonth()]}</h3>
        </div>

        <div className="p-3 is-flex is-flex-direction-column is-align-items-center cream-back">
          <h1>{props.eventData.name}</h1>
          <h3 className="m-2 culture-tag">{props.eventData.culture}</h3>
          {/* <img className="m-3" src="https://via.placeholder.com/250" alt="HTML5 Icon" style={{
                        width:'250px',
                        height:'250px',
                        }}></img> */}
          {/* <p>53 People are Participating</p>
          <p>5 Colleagues are Interested!</p> */}
        </div>
      </div>
      {/* <button className="m-0 full-width no-round" type="submit">
        + Add / - Remove Event
      </button> */}
    </form>
  );
}

export default ShortCard;
