import React from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function LongCard(props) {
  return (
    <div className="m-5 container is-flex is-flex-direction-column is-align-items-center column">
      {/* <button className="m-4 btn-generic " type="submit">
        + Add / - Remove Event
      </button> */}

      <form className="m-4 columns">
        <div className="is-flex is-flex-direction-column is-align-items-center column is-one-third long-card-header">
          <h3 className="center big">STARTS</h3>

          <div className="columns full-width dates">
            <div>
              <h1 className="center white">{months[new Date (props.eventData.date).getMonth()]}</h1>
              <h1 className="p-0 white big raise">{new Date (props.eventData.date).getDate()}</h1>
              
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

        <div className="is-flex is-flex-direction-column is-align-items-center column">
          <h1>{props.eventData.name}e</h1>
          <h3 className="m-2 culture-tag">{props.eventData.culture}</h3>
          <p className="m-3">
            {props.eventData.description}
          </p>
        </div>
      </form>
    </div>
  );
}

export default LongCard;
