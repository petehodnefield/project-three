import React from "react";

function ShortCard() {
    return (
        <form className="m-4 is-flex is-flex-direction-column is-align-items-center short-card-width">

            <div className="short-card full-width">

                <div className="p-2">
                    <h1 className="p-0 big white">01</h1>
                    <h3 className="big raise">JUNE</h3>
                </div>

                <div className="p-3 is-flex is-flex-direction-column is-align-items-center cream-back">
                    <h1>Culture Event Name</h1>
                    <h3 className="m-2 culture-tag raise">Culture Tag</h3>
                    {/* <img className="m-3" src="https://via.placeholder.com/250" alt="HTML5 Icon" style={{
                        width:'250px',
                        height:'250px',
                        }}></img> */}
                    <p>53 People are Participating</p>
                    <p>5 Colleagues are Interested!</p>
                </div>
            </div>
            <button className="m-0 full-width no-round" type="submit">+ Add / - Remove Event</button>
        </form>
    );
}

export default ShortCard;