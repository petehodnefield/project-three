import React from "react";

function ShortCard() {
    return (
        <form class="m-4 is-flex is-flex-direction-column is-align-items-center short-card-width">

            <div class="short-card">
                {/* <!-- Date Detail Header --> */}
                <div>
                    <h1 class="p-0 big white">01</h1>
                    <h3 class="big">JUNE</h3>
                </div>
                {/* <!-- Event Detail Body --> */}
                <div class="m-4 is-flex is-flex-direction-column is-align-items-center">
                    <h1 class="white">[Culture Event Name]</h1>
                    <h3 class="m-2 culture-tag">[Culture Tag]</h3>
                    <img class="m-3" src="https://via.placeholder.com/250" alt="HTML5 Icon" style="width:250px;height:250px;"></img>
                    {/* <!-- People Interested --> */}
                    <p class="white">53 People are Participating</p>
                    <p class="white">5 Colleagues are Interested!</p>
                </div>
            </div>
            <button class="m-0 full-width no-round" type="submit">+ Add / - Remove Event</button>
        </form>
    );
}

export default ShortCard;