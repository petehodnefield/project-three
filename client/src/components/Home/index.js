import React from "react";
import NavButtons from "../NavButtons";
import QuickSearches from "../QuickSearches";
import ColleaguesList from "../ColleaguesList";
import ColleaguesSearch from "../ColleaguesSearch";
import LongCard from "../LongCard";
import ShortCard from "../ShortCard";
import Login from "../Login";
import SignUp from "../SignUp";
import Auth from "../../utils/auth";

function Home() {
  const loggedIn = Auth.loggedIn();
  console.log("loggedin:", loggedIn);

  return (
    <div>
      <header className="shadow">
        <h1 className="white big">DEI CALENDAR</h1>
      </header>

      <main class="columns">
        <nav class="m-0 p-0 container is-flex is-flex-direction-column is-align-items-center column is-one-quarter">
          <NavButtons></NavButtons>
          <QuickSearches></QuickSearches>
          <ColleaguesList></ColleaguesList>
          {loggedIn ? <ColleaguesSearch></ColleaguesSearch> : <div>Hi</div>}
        </nav>
        <main className="container is-flex is-flex-direction-column is-align-items-center">
          <h1 class="cream">UPCOMING CULTURAL EVENTS</h1>
          <LongCard></LongCard>
          <ShortCard></ShortCard>
          <Login></Login>
          <SignUp></SignUp>
        </main>
      </main>
    </div>
  );
}

export default Home;
