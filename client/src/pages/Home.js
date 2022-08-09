import React from 'react';
import '../App.css';
// Components
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import LongCard from "../components/LongCard";
import ShortCard from "../components/ShortCard";
import ColleaguesList from '../components/ColleaguesList';
import ColleaguesSearch from '../components/ColleaguesSearch';
import QuickSearches from '../components/QuickSearches';
import NavButtons from '../components/NavButtons';

function Home() {
  function renderLogin(testUserLoggedIn) {
    if (testUserLoggedIn) {
      return (<>
      <Login></Login>
      <SignUp></SignUp>
      </>)
    } else {
      return <></>
    }
  }

  return (
    <div>
      <header>
        <h1 class="white big">DEI CALENDAR</h1>
      </header>

      <main class="columns">
        <nav class="m-0 p-0 container is-flex is-flex-direction-column is-align-items-center column is-one-quarter">
          <NavButtons isUserLoggedIn={false} iLoveCake={true}></NavButtons>
          <QuickSearches></QuickSearches>
        </nav>
        <main className="container is-flex is-flex-direction-column is-align-items-center">
        <h1 class="cream">UPCOMING CULTURAL EVENTS</h1>
          <LongCard></LongCard>
          <ShortCard></ShortCard>
          {renderLogin(false)}
        </main>
      </main>
    </div>
  );
}

export default Home;
