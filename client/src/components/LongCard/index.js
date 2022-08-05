import React from "react";

function LongCard() {
    return (
        <div className="container is-flex is-flex-direction-column is-align-items-center">
            <button className="m-4 btn-generic " type="submit">+ Add / - Remove Event</button>

            <form className="m-4 columns">

                <div className="is-flex is-flex-direction-column is-align-items-center column is-one-third long-card-header">
                    <h3 className="center big">DATES</h3>

                    <div className="columns full-width dates">
                        <div>
                            <h3>START</h3>
                            <h1 className="p-0 white big">01</h1>
                            <h3 className="center">JUNE</h3>
                        </div>

                        <div>
                            <h3>ENDS</h3>
                            <h1 className="p-0 white big">06</h1>
                            <h3 className="center">JUNE</h3>
                        </div>
                    </div>

                    <p className="white">53 People are Participating</p>
                    <p className="white">5 Colleagues are Interested!</p>
                </div>

                <div className="is-flex is-flex-direction-column is-align-items-center column">
                    <h1>Culture Event Name</h1>
                    <h3 className="m-2 culture-tag">Culture Tag</h3>
                    <img className="m-3" src="https://via.placeholder.com/250" alt="HTML5 Icon" style={{
                        width:'250px',
                        height:'250px',
                        }}></img>
                    <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore
                        magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Vestibulum mattis ullamcorper velit sed
                        ullamcorper.</p>
                </div>
            </form>
        </div>
    );
}

export default LongCard;